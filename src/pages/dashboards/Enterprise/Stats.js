import React from "react";
import styled from "styled-components/macro";

import {
  Box,
  Grid,
  Card,
  CardContent as MuiCardContent,
  Chip as MuiChip,
  Typography as MuiTypography,
} from "@material-ui/core";

import { rgba } from "polished";

import { spacing } from "@material-ui/system";
import ReactStoreIndicator from "react-score-indicator";

const Typography = styled(MuiTypography)(spacing);

const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)}px;
  }
`;

const Chip = styled(MuiChip)`
  position: absolute;
  top: 16px;
  right: 16px;
  height: 20px;
  padding: 4px 0;
  font-size: 85%;
  background-color: ${(props) => props.theme.palette.secondary.main};
  color: ${(props) => props.theme.palette.common.white};
  margin-bottom: ${(props) => props.theme.spacing(4)}px;

  span {
    padding-left: ${(props) => props.theme.spacing(2)}px;
    padding-right: ${(props) => props.theme.spacing(2)}px;
  }
`;

const Chip2 = styled(MuiChip)`
  position: absolute;
  top: 50px;
  right: 16px;
  height: 20px;
  padding: 4px 0;
  font-size: 85%;
  background-color: ${(props) => props.theme.palette.secondary.main};
  color: ${(props) => props.theme.palette.common.white};
  margin-bottom: ${(props) => props.theme.spacing(4)}px;

  span {
    padding-left: ${(props) => props.theme.spacing(2)}px;
    padding-right: ${(props) => props.theme.spacing(2)}px;
  }
`;

const Percentage = styled(MuiTypography)`
  span {
    color: ${(props) => props.percentagecolor};
    font-weight: ${(props) => props.theme.typography.fontWeightBold};
    background: ${(props) => rgba(props.percentagecolor, 0.1)};
    padding: 2px;
    border-radius: 3px;
    margin-right: ${(props) => props.theme.spacing(2)}px;
  }
`;

const Stats = ({ amount }) => {
  console.log(amount[0][0]);
  return (
    <Card>
      <CardContent>
        <Grid>
          <Typography variant="h6" mb={3}>
            Overall Resiliency
          </Typography>
          <Typography variant="body2" mb={3}>
            <b>Resiliency Score</b>
          </Typography>
          <Grid item container justify="center">
            <ReactStoreIndicator value={amount[0][0]} maxValue={5} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Stats;
