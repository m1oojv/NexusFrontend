import React from "react";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

import {
  Typography as MuiTypography,
  Avatar as MuiAvatar,
  Grid,
  Divider as MuiDivider,
} from "@material-ui/core";

import parse from "html-react-parser";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";

const Spacer = styled.div(spacing);
const Divider = styled(MuiDivider)(spacing);
const Typography = styled(MuiTypography)(spacing);

const Avatar = styled(MuiAvatar)`
  margin-right: ${(props) => props.theme.spacing(2)}px;
`;

const useStyles = makeStyles({
  dateTime: {
    fontSize: 10,
    color: grey[600],
  },
});

function toDateString(props) {
  const dateTimeString = new Date(props * 1000);
  const dateString = dateTimeString.toLocaleString([], {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const timeString = dateTimeString.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return dateString + " " + timeString;
}

const CommentSection = (props) => {
  const textClass = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={1}>
          <Avatar>{props.comment.sender.charAt(0)}</Avatar>
        </Grid>
        <Grid item xs={9}>
          <Typography display="inline">{props.comment.sender + " "}</Typography>
          <Typography
            display="inline"
            variant="caption"
            className={textClass.dateTime}
          >
            {toDateString(props.comment.dateTime)}
          </Typography>
          {parse(props.comment.content)}
        </Grid>
      </Grid>
      <Spacer mb={2} />
      <Divider my={4} />
    </React.Fragment>
  );
};

export default CommentSection;
