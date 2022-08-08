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

// function AssessmentOverview({ companyDetails }) {
//   let assessmentCompleted = 0;
//   let threatsValue = 0;
//   let exposureValue = 0;
//   let controlsValue = 0;
//   let overallValue = 0;
//   let assessmentUuid = "";
//   Array.from(companyDetails.assessment).map((family) => {
//     if (family.progress == "COMPLETED")
//       assessmentCompleted = assessmentCompleted + 1;
//     assessmentUuid = family.assessmentUuid;
//   });
//   console.log(assessmentUuid);
//   // Update each individual completion value of each component here
//   controlsValue =
//     assessmentCompleted / Array.from(companyDetails.assessment).length;
//   if (companyDetails.threatAssessment == "COMPLETED") threatsValue = 1;
//   if (companyDetails.exposureAssessment == "COMPLETED") exposureValue = 1;
//   overallValue = (controlsValue + threatsValue + exposureValue) / 3;
//   if (isNaN(overallValue)) overallValue = 0;
//   // Overall completion value
//   return (
//     <React.Fragment>
//       <Card>
//         <CardContent>
//           <Box flexGrow={1} flexBasis={0}>
//             <Grid item xs={12}>
//               <Typography variant="h6">Initial Assessment</Typography>
//             </Grid>
//             <Divider my={3} />
//             <Grid container spacing={10} alignItems="center">
//               <Grid item xs={12}>
//                 <Typography variant="body1">
//                   Nexus performs three (3) assessments of the policyholder to
//                   determine the overall cyber risk exposure. These are 1)
//                   Controls, 2) Threats and 3) Exposure assessments. All three
//                   assessments must be completed before loss simulations can be
//                   initiated. Please fill in the controls assessment if estimated
//                   controls are not used.
//                 </Typography>
//               </Grid>

//               <Grid item xs={6} align="center">
//                 <Grid style={{ width: "60%" }}>
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
//                   status={companyDetails.controlsAssessment}
//                   start={"01/10/2021"}
//                   assessed={"13/10/2021"}
//                   completion={controlsValue}
//                   assessmentUuid={assessmentUuid}
//                   companyUuid={companyDetails.id}
//                 />
//                 <Divider my={3} />
//                 <Assessment
//                   icon={ChooseIcon(threatsValue, "threats")}
//                   name={"Threats Assessment"}
//                   status={companyDetails.threatAssessment}
//                   start={"03/10/2021"}
//                   assessed={"13/10/2021"}
//                   completion={threatsValue}
//                   assessmentUuid={assessmentUuid}
//                   companyUuid={companyDetails.id}
//                 />
//                 <Divider my={3} />
//                 <Assessment
//                   icon={ChooseIcon(exposureValue, "vulnerability")}
//                   name={"Exposure Assessment"}
//                   status={companyDetails.exposureAssessment}
//                   start={"-"}
//                   assessed={"-"}
//                   completion={exposureValue}
//                   assessmentUuid={assessmentUuid}
//                   companyUuid={companyDetails.id}
//                   scanResults={companyDetails.scanResults}
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
