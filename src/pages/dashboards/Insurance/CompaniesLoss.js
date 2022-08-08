// import React from "react";
// import styled, { withTheme } from "styled-components/macro";
// import { NavLink } from "react-router-dom";
// import { blue, red, orange, green } from "@material-ui/core/colors";

// import {
//   Card as MuiCard,
//   CardContent as MuiCardContent,
//   Chip as MuiChip,
//   IconButton,
//   Avatar as MuiAvatar,
//   Grid,
//   Typography,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   TableContainer,
//   Link,
// } from "@material-ui/core";

// import services from "../../../api/services/services.js";
// import { useQuery } from "react-query";

// import { spacing } from "@material-ui/system";

// import { MoreVertical } from "react-feather";

// const Card = styled(MuiCard)(spacing);

// const Avatar = styled(MuiAvatar)`
//   margin-right: ${(props) => props.theme.spacing(2)}px;
// `;

// const CardContent = styled(MuiCardContent)`
//   &:last-child {
//     padding-bottom: ${(props) => props.theme.spacing(4)}px;
//   }
// `;

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

// const Spacer = styled.div(spacing);

// function createData(companyName, id, premium, claims) {
//   let link = "/insureddetails?id=" + id;
//   let loss = Math.round((claims / premium) * 100);
//   return { companyName, id, link, loss };
// }

// function determineColor(number) {
//   if (number >= 75) return red[500];
//   else if (number >= 50) return orange[500];
//   else return green[500];
// }

// const CompaniesLoss = (props) => {
//   let themeColor = "#000";
//   const {
//     data = {
//       data: {
//         id: "",
//         companyName: "",
//         risk: "",
//         industry: "",
//         country: "",
//         premium: "",
//         claims: "",
//       },
//     },
//   } = useQuery("fetchInsuredCompanies", () => services.getinsuredcompanies());
//   console.log("companies", data.data);
//   let rows = [];
//   Array.from(data.data).map((row) => {
//     console.log(row);
//     if (
//       row.premium !== undefined &&
//       row.premium !== null &&
//       row.premium !== ""
//     ) {
//       if (
//         row.claims !== undefined &&
//         row.claims !== null &&
//         row.claims !== ""
//       ) {
//         rows.push(createData(row.companyName, row.id, row.premium, row.claims));
//       }
//     }
//   });
//   rows = rows.sort((a, b) => b.loss - a.loss);
//   rows = rows.slice(0, 4);

//   return (
//     <Card mb={3}>
//       <CardContent>
//         <Grid container alignItems="center" spacing={2}>
//           <Grid item>
//             <Typography variant="body2" gutterBottom>
//               <b>Worst Performing Policies</b>
//             </Typography>
//           </Grid>
//         </Grid>
//         <Spacer mb={6} />
//         <Paper>
//           <TableContainer style={{ maxHeight: 358 }}>
//             <Table stickyHeader>
//               <TableHead>
//                 <TableRow>
//                   <TableCell style={{ width: 100 }}>Company</TableCell>
//                   <TableCell style={{ width: 100 }}>Loss Ratio</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {rows.map((row) => (
//                   <TableRow key={row.id}>
//                     <TableCell
//                       component="th"
//                       scope="row"
//                       style={{
//                         textOverflow: "ellipsis",
//                         display: "block",
//                         overflow: "hidden",
//                       }}
//                     >
//                       <React.Fragment>
//                         <Grid container alignItems="center">
//                           <Avatar>{row.companyName.charAt(0)}</Avatar>
//                           <Link
//                             component={NavLink}
//                             exact
//                             to={row.link}
//                             style={{ color: themeColor }}
//                           >
//                             {row.companyName}
//                           </Link>
//                         </Grid>
//                       </React.Fragment>
//                     </TableCell>
//                     <TableCell align="left" style={{ width: 100 }}>
//                       <Chip
//                         size="small"
//                         rgbcolor={determineColor(row.loss)}
//                         mb={1}
//                         label={parseInt(row.loss).toLocaleString() + "%"}
//                       />
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Paper>
//       </CardContent>
//     </Card>
//   );
// };

// export default withTheme(CompaniesLoss);
