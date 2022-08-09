// import React from "react";
// import styled from "styled-components/macro";
// import { NavLink } from "react-router-dom";

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

// const Chip = styled(MuiChip)`
//   height: 20px;
//   padding: 4px 0;
//   font-size: 90%;
//   background-color: ${(props) => props.rgbcolor};
//   color: ${(props) => props.theme.palette.common.white};
// `;

// const CardContent = styled(MuiCardContent)`
//   &:last-child {
//     padding-bottom: ${(props) => props.theme.spacing(4)}px;
//   }
// `;

// const Spacer = styled.div(spacing);

// function createData(companyName, id, premium) {
//   let link = "/insureddetails?id=" + id;
//   return { companyName, id, link, premium };
// }

// const handleClick = () => {
//   alert("You clicked the chip.");
// };

// const Companies = (props) => {
//   const {
//     data = {
//       data: {
//         id: "",
//         companyName: "",
//         risk: "",
//         industry: "",
//         country: "",
//         premium: "",
//       },
//     },
//   } = useQuery("fetchInsuredCompanies", () => services.getinsuredcompanies());
//   console.log("companies", data.data);
//   let rows = [];
//   Array.from(data.data).map((row) => {
//     console.log(row);
//     rows.push(createData(row.companyName, row.id, row.premium));
//   });
//   rows = rows.sort((a, b) => b.premium - a.premium);
//   rows = rows.slice(0, 4);

//   return (
//     <Card mb={3}>
//       <CardContent>
//         <Grid container alignItems="center" spacing={2}>
//           <Grid item>
//             <Typography variant="body2" gutterBottom>
//               <b>Top Policies by Written Premiums</b>
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
//                   <TableCell style={{ width: 100 }}>Premiums</TableCell>
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
//                             style={{ color: "#000" }}
//                           >
//                             {row.companyName}
//                           </Link>
//                         </Grid>
//                       </React.Fragment>
//                     </TableCell>
//                     <TableCell align="left" style={{ width: 100 }}>
//                       {"$" + parseInt(row.premium).toLocaleString()}
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

// export default Companies;
