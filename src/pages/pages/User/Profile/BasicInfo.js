import React from "react";
import styled from "styled-components/macro";

import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Typography as MuiTypography,
  Divider as MuiDivider,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import Item from "./Item";
import Details from "./Details";

const Card = styled(MuiCard)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Divider = styled(MuiDivider)(spacing);

const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)}px;
  }
`;

const BasicInfo = (props) => {
  return (
    <Card mb={3}>
      <CardContent>
        <Typography variant="body1" align="left" component="div">
          <Box display="flex">
            <Item value="Full Name" />
            <Details value={props.name} />
          </Box>

          <Divider my={6} />
          <Box display="flex">
            <Item value="Email Address" />
            <Details value={props.email} />
          </Box>

          <Divider my={6} />
          <Box display="flex">
            <Item value="Phone" />
            <Details value={props.phone} />
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BasicInfo;
