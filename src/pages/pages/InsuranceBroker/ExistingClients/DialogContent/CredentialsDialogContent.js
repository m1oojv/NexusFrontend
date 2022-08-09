import React, { useEffect } from "react";
import { DateTime } from "luxon";
import SaveAlt from "@material-ui/icons/SaveAlt";
import { IconButton } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

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

function CredentialsDialogContent(data) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const csvFileName = "exposedCredentials.csv";

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const leakedData = data.data.leaked_data.reduce(
    (result, current) =>
      result.concat(
        current.passwords.map((pw) => ({
          name: current.name,
          id: pw.id,
          sourceId: pw.source_id,
          dateTime: pw.imported_at,
        }))
      ),
    []
  );

  leakedData.sort((a, b) => Date.parse(b.dateTime) - Date.parse(a.dateTime));

  const makeCSV = (content) => {
    let csv = [];

    content.forEach((value) => {
      csv.push(
        DateTime.fromISO(value.dateTime)
          .setLocale("fr")
          .toLocaleString("DATE_SHORT") +
          "," +
          value.name.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2") +
          "," +
          value.sourceId +
          "\r\n"
      );
    });

    return csv;
  };

  const handleDownload = (csv, filename) => {
    let csvContent = makeCSV(csv);
    const blob = new Blob([csvContent], { type: "text/csv" });

    if (navigator && navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      const dataURI = `data:text/csv;charset=utf-8,${csvContent}`;

      const URL = window.URL || window.webkitURL;
      const downloadURI =
        typeof URL.createObjectURL === "undefined"
          ? dataURI
          : URL.createObjectURL(blob);

      let link = document.createElement("a");
      link.setAttribute("href", downloadURI);
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell width="30%">Date</TableCell>
            <TableCell width="40%">Email</TableCell>
            <TableCell width="40%">Source ID</TableCell>
            <TableCell width="20%">
              <IconButton
                style={{ color: grey[900] }}
                onClick={() => {
                  handleDownload(leakedData, csvFileName);
                }}
              >
                <SaveAlt />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leakedData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((detail) => {
              return (
                <TableRow key={detail.id}>
                  <TableCell component="th" scope="row" width="30%">
                    {DateTime.fromISO(detail.dateTime)
                      .setLocale("fr")
                      .toLocaleString("DATE_SHORT")}
                  </TableCell>
                  <TableCell component="th" scope="row" width="40%">
                    {detail.name.replace(
                      /(\w{3})[\w.-]+@([\w.]+\w)/,
                      "$1***@$2"
                    )}
                  </TableCell>
                  <TableCell component="th" scope="row" width="40%">
                    {detail.sourceId}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={leakedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default CredentialsDialogContent;
