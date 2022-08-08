import React, { useEffect } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  TablePagination,
} from "@material-ui/core";

function PortsDialogContent(data) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  let combinedPorts = [...data.data.data.high, ...data.data.data.medium];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell width="15%">Port</TableCell>
            <TableCell width="20%">Service</TableCell>
            <TableCell width="25%">IP Address</TableCell>
            <TableCell width="30%">Risk Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {combinedPorts
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((finding, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {finding.port}
                </TableCell>
                <TableCell component="th" scope="row">
                  {finding.service}
                </TableCell>
                <TableCell component="th" scope="row">
                  {finding.ip}
                </TableCell>
                <TableCell component="th" scope="row">
                  {finding.risk}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={
          data.data.totalNumberOfHighRisk + data.data.totalNumberOfMediumRisk
        }
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default PortsDialogContent;
