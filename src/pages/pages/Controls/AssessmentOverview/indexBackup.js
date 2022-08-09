// import React from "react";
// import styled, { withTheme } from "styled-components/macro";
// import { NavLink } from "react-router-dom";
// import { spacing } from "@material-ui/system";

// import Helmet from "react-helmet";
// import {
//   Grid,
//   Link,
//   Breadcrumbs as MuiBreadcrumbs,
//   Divider as MuiDivider,
//   Typography,
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   Box,
//   Select as MuiSelect,
// } from "@material-ui/core";

// import Assessment from "./Assessment";
// import ChooseIcon from "./ChooseIcon";
// import ChooseStatus from "./ChooseStatus";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { teal } from "@material-ui/core/colors";

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

// const Divider = styled(MuiDivider)(spacing);

// const Select = styled(MuiSelect)(spacing);

// function AssessmentOverview() {
//   // Update each individual completion value of each component here
//   let controlsValue = 1;
//   let threatsValue = 0.5;
//   let vulnerabilityValue = 0;

//   // Overall completion value
//   let overallValue = (controlsValue + threatsValue + vulnerabilityValue) / 3;

//   return (
//     <React.Fragment>
//       <Helmet title="Assessment Overview" />
//       <Grid justify="space-between" container spacing={10}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom display="inline">
//             Company Assessment Overview
//           </Typography>
//         </Grid>
//       </Grid>

//       <Breadcrumbs aria-label="Breadcrumb" mt={2}>
//         <Link component={NavLink} exact to="/enterprise">
//           Portfolio
//         </Link>
//         <Link component={NavLink} exact to="/insured">
//           Companies
//         </Link>
//         <Typography>Assessment Overview</Typography>
//       </Breadcrumbs>

//       <Divider my={6} />

//       <Card>
//         <CardContent>
//           <Box flexGrow={1} flexBasis={0}>
//             <Box pb={3}>
//               <Grid item xs={12}>
//                 <Typography variant="h3">Security Assessment</Typography>
//               </Grid>
//             </Box>

//             <Grid container spacing={10} alignItems="center">
//               <Grid item xs={12}>
//                 <Typography variant="body1">
//                   The organization is assessed across the controls, threats and
//                   vulnerabilities dimensions. Below is the assessment status for
//                   each category.
//                 </Typography>
//               </Grid>

//               <Grid item xs={6} align="center">
//                 <Grid style={{ width: "68%" }}>
//                   <CircularProgressbar
//                     value={overallValue}
//                     maxValue={1}
//                     text={`${Math.round(overallValue * 100)}%`} // Round to whole number
//                     styles={buildStyles({
//                       textColor: teal[600],
//                       pathColor: teal[700],
//                     })}
//                   />
//                 </Grid>
//               </Grid>
//               <Grid item xs={6} sm={6}>
//                 <Assessment
//                   icon={ChooseIcon(controlsValue, "controls")}
//                   name={"Controls Assessment"}
//                   status={ChooseStatus(controlsValue)}
//                   start={"01/10/2021"}
//                   assessed={"13/10/2021"}
//                 />
//                 <Divider my={3} />
//                 <Assessment
//                   icon={ChooseIcon(threatsValue, "threats")}
//                   name={"Threats Assessment"}
//                   status={ChooseStatus(threatsValue)}
//                   start={"03/10/2021"}
//                   assessed={"13/10/2021"}
//                 />
//                 <Divider my={3} />
//                 <Assessment
//                   icon={ChooseIcon(vulnerabilityValue, "vulnerability")}
//                   name={"Scanning of Digital Footprint"}
//                   status={ChooseStatus(vulnerabilityValue)}
//                   start={"-"}
//                   assessed={"-"}
//                 />
//               </Grid>
//             </Grid>
//           </Box>
//         </CardContent>
//       </Card>
//     </React.Fragment>
//   );
// }

// export default withTheme(AssessmentOverview);
