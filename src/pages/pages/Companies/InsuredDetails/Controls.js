// import React, { useEffect } from "react";
// import styled from "styled-components/macro";
// import { NavLink } from "react-router-dom";
// import services from "../../../../api/services/services.js";
// import { useQuery } from "react-query";
// import { blue, red, orange, green } from "@material-ui/core/colors";
// import Helmet from "react-helmet";

// import {
//   Avatar as MuiAvatar,
//   Box,
//   Breadcrumbs as MuiBreadcrumbs,
//   Button,
//   Checkbox,
//   Chip as MuiChip,
//   Divider as MuiDivider,
//   Grid,
//   IconButton,
//   Link,
//   Paper as MuiPaper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
//   TableSortLabel,
//   Toolbar,
//   Tooltip,
//   Typography,
// } from "@material-ui/core";

// import {
//   Add as AddIcon,
//   Archive as ArchiveIcon,
//   FilterList as FilterListIcon,
//   RemoveRedEye as RemoveRedEyeIcon,
// } from "@material-ui/icons";

// import { spacing } from "@material-ui/system";

// const Divider = styled(MuiDivider)(spacing);

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

// const Paper = styled(MuiPaper)(spacing);

// const Chip = styled(MuiChip)`
//   height: 20px;
//   padding: 4px 0;
//   font-size: 90%;
//   background-color: ${(props) => props.rgbcolor};
//   color: ${(props) => props.theme.palette.common.white};
// `;

// const ScoreChip = styled(MuiChip)`
//   spacing: 120;
//   font-size: 90%;
//   background-color: ${(props) => props.rgbcolor};
//   color: ${(props) => props.theme.palette.common.white};
// `;

// function determineColor(number) {
//   if (number >= 3) return green[500];
//   else if (number >= 1) return orange[500];
//   else if (number > 0) return red[500];
//   else return null;
// }

// function determineColorCoverage(number) {
//   if (number >= 0.7) return green[500];
//   else if (number >= 0.4) return orange[500];
//   else if (number > 0) return red[500];
//   else return null;
// }

// const Spacer = styled.div`
//   flex: 1 1 100%;
// `;

// const ToolbarTitle = styled.div`
//   min-width: 150px;
// `;

// const Avatar = styled(MuiAvatar)`
//   background: ${(props) => props.theme.palette.primary.main};
// `;

// const ControlFamily = styled.div`
//   display: flex;
//   align-items: center;
// `;

// function createData(controlFamily, maturity, effectiveness, coverage, uuid) {
//   let link =
//     "/controls/controlfamilydetails?id=" +
//     controlFamily.replace(/\s/g, "+").replace(/&/g, "%26") +
//     "&vendor=" +
//     uuid;
//   return { controlFamily, maturity, effectiveness, coverage, link };
// }

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
//   { id: "controlFamily", alignment: "left", label: "Control Family" },
//   { id: "maturity", alignment: "left", label: "Maturity" },
//   { id: "effectiveness", alignment: "left", label: "Effectiveness" },
//   { id: "coverage", alignment: "left", label: "Coverage" },
//   { id: "actions", alignment: "right", label: "Actions" },
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
//             inputProps={{ "aria-label": "select all" }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.alignment}
//             padding={headCell.disablePadding ? "none" : "default"}
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
//       <ToolbarTitle>
//         {numSelected > 0 ? (
//           <Typography color="inherit" variant="subtitle1">
//             {numSelected} selected
//           </Typography>
//         ) : (
//           <Typography variant="h6" id="tableTitle">
//             Control Families
//           </Typography>
//         )}
//       </ToolbarTitle>
//       <Spacer />
//       <div>
//         {numSelected > 0 ? (
//           <Tooltip title="Delete">
//             <IconButton aria-label="Delete">
//               <ArchiveIcon />
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
//   const [orderBy, setOrderBy] = React.useState("controlFamily");
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const rows = Array.from(props.controls).map((control) =>
//     createData(
//       control.controlFamily,
//       control.maturity,
//       control.effectiveness,
//       control.coverage,
//       props.uuid
//     )
//   );
//   //console.log(props.controls);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = rows.map((n) => n.id);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, id) => {
//     const selectedIndex = selected.indexOf(id);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, id);
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

//   const isSelected = (id) => selected.indexOf(id) !== -1;

//   const emptyRows =
//     rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

//   return (
//     <div>
//       <Paper>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <TableContainer>
//           <Table
//             aria-labelledby="tableTitle"
//             size={"medium"}
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
//                   const isItemSelected = isSelected(row.id);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={`${row.id}-${index}`}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           checked={isItemSelected}
//                           inputProps={{ "aria-labelledby": labelId }}
//                           onClick={(event) => handleClick(event, row.id)}
//                         />
//                       </TableCell>
//                       <TableCell
//                         component="th"
//                         id={labelId}
//                         scope="row"
//                         style={{ width: "40%" }}
//                       >
//                         <ControlFamily>
//                           <Box ml={2} width={1} textOverflow="ellipsis">
//                             {row.controlFamily}
//                           </Box>
//                         </ControlFamily>
//                       </TableCell>
//                       <TableCell>
//                         <Chip
//                           size="small"
//                           rgbcolor={determineColor(row.maturity)}
//                           mb={1}
//                           label={row.maturity}
//                         />
//                       </TableCell>
//                       <TableCell>
//                         <Chip
//                           size="small"
//                           rgbcolor={determineColor(row.effectiveness)}
//                           mb={1}
//                           label={row.effectiveness}
//                         />
//                       </TableCell>
//                       <TableCell>
//                         <Chip
//                           size="small"
//                           rgbcolor={determineColorCoverage(row.coverage)}
//                           mb={1}
//                           label={row.coverage}
//                         />
//                       </TableCell>
//                       <TableCell align="right" style={{ width: "15%" }}>
//                         <IconButton
//                           aria-label="details"
//                           component={NavLink}
//                           to={row.link}
//                         >
//                           <RemoveRedEyeIcon />
//                         </IconButton>
//                       </TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: 53 * emptyRows }}>
//                   <TableCell colSpan={7} />
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
//           onChangePage={handleChangePage}
//           onChangeRowsPerPage={handleChangeRowsPerPage}
//         />
//       </Paper>
//     </div>
//   );
// }

// function Controls({ uuid }) {
//   uuid = { uuid: uuid.id };
//   console.log(uuid);
//   const {
//     isLoading,
//     error,
//     data = { data: { "": "" } },
//   } = useQuery("fetchVendorControlFamilies", () =>
//     services.getvendorcontrolfamilies(uuid)
//   );

//   return (
//     <React.Fragment>
//       <Grid container spacing={6}>
//         <Grid item xs={12}>
//           <EnhancedTable controls={data.data} uuid={uuid.uuid} />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default Controls;
