import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  TablePagination,
} from "@material-ui/core";

function MarketplaceDialogContent(data) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function HandleMultipleReasons(reason) {
    let reasonNew;

    if (reasonNew == 0) {
      reasonNew = "-";
      return reasonNew;
    } else if (reason.length > 1) {
      let i = 0;
      reasonNew = reason[0];

      for (i = 1; i < reason.length; i++) {
        reasonNew = reasonNew + ", " + reason[i];
      }
      return reasonNew;
    } else {
      return reason;
    }
  }

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell width="15%">Date</TableCell>
            <TableCell width="20%">Source</TableCell>
            <TableCell width="20%">Reason</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((finding, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {finding.date}
                </TableCell>
                <TableCell component="th" scope="row">
                  {finding.source}
                </TableCell>
                <TableCell component="th" scope="row">
                  {HandleMultipleReasons(finding.reason)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default MarketplaceDialogContent;
