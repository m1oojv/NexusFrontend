import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import {
  Card as MuiCard,
  CardHeader,
  Chip as MuiChip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Link,
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

const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: calc(100vw - ${(props) => props.theme.spacing(12)}px);
`;

// Data
let id = 0;
function createData(scenario, id) {
  let link = "/threatanalysis/scenario?id=" + id;
  return { scenario, id, link };
}

const handleClick = () => {
  alert("You clicked the chip.");
};

const ThreatEvents = ({ threatScenario }) => {
  let rows = [];
  Array.from(threatScenario)
    .reverse()
    .map((scenario) => {
      rows.push(createData(scenario.title, scenario.id));
    });
  console.log(rows);

  return (
    <Card mb={3}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertical />
          </IconButton>
        }
        title="Threat Analysis"
      />

      <Paper>
        <TableContainer style={{ maxHeight: 358 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: 100 }}>Scenarios</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      textOverflow: "ellipsis",
                      display: "block",
                      overflow: "hidden",
                    }}
                  >
                    <Link
                      component={NavLink}
                      exact
                      to={row.link}
                      style={{ color: "#FFF" }}
                    >
                      {row.scenario}
                    </Link>
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

export default ThreatEvents;
