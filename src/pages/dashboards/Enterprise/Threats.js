import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { red, orange, green } from "@material-ui/core/colors";

import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  Chip as MuiChip,
  IconButton,
  Avatar as MuiAvatar,
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Link,
} from "@material-ui/core";

import services from "../../../api/services/services.js";
import { useQuery } from "react-query";

import { spacing } from "@material-ui/system";

import { MoreVertical } from "react-feather";

const Card = styled(MuiCard)(spacing);

const Avatar = styled(MuiAvatar)`
  margin-right: ${(props) => props.theme.spacing(2)}px;
`;

const Chip = styled(MuiChip)`
  height: 20px;
  padding: 4px 0;
  font-size: 90%;
  background-color: ${(props) => props.rgbcolor};
  color: ${(props) => props.theme.palette.common.white};
`;

const CardContent = styled(MuiCardContent)`
  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)}px;
  }
`;

const Spacer = styled.div(spacing);

function determineColor(number) {
  if (number >= 3) return green[500];
  else if (number >= 1) return orange[500];
  else if (number > 0) return red[500];
  else return null;
}

function createData(threatScenario, score, id, uuid) {
  let link = "/threatscenario?id=" + id + "&vendor=" + uuid;
  return { threatScenario, score, id, link };
}

const Companies = (props) => {
  let value = { vendor: props.id };
  const {
    isLoading,
    error,
    data = { data: { "": "" } },
  } = useQuery("fetchVendorThreatScenarios", () =>
    services.getvendorthreatscenario(value)
  );
  let rows = [];
  Array.from(data.data).map((row) => {
    console.log(row);
    rows.push(
      createData(row.threatScenario, row.score[0][0], row.id, value.vendor)
    );
  });
  rows = rows.sort((a, b) => b.premium - a.premium);
  rows = rows.slice(0, 4);

  return (
    <Card mb={1}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="body2" gutterBottom>
              <b>Top Threat Events</b>
            </Typography>
          </Grid>
        </Grid>
        <Spacer mb={6} />
        <Paper>
          <TableContainer style={{ height: 340 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Threat Event</TableCell>
                  <TableCell>Resiliency</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      <Link
                        component={NavLink}
                        exact
                        to={row.link}
                        style={{ color: "#000" }}
                      >
                        {row.threatScenario}
                      </Link>
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                      <Chip
                        size="small"
                        rgbcolor={determineColor(row.score)}
                        mb={1}
                        label={row.score}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default Companies;
