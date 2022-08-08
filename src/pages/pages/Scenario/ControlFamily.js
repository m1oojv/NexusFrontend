// import React from "react";
// import styled from "styled-components/macro";
// import { NavLink } from "react-router-dom";

// import {
//   Card as MuiCard,
//   CardHeader,
//   Chip as MuiChip,
//   IconButton,
//   Paper,
//   Link,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   TableContainer,
// } from "@material-ui/core";

// import { red, green, orange } from "@material-ui/core/colors";

// import { spacing } from "@material-ui/system";

// import { MoreVertical } from "react-feather";

// const Card = styled(MuiCard)(spacing);

// const Chip = styled(MuiChip)`
//   height: 20px;
//   padding: 4px 0;
//   font-size: 90%;
//   background-color: ${(props) => props.rgbcolor};
//   color: ${(props) => props.theme.palette.common.white};
// `;

// const TableWrapper = styled.div`
//   overflow-y: auto;
//   max-width: calc(100vw - ${(props) => props.theme.spacing(12)}px);
// `;

// // Data
// let id = 0;
// function createData(source, users, sessions, bounce, avg) {
//   id += 1;
//   console.log(source);
//   let link = "/controls/controlfamilydetails?id=" + source;
//   return { id, source, users, sessions, bounce, avg, link };
// }

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

// const TrafficTable = ({ controlScore }) => {
//   let rows = [];
//   Array.from(controlScore).map((family) => {
//     let triScore = ((family[1] + family[2] * 2) / 3) * family[3];
//     console.log(triScore);
//     rows.push(
//       createData(
//         family[0],
//         <Chip label={family[1]} rgbcolor={determineColor(family[1])} />,
//         <Chip label={family[2]} rgbcolor={determineColor(family[2])} />,
//         <Chip label={family[3]} rgbcolor={determineColorCoverage(family[3])} />
//       )
//     );
//   });
//   //console.log("table", controlScore);
//   return (
//     <Card mb={3}>
//       <CardHeader
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertical />
//           </IconButton>
//         }
//         title="Controls Analysis"
//       />

//       <Paper>
//         <TableContainer style={{ maxHeight: 358 }}>
//           <Table stickyHeader>
//             <TableHead>
//               <TableRow>
//                 <TableCell style={{ width: 100 }}>Control</TableCell>
//                 <TableCell align="center" style={{ width: 50 }}>
//                   Maturity (0-5)
//                 </TableCell>
//                 <TableCell align="center" style={{ width: 50 }}>
//                   Effectiveness (0-5)
//                 </TableCell>
//                 <TableCell align="center" style={{ width: 50 }}>
//                   Coverage (0-1)
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell component="th" scope="row" style={{ width: 100 }}>
//                     <Link
//                       component={NavLink}
//                       exact
//                       to={row.link}
//                       style={{ color: "#FFF" }}
//                     >
//                       {row.source}
//                     </Link>
//                   </TableCell>
//                   <TableCell align="center" style={{ width: 50 }}>
//                     {row.users}
//                   </TableCell>
//                   <TableCell align="center" style={{ width: 50 }}>
//                     {row.sessions}
//                   </TableCell>
//                   <TableCell align="center" style={{ width: 50 }}>
//                     {row.bounce}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper>
//     </Card>
//   );
// };

// export default TrafficTable;
