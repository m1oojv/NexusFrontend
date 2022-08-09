// import React from "react";
// import styled from "styled-components/macro";

// import {
//   Grid,
//   Typography,
//   Chip as MuiChip,
//   Card,
//   CardContent,
//   CardActionArea,
// } from "@material-ui/core";

// import { orange, green } from "@material-ui/core/colors";
// import { NavLink } from "react-router-dom";
// import { spacing } from "@material-ui/system";

// const Chip = styled(MuiChip)(spacing);

// const ScoreChip = styled(MuiChip)`
//   spacing: 120;
//   font-size: 90%;
//   background-color: ${(props) => props.rgbcolor};
//   color: ${(props) => props.theme.palette.common.white};
// `;

// function determineColor(status) {
//   if (status == "COMPLETED") return green[500];
//   else if (status == "IN PROGRESS") return orange[500];
//   else return null;
// }

// function toTitleCase(str) {
//   return str.replace(/\w\S*/g, function (txt) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// }

// const ControlFamily = ({ controlFamilies, uuid }) => {
//   return (
//     <Grid container spacing={6}>
//       {Array.from(controlFamilies).map((row) => {
//         let link =
//           "/controls/controlassessment?uuid=" +
//           uuid +
//           "&controlFamily=" +
//           row.controlFamily.replace(/\s/g, "+").replace(/&/g, "%26");
//         return (
//           <React.Fragment key={row.controlFamily}>
//             <Grid item xs={6} sm={6} md={6} lg={6}>
//               <Card>
//                 <CardActionArea component={NavLink} to={link}>
//                   <CardContent>
//                     <Grid container spacing={6}>
//                       <Grid item xs={12}>
//                         <Typography
//                           gutterBottom
//                           variant="h6"
//                           component="div"
//                           noWrap
//                         >
//                           {row.controlFamily}
//                         </Typography>
//                       </Grid>
//                       <Grid item xs={6}>
//                         <Typography variant="body2" gutterBottom>
//                           Assessment Status:
//                         </Typography>
//                         <ScoreChip
//                           label={toTitleCase(row.assessmentProgress)}
//                           rgbcolor={determineColor(row.assessmentProgress)}
//                         />
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </CardActionArea>
//               </Card>
//             </Grid>
//           </React.Fragment>
//         );
//       })}
//     </Grid>
//   );
// };

// export default ControlFamily;

// /*
// to be included in line 73 after hannover demo
// <Grid item xs={6}>
//   <Typography variant="body2" gutterBottom>
//     Last Saved:
//   </Typography>
//   <Chip label="2021/1/1" key="key" />
// </Grid>
// */
