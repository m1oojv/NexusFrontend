// import React from "react";
// import styled from "styled-components/macro";

// import {
//   Card as MuiCard,
//   CardHeader,
//   Chip as MuiChip,
//   IconButton,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   TableContainer,
// } from "@material-ui/core";

// import { blue, red, orange, green } from "@material-ui/core/colors";

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
// function createData(
//   informationAsset,
//   informationSystem,
//   availability,
//   confidentiality,
//   integrity
// ) {
//   id += 1;
//   return {
//     id,
//     informationAsset,
//     informationSystem,
//     availability,
//     confidentiality,
//     integrity,
//   };
// }

// function determineColor(number) {
//   if (number > 3) return green[500];
//   else if (number == 3) return orange[500];
//   else return red[500];
// }

// function InformationSystemAsset(props) {
//   const rows = Array.from(props.selectedScenario[6]).map((row) =>
//     createData(
//       row.informationAsset,
//       row.informationSystem,
//       <Chip
//         label={row.availability}
//         rgbcolor={determineColor(row.availability)}
//       />,
//       <Chip
//         label={row.confidentiality}
//         rgbcolor={determineColor(row.confidentiality)}
//       />,
//       <Chip label={row.integrity} rgbcolor={determineColor(row.integrity)} />
//     )
//   );

//   return (
//     <Card mb={3}>
//       <CardHeader
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertical />
//           </IconButton>
//         }
//         title="Information System Asset Rating"
//       />

//       <Paper>
//         <TableContainer style={{ maxHeight: 300 }}>
//           <Table stickyHeader>
//             <TableHead>
//               <TableRow>
//                 <TableCell style={{ width: 100 }}>Information Asset</TableCell>
//                 <TableCell style={{ width: 100 }}>Information System</TableCell>
//                 <TableCell align="center" style={{ width: 30 }}>
//                   Availability (0-5)
//                 </TableCell>
//                 <TableCell align="center" style={{ width: 30 }}>
//                   Confidentiality (0-5)
//                 </TableCell>
//                 <TableCell align="center" style={{ width: 30 }}>
//                   Integrity (0-5)
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell component="th" scope="row" style={{ width: 100 }}>
//                     {row.informationAsset}
//                   </TableCell>
//                   <TableCell component="th" scope="row" style={{ width: 100 }}>
//                     {row.informationSystem}
//                   </TableCell>
//                   <TableCell align="center" style={{ width: 50 }}>
//                     {row.availability}
//                   </TableCell>
//                   <TableCell align="center" style={{ width: 50 }}>
//                     {row.confidentiality}
//                   </TableCell>
//                   <TableCell align="center" style={{ width: 50 }}>
//                     {row.integrity}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper>
//     </Card>
//   );
// }

// export default InformationSystemAsset;
