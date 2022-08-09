import React, { useRef } from "react";
import styled from "styled-components/macro";
import { NavLink, useHistory } from "react-router-dom";
import services from "../../../../api/services/services.js";
import { useQuery, useMutation } from "react-query";
import DeleteDialog from "./DeleteDialog";

import { spacing } from "@material-ui/system";

import {
  Button,
  Link,
  Grid,
  CircularProgress,
  Avatar as MuiAvatar,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Typography,
} from "@material-ui/core";

import MaterialTable from "@material-table/core";
import { forwardRef } from "react";

import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import SaveAlt from "@material-ui/icons/SaveAlt";
import { Add as AddIcon } from "@material-ui/icons";

const tableIcons = {
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
};

const Divider = styled(MuiDivider)(spacing);

function createData(
  name,
  risk,
  industry,
  country,
  premium,
  id,
  assessmentProgress
) {
  return {
    name,
    risk,
    industry,
    country,
    premium,
    id,
    assessmentProgress,
  };
}

function determineLink(status, id) {
  return `/clientdetails?id=${id}`;
}

const ExistingClients = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({});
  const [downloadItem, setDownloadItem] = React.useState({});
  const isMounted = useRef(false);

  const mutation = useMutation("deleteCompany", (deleteCompany) =>
    services.deletecompany(deleteCompany)
  );

  const {
    refetch,
    data = {
      data: {
        id: "",
        companyName: "",
        risk: "",
        industry: "",
        country: "",
        premium: "",
        assessmentProgress: "",
      },
    },
  } = useQuery("fetchInsuredCompanies", () => services.getinsuredcompanies(), {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const link = useQuery(
    "generatepdf",
    () => services.generatepdf({ id: downloadItem.id }),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      onSuccess: (pdf) => handleDownload(pdf.data),
    }
  );

  console.log(link);

  React.useEffect(() => {
    refetch();
    if (isMounted.current) {
      link.refetch();
    } else {
      isMounted.current = true;
    }
  }, [downloadItem]);

  const history = useHistory();

  function handleClose() {
    // reset on close
    setOpen(false);
    setSelectedItem({});
  }

  function handleConfirm() {
    // reset on close
    setOpen(false);
    mutation.mutate({ data: selectedItem }, { onSuccess: () => refetch() });
    setSelectedItem({});
  }

  function handleDownload(url) {
    if (url != undefined) {
      window.location.href = url;
    }
  }

  let companies = [];
  Array.from(data.data).map((row) => {
    companies.push(
      createData(
        row.companyName,
        row.risk,
        row.industry,
        row.country,
        row.premium,
        row.id,
        row.assessmentProgress
      )
    );
  });

  function displayTable() {}
  return (
    <React.Fragment>
      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            Existing Clients
          </Typography>
        </Grid>
        <Grid item>
          <div>
            <Link component={NavLink} exact to="/newapplication">
              <Button variant="contained" color="primary">
                <AddIcon />
                Add New Client
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>

      <Divider my={6} />
      <MaterialTable
        icons={tableIcons}
        title="Companies"
        columns={[
          {
            title: "Companies",
            field: "name",
            grouping: false,
            render: (rowData) => {
              return (
                <React.Fragment>
                  <Grid container alignItems="center">
                    <Typography>{rowData.name}</Typography>
                  </Grid>
                </React.Fragment>
              );
            },
          },
          { title: "Industry", field: "industry" },
        ]}
        data={companies}
        actions={[
          (rowData) => {
            return rowData.assessmentProgress == "COMPLETED"
              ? {
                  icon: () => <RemoveRedEye />,
                  tooltip: "View",
                  onClick: () =>
                    history.push(
                      determineLink(rowData.assessmentProgress, rowData.id)
                    ),
                }
              : {
                  icon: () => <CircularProgress size="1.2rem" />,
                  tooltip: "In Progress",
                };
          },
          {
            icon: () => <DeleteOutline />,
            tooltip: "Delete",
            onClick: (event, rowData) => {
              setSelectedItem(rowData.id);
              setOpen(true);
            },
          },
          {
            icon: () => <SaveAlt />,
            tooltip: "Download PDF",
            onClick: (event, rowData) => {
              setDownloadItem(rowData);
            },
          },
        ]}
        options={{
          search: true,
          exportButton: true,
          actionsColumnIndex: -1,
          grouping: true,
        }}
      />
      {open ? (
        <DeleteDialog
          open={open}
          handleClose={handleClose}
          handleConfirm={handleConfirm}
        />
      ) : null}
    </React.Fragment>
  );
};

export default ExistingClients;
