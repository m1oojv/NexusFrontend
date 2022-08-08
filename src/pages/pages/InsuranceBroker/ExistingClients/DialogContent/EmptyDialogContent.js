import React from "react";

import styled from "styled-components/macro";

import { Typography, Grid } from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { File } from "react-feather";

import { grey } from "@material-ui/core/colors";

const Spacer = styled.div(spacing);

function EmptyDialogContent() {
  return (
    <React.Fragment>
      <Spacer mb={10} />
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} align="center">
          <File size={70} color={grey[500]} />
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="body1">No Data to Display</Typography>
        </Grid>
      </Grid>
      <Spacer mb={10} />
    </React.Fragment>
  );
}

export default EmptyDialogContent;
