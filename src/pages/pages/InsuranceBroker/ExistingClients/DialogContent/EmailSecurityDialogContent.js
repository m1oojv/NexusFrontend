import React, { useEffect } from "react";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  TablePagination,
} from "@material-ui/core";

function EmailSecurityDialogContent(data) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function chooseIcon(status) {
    if (status === true) {
      return <CheckIcon style={{ fontSize: 18, color: "#64dd17" }} />;
    } else if (status === false) {
      return <CloseIcon style={{ fontSize: 18, color: "#d50000" }} />;
    }
  }

  function handleEmptyDescription(description) {
    let descriptionNew = description;
    if (description === "") {
      descriptionNew = "Valid record";
      return descriptionNew;
    } else {
      return descriptionNew;
    }
  }

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell width="10%">Authentication</TableCell>
            <TableCell width="10%">Validity</TableCell>
            <TableCell width="40%">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              DMARC
            </TableCell>
            <TableCell component="th" scope="row">
              {chooseIcon(data.data.dmarc.valid)}
            </TableCell>
            <TableCell component="th" scope="row">
              {handleEmptyDescription(data.data.dmarc.error)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              SPF
            </TableCell>
            <TableCell component="th" scope="row">
              {chooseIcon(data.data.spf.valid)}
            </TableCell>
            <TableCell component="th" scope="row">
              {handleEmptyDescription(data.data.spf.error)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={2}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default EmailSecurityDialogContent;
