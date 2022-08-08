// import React from "react";
// import styled from "styled-components/macro";
// import { NavLink } from "react-router-dom";

// import Helmet from "react-helmet";

// import {
//   Checkbox,
//   Grid,
//   IconButton,
//   CardContent,
//   Card as MuiCard,
//   Breadcrumbs as MuiBreadcrumbs,
//   Divider as MuiDivider,
//   Paper as MuiPaper,
//   Table,
//   TableBody,
//   TableContainer,
//   TableCell,
//   TableHead,
//   TablePagination,
//   TableRow,
//   TableSortLabel,
//   Toolbar,
//   Tooltip,
//   Typography,
//   FormControlLabel,
//   Switch,
// } from "@material-ui/core";

// import {
//   Delete as DeleteIcon,
//   FilterList as FilterListIcon,
// } from "@material-ui/icons";

// import { spacing } from "@material-ui/system";

// const Card = styled(MuiCard)(spacing);

// const Divider = styled(MuiDivider)(spacing);

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

// const Paper = styled(MuiPaper)(spacing);

// const Spacer = styled.div`
//   flex: 1 1 100%;
// `;

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   {
//     id: "Control ID",
//     numeric: false,
//     disablePadding: true,
//     label: "Control ID",
//   },
//   {
//     id: "NIST Function",
//     numeric: false,
//     disablePadding: false,
//     label: "NIST Function",
//   },
//   {
//     id: "Control Family",
//     numeric: false,
//     disablePadding: false,
//     label: "Control Family",
//   },
//   {
//     id: "Description",
//     numeric: false,
//     disablePadding: false,
//     label: "Description",
//   },
// ];

// function EnhancedTableHead(props) {
//   const {
//     onSelectAllClick,
//     order,
//     orderBy,
//     numSelected,
//     rowCount,
//     onRequestSort,
//   } = props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{ "aria-label": "select all desserts" }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? "right" : "left"}
//             padding={headCell.disablePadding ? "none" : "normal"}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : "asc"}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// let EnhancedTableToolbar = (props) => {
//   const { numSelected } = props;

//   return (
//     <Toolbar>
//       <div>
//         {numSelected > 0 ? (
//           <Typography color="inherit" variant="subtitle1">
//             {numSelected} selected
//           </Typography>
//         ) : (
//           <Typography variant="h6" id="tableTitle">
//             Controls
//           </Typography>
//         )}
//       </div>
//       <Spacer />
//       <div>
//         {numSelected > 0 ? (
//           <Tooltip title="Delete">
//             <IconButton aria-label="Delete">
//               <DeleteIcon />
//             </IconButton>
//           </Tooltip>
//         ) : (
//           <Tooltip title="Filter list">
//             <IconButton aria-label="Filter list">
//               <FilterListIcon />
//             </IconButton>
//           </Tooltip>
//         )}
//       </div>
//     </Toolbar>
//   );
// };

// function EnhancedTable(props) {
//   const [order, setOrder] = React.useState("asc");
//   const [orderBy, setOrderBy] = React.useState("calories");
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(true);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const rows = props.killChainStageControls;

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = rows.map((n) => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (name) => selected.indexOf(name) !== -1;

//   const emptyRows =
//     rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

//   return (
//     <div>
//       <Paper>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <TableContainer>
//           <Table
//             aria-labelledby="tableTitle"
//             size={dense ? "small" : "medium"}
//             aria-label="enhanced table"
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {stableSort(rows, getComparator(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => {
//                   const isItemSelected = isSelected(row.controlID);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       onClick={(event) => handleClick(event, row.controlID)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.controlID}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           checked={isItemSelected}
//                           inputProps={{ "aria-labelledby": labelId }}
//                         />
//                       </TableCell>
//                       <TableCell
//                         component="th"
//                         id={labelId}
//                         scope="row"
//                         padding="none"
//                       >
//                         {row.controlID}
//                       </TableCell>
//                       <TableCell align="left">{row.nistFunction}</TableCell>
//                       <TableCell align="left">{row.controlFamily}</TableCell>
//                       <TableCell align="left">{row.description}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </div>
//   );
// }

// function AdvancedTable(props) {
//   return (
//     <React.Fragment>
//       <Card mb={6}>
//         <CardContent>
//           <Helmet title="Controls" />
//           <Grid container spacing={6}>
//             <Grid item xs={12} md={12}>
//               <Divider my={3} />
//             </Grid>
//             <Grid item xs={12} md={12}>
//               <EnhancedTable
//                 killChainStageControls={props.killChainStageControls}
//               />
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>
//     </React.Fragment>
//   );
// }

// export default AdvancedTable;
