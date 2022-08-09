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

const Stats = ({
  title,
  title2,
  amount,
  amount2,
  chip,
  percentageText,
  percentagecolor,
}) => {
  return (
    <Card>
      <CardContent>
        <Grid item xs={3}>
          <Typography variant="h6" mb={3}>
            Resiliency Scores
          </Typography>
          <Typography variant="body2" mb={3}>
            <b>{title}</b>
          </Typography>
          <Typography variant="h3" mb={3}>
            <Box fontWeight="fontWeightRegular">{amount}</Box>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body2" mb={3}>
            <b>{title2}</b>
          </Typography>
          <Typography variant="h3" mb={3}>
            <Box fontWeight="fontWeightRegular">{amount2}</Box>
          </Typography>
          <Percentage
            variant="subtitle2"
            mb={3}
            color="textSecondary"
            percentagecolor={percentagecolor}
          >
            <span>{percentageText}</span>
          </Percentage>
        </Grid>
        <Chip label={chip} />
      </CardContent>
    </Card>
  );
};

export default Stats;
