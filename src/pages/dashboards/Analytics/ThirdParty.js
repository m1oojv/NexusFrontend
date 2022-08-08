import React from "react";
import styled, { withTheme } from "styled-components/macro";

import { green, red, orange } from "@material-ui/core/colors";

import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardHeader,
  IconButton,
  Table,
  TableBody,
  TableCell as MuiTableCell,
  TableHead,
  TableRow as MuiTableRow,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { Doughnut } from "react-chartjs-2";

import { MoreVertical } from "react-feather";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)`
  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(2)}px;
  }
`;

const ChartWrapper = styled.div`
  height: 168px;
  position: relative;
`;

const DoughnutInner = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -22px;
  text-align: center;
  z-index: 0;
`;

const TableRow = styled(MuiTableRow)`
  height: 42px;

  &:last-child th,
  &:last-child td {
    border-bottom: 0;
  }
`;

const TableCell = styled(MuiTableCell)`
  padding-top: 0;
  padding-bottom: 0;
`;

const GreenText = styled.span`
  color: ${() => green[400]};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const RedText = styled.span`
  color: ${() => red[400]};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

function ThirdParty({ theme }) {
  const data = {
    labels: ["High Risk", "Medium Risk", "Low Risk"],
    datasets: [
      {
        data: [35, 48, 70],
        backgroundColor: [red[500], orange[500], theme.palette.secondary.main],
        borderWidth: 5,
        borderColor: theme.palette.background.paper,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  };

  return (
    <Card mb={3}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertical />
          </IconButton>
        }
        title="Third Party Risk Management"
      />

      <CardContent>
        <ChartWrapper>
          <DoughnutInner variant="h4">
            <Typography variant="h4">153</Typography>
            <Typography variant="caption">Vendors Assessed</Typography>
          </DoughnutInner>
          <Doughnut data={data} options={options} />
        </ChartWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Risk Level</TableCell>
              <TableCell align="right">No. of Vendors</TableCell>
              <TableCell align="right">% Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                High Risk
              </TableCell>
              <TableCell align="right">35</TableCell>
              <TableCell align="right">
                <GreenText>+35%</GreenText>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Medium Risk
              </TableCell>
              <TableCell align="right">48</TableCell>
              <TableCell align="right">
                <RedText>-12%</RedText>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Low Risk
              </TableCell>
              <TableCell align="right">70</TableCell>
              <TableCell align="right">
                <GreenText>+46%</GreenText>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default withTheme(ThirdParty);
