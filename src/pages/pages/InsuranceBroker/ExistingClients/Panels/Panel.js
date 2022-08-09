import React from "react";
import styled from "styled-components/macro";
import { HelpCircle } from "react-feather";
import { grey } from "@material-ui/core/colors";

import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Typography as MuiTypography,
  Tooltip,
  Grid,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const Typography = styled(MuiTypography)(spacing);

const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)}px;
  }
`;

const Panel = ({ title, value, color, hovertext }) => {
  return (
    <Card mb={3} style={{ height: "100%" }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="body2" mb={2}>
              <b>{title + "      "}</b>
              <Tooltip title={hovertext} placement="top-start">
                <HelpCircle size={14} color={grey[600]} />
              </Tooltip>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h3" mb={5} align="center">
              <Box fontWeight="fontWeightRegular" color={color}>
                {"$" + parseInt(value).toLocaleString()}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Panel;
