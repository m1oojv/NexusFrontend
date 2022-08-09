import React, { useEffect } from "react";
import { DateTime } from "luxon";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  TablePagination,
  Typography,
  Card,
} from "@material-ui/core";

function VulnerabilitiesDialogContent(data) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
            <TableCell width="20%">CVE</TableCell>
            <TableCell width="20%">IP Address</TableCell>
            <TableCell width="10%">CVSS</TableCell>
            <TableCell width="50%">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data.data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((finding, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {finding.cve}
                </TableCell>
                <TableCell component="th" scope="row">
                  {finding.ip}
                </TableCell>
                <TableCell component="th" scope="row">
                  {finding.cvss}
                </TableCell>
                <TableCell component="th" scope="row">
                  {finding.summary}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.data.totalNumberOfVulns}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default VulnerabilitiesDialogContent;
