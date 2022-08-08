import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { withTheme } from "styled-components/macro";
import { red, orange, green, grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";

import {
  Grid,
  Card as MuiCard,
  CardContent,
  Typography as MuiTypography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Chip as MuiChip,
  Link,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";

import { useForm, Controller } from "react-hook-form";
import { spacing } from "@material-ui/system";
import AssignedTasks from "./assignedtasks.json";
import CommentSection from "./CommentSection";

const Spacer = styled.div(spacing);
const Card = styled(MuiCard)(spacing);
const Typography = styled(MuiTypography)(spacing);

const useStyles = makeStyles({
  bold: {
    fontWeight: 600,
  },
});

const Chip = styled(MuiChip)`
  height: 20px;
  padding: 4px 0;
  font-size: 90%;
  background-color: ${(props) => props.rgbcolor};
  color: ${(props) => props.theme.palette.common.white};
`;

function determineColor(priority) {
  if (priority === "Low") return green[500];
  else if (priority === "Medium") return orange[500];
  else if (priority === "High") return red[500];
  else return null;
}

function commentDetail(rowDetail) {
  if (rowDetail.comments != undefined) {
    return rowDetail.comments.map((comment, index) => {
      return <CommentSection key={index} comment={comment} />;
    });
  }
}
const Task = (props) => {
  const boldTextClass = useStyles();
  const [open, setOpen] = useState(false);
  const [rowDetail, setRowDetail] = useState([]);
  let userName = "";
  const [commentContent, setCommentContent] = useState("");
  const [commentSender, setCommentSender] = useState("");
  const [commentDateTime, setCommentDateTime] = useState("");

  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData) {
    userName = userData.firstName;
  }

  useEffect(() => {
    setCommentSender(userName);
  });

  const handleClose = () => {
    setCommentContent("");
    setOpen(false);
  };

  const handleOpen = (row) => {
    setOpen(true);
    setRowDetail(row);
  };

  const handleSend = () => {
    setCommentDateTime(Date.now());
    console.log(commentContent);
    console.log(commentSender);

    setCommentContent("");
  };
  return (
    <Card mb={3}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="body2" gutterBottom>
              <b>Assigned Tasks</b>
            </Typography>
          </Grid>
        </Grid>
        <Spacer mb={6} />
        <Paper>
          <TableContainer style={{ height: 294 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Task Name</TableCell>
                  <TableCell>Date Assigned</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell>Priority</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {AssignedTasks.tasks.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      <Link
                        style={{ color: "#000" }}
                        onClick={() => handleOpen(row)}
                      >
                        {row.name}
                      </Link>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.date}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.due}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Chip
                        size="small"
                        rgbcolor={determineColor(row.priority)}
                        mb={1}
                        label={row.priority}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Dialog
              open={open}
              onClose={handleClose}
              fullWidth={true}
              maxWidth={"md"}
            >
              <Grid container alignItems="center">
                <DialogTitle>{rowDetail.name}</DialogTitle>
              </Grid>

              <DialogContent>
                <Typography variant="caption" style={{ color: grey[600] }}>
                  Created by {rowDetail.creator} on {rowDetail.date}
                </Typography>
                <Spacer mb={2} />
                <Typography className={boldTextClass.bold}>
                  Description
                </Typography>
                <Typography>
                  {rowDetail.description === "" ? "-" : rowDetail.description}
                </Typography>
                <Spacer mb={3} />
                <Typography className={boldTextClass.bold}>Due Date</Typography>
                <Typography>
                  {rowDetail.due === "" ? "-" : rowDetail.due}
                </Typography>
                <Spacer mb={3} />
                <Typography className={boldTextClass.bold}>Priority</Typography>
                <Chip
                  size="small"
                  rgbcolor={determineColor(rowDetail.priority)}
                  mb={1}
                  label={rowDetail.priority}
                />
                <Spacer mb={5} />
                <Typography className={boldTextClass.bold}>Comments</Typography>

                <Grid
                  container
                  spacing={4}
                  alignItems="flex-end"
                  data-text-editor="form-editor"
                >
                  <Grid item xs={11}>
                    <ReactQuill
                      theme="snow"
                      placeholder="Add a comment"
                      bounds={`[data-text-editor="form-editor"]`}
                      value={commentContent || ""}
                      onChange={setCommentContent}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={handleSend}
                    >
                      Send
                    </Button>
                  </Grid>
                </Grid>
                <Spacer mb={6} />
                {commentDetail(rowDetail)}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
              </DialogActions>
            </Dialog>
          </TableContainer>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default withTheme(Task);
