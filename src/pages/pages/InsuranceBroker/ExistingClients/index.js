import React, { useRef } from "react";
import styled from "styled-components/macro";
import { NavLink, useHistory } from "react-router-dom";
import api_companies from "../../../../api/services/api_companies";
import api_reports from "../../../../api/services/api_reports";
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
  assessment_progress
) {
  return {
    name,
    risk,
    industry,
    country,
    premium,
    id,
    assessment_progress,
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

  const mutation = useMutation("deleteCompany", (deleteCompany) => {
    api_companies.deleteCompany(deleteCompany);
  });

  const {
    data = {
      data: {
        data: {
          results: [
            {
              // risk (but nested) and premium (financials) are not found in new json response
              id: "",
              name: "",
              risk: "",
              industry: "",
              country: "",
              premium: "",
              assessment_progress: "",
            },
          ],
        },
      },
    },
    refetch,
    status,
  } = useQuery(
    "fetchInsuredCompanies",
    () => api_companies.getInsuredCompanies(),
    {
      manual: true,
      retry: 3,
    }
  );

  const link = useQuery(
    "getPdfReport",
    () => api_reports.getPdfReport({ id: downloadItem.id }),
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
    mutation.mutate(
      { id: selectedItem },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
    setSelectedItem({});
  }

  function handleDownload(url) {
    if (url != undefined) {
      window.location.href = url;
    }
  }

  let companies = [];
  let results = data.data.data.results;
  if (status != "success") {
    results = [];
  }
  Array.from(results).map((row) => {
    companies.push(
      createData(
        row.name,
        row.risk,
        row.industry,
        row.country,
        row.premium,
        row.id,
        row.assessment_progress
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
            return rowData.assessment_progress == "COMPLETED"
              ? {
                  icon: () => <RemoveRedEye />,
                  tooltip: "View",
                  onClick: () =>
                    history.push(
                      determineLink(rowData.assessment_progress, rowData.id)
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
