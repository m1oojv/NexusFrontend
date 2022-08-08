// import React, { useEffect } from "react";
// import styled from "styled-components/macro";
// import { NavLink } from "react-router-dom";
// import services from "../../../api/services/services.js";
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
//   ${spacing};

//   background: ${(props) => props.completed && green[500]};
//   background: ${(props) => props.inprogress && orange[700]};
//   color: ${(props) =>
//     (props.paid || props.sent) && props.theme.palette.common.white};
// `;

// const ScoreChip = styled(MuiChip)`
//   spacing: 120;
//   font-size: 90%;
//   background-color: ${(props) => props.rgbcolor};
//   color: ${(props) => props.theme.palette.common.white};
// `;

// function determineColor(number) {
//   if (number > 3) return green[500];
//   else if (number > 1) return orange[500];
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

// const Customer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// function createData(customer, status, amount, id, date) {
//   let link = "/threatanalysis/scenario?id=" + id;
//   return { customer, status, amount, id, date, link };
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
//   { id: "scenario", alignment: "left", label: "Scenario" },
//   { id: "status", alignment: "left", label: "Status" },
//   { id: "id", alignment: "right", label: "ID" },
//   { id: "unit", alignment: "right", label: "Business Unit" },
//   { id: "date", alignment: "left", label: "Created" },
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
//             Threat Scenarios
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
//   const [orderBy, setOrderBy] = React.useState("customer");
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const rows = Array.from(props.threatScenario).map((scenario) =>
//     createData(
//       scenario.threatScenario,
//       2,
//       "Commercial Banking",
//       scenario.id,
//       "01-02-2021"
//     )
//   );
//   console.log(rows);

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
//                         <Customer>
//                           <Box ml={2} width={1} textOverflow="ellipsis">
//                             {row.customer}
//                           </Box>
//                         </Customer>
//                       </TableCell>
//                       <TableCell>
//                         {row.status === 0 && (
//                           <Chip
//                             size="small"
//                             mr={1}
//                             mb={1}
//                             label="In Progress"
//                             inprogress
//                           />
//                         )}
//                         {row.status === 1 && (
//                           <Chip size="small" mr={1} mb={1} label="Void" />
//                         )}
//                         {row.status === 2 && (
//                           <Chip
//                             size="small"
//                             mr={1}
//                             mb={1}
//                             label="Completed"
//                             completed="True"
//                           />
//                         )}
//                       </TableCell>
//                       <TableCell align="right">#{row.id}</TableCell>
//                       <TableCell align="right" style={{ width: "20%" }}>
//                         {row.amount}
//                       </TableCell>
//                       <TableCell>{row.date}</TableCell>
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

// function InvoiceList() {
//   /*
//   const [threatScenario, setThreatScenario] = React.useState({ "": "" });

//   useEffect(() => {
//     services
//       .getthreatscenario()
//       .then((response) => {
//         setThreatScenario(response.data);
//         console.log(response.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, []);
// */
//   const {
//     isLoading,
//     error,
//     data = { data: { "": "" } },
//   } = useQuery("fetchThreatScenarios", () => services.getthreatscenario());
//   let newScenarioID = Object.keys(data.data).length + 1;
//   console.log(data.data);

//   Array.from(data.data).map((e) => {
//     if (e.currentScore == null) e.currentScore = "N/A";
//   });

//   return (
//     <React.Fragment>
//       <Helmet title="Threat Analysis" />

//       <Grid justify="space-between" container spacing={10}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom display="inline">
//             Threat Analysis
//           </Typography>

//           <Breadcrumbs aria-label="Breadcrumb" mt={2}>
//             <Link component={NavLink} exact to="/">
//               Threat Profile
//             </Link>
//             <Typography>Threat Analysis</Typography>
//           </Breadcrumbs>
//         </Grid>
//         <Grid item>
//           <div>
//             <Button
//               variant="contained"
//               color="primary"
//               href={"/threatanalysis/scenario/newscenario?id=" + newScenarioID}
//             >
//               <AddIcon />
//               New Threat Scenario
//             </Button>
//           </div>
//         </Grid>
//       </Grid>

//       <Divider my={6} />

//       <Grid container spacing={6}>
//         <Grid item xs={12}>
//           <EnhancedTable threatScenario={data.data} />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default InvoiceList;
