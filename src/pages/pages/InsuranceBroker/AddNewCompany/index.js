import React from "react";
import styled, { withTheme } from "styled-components/macro";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { UserPlus } from "react-feather";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Typography = styled(MuiTypography)(spacing);

function Home({ theme }) {
  return (
    <React.Fragment>
      <Helmet title="Home" />
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Card variant="outlined">
            <CardMedia
              component="img"
              alt="green iguana"
              height="350"
              image="/static/img/avatars/home_img5.png"
            />
            <CardContent>
              <Typography variant="h4" gutterBottom align="center">
                Setup a new client profile.
              </Typography>
              <Button
                component={Link}
                to="/newapplication"
                fullWidth
                color="primary"
                startIcon={<UserPlus />}
              >
                Add a New Client
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withTheme(Home);
