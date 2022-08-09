// import React from "react";
// import styled, { withTheme } from "styled-components/macro";
// import {
//   Card as MuiCard,
//   CardContent as MuiCardContent,
//   Grid,
//   Typography,
//   Divider as MuiDivider,
// } from "@material-ui/core";

// import { spacing } from "@material-ui/system";

// import TableChart from "@material-ui/icons/TableChart";

// const Card = styled(MuiCard)(spacing);

// const CardContent = styled(MuiCardContent)`
//   &:last-child {
//     padding-bottom: ${(props) => props.theme.spacing(4)}px;
//   }
// `;

// const Divider = styled(MuiDivider)(spacing);

// function ExposureFindings({ scanResults }) {
//   console.log("exposure", scanResults);
//   return (
//     <Card mb={6}>
//       <CardContent>
//         <Grid container spacing={6}>
//           <Grid item xs={6} sm={6} md={6} lg={6}>
//             <Typography variant="body2" gutterBottom>
//               <b>Number of Credentials Leaked on Dark Web?</b>
//             </Typography>
//             <Typography component="div" variant="body1" gutterBottom>
//               {scanResults.credentials.total_creds_exposed}
//             </Typography>
//           </Grid>
//           <Grid item xs={6} sm={6} md={6} lg={6}>
//             <Typography variant="body2" gutterBottom>
//               <b>Number of Vulnerabilities Detected on Public Assets?</b>
//             </Typography>
//             <Typography component="div" variant="body1" gutterBottom>
//               {scanResults.exposure.vulnerabilities_number}
//             </Typography>
//           </Grid>
//           <Grid item xs={6} sm={6} md={6} lg={6}>
//             <Typography variant="body2" gutterBottom>
//               <b>Number of High Risk Ports Exposed Publicly?</b>
//             </Typography>
//             <Typography component="div" variant="body1" gutterBottom>
//               {scanResults.exposure.exposure_number}
//             </Typography>
//           </Grid>
//         </Grid>
//         <span>&nbsp;&nbsp;</span>
//       </CardContent>
//     </Card>
//   );
// }

// export default withTheme(ExposureFindings);
