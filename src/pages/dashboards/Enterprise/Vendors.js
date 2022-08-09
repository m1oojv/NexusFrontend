import React from "react";
import styled from "styled-components/macro";
import { NavLink, useHistory } from "react-router-dom";
import services from "../../../api/services/services.js";
import { useQuery } from "react-query";

import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  Typography as MuiTypography,
  Chip as MuiChip,
  Paper,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@material-ui/core";

import { red, green, orange } from "@material-ui/core/colors";

import { spacing } from "@material-ui/system";

import { MoreVertical } from "react-feather";

const Card = styled(MuiCard)(spacing);

const Chip = styled(MuiChip)`
  height: 20px;
  padding: 4px 0;
  font-size: 90%;
  background-color: ${(props) => props.rgbcolor};
  color: ${(props) => props.theme.palette.common.white};
`;

const Typography = styled(MuiTypography)(spacing);

const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)}px;
  }
`;
const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: calc(100vw - ${(props) => props.theme.spacing(12)}px);
`;

const ScoreChip = styled(MuiChip)`
  spacing: 120;
  font-size: 90%;
  background-color: ${(props) => props.rgbcolor};
  color: ${(props) => props.theme.palette.common.white};
`;

function determineColor(number) {
  if (number >= 3) return green[500];
  else if (number >= 1) return orange[500];
  else if (number > 0) return red[500];
  else return null;
}

function determineAssessColor(value) {
  if (value == "Completed") return green[500];
  else if (value == "In Progress") return orange[500];
  else if (value == "Not Started") return red[500];
  else return null;
}

function createData(
  name,
  score,
  criticality,
  assessmentProgress,
  lastAssessed,
  description,
  id
) {
  return {
    name,
    score,
    criticality,
    assessmentProgress,
    lastAssessed,
    description,
    id,
  };
}

const Vendors = () => {
  const {
    data = {
      data: {
        vendorName: "",
        criticality: "",
        assessmentProgress: "",
        lastAssessed: "",
        score: "",
        description: "",
        id: "",
      },
    },
  } = useQuery("fetchVendors", () => services.getvendorlist());

  console.log(data.data);
  let vendors = [];
  Array.from(data.data).map((row) => {
    vendors.push(
      createData(
        row.vendorName,
        row.score[0][0],
        row.criticality,
        row.assessmentProgress,
        row.lastAssessed,
        row.description,
        row.id
      )
    );
  });
  vendors.sort((a, b) => (a.score < b.score ? 1 : -1));
  return (
    <Card mb={3}>
      <CardContent>
        <Typography variant="body2" gutterBottom>
          <b>Vendor Resiliency Scores</b>
        </Typography>
      </CardContent>

      <Paper>
        <TableContainer style={{ maxHeight: 358 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: 100 }}>Vendors</TableCell>
                <TableCell align="center" style={{ width: 50 }}>
                  Resiliency
                </TableCell>
                <TableCell align="center" style={{ width: 50 }}>
                  Criticality
                </TableCell>
                <TableCell align="center" style={{ width: 50 }}>
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vendors.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row" style={{ width: 100 }}>
                    <Link
                      component={NavLink}
                      exact
                      to={"/vendordetails?id=" + row.id}
                      style={{ color: "#FFF" }}
                    >
                      {row.name}
                    </Link>
                  </TableCell>
                  <TableCell align="center" style={{ width: 50 }}>
                    <ScoreChip
                      label={row.score}
                      m={1}
                      key={row.id}
                      rgbcolor={determineColor(row.score)}
                    />
                  </TableCell>
                  <TableCell align="center" style={{ width: 50 }}>
                    {row.criticality}
                  </TableCell>
                  <TableCell align="left" style={{ width: 50 }}>
                    {row.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Card>
  );
};

export default Vendors;
