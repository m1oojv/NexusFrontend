// import React, { useEffect } from "react";
// import styled, { withTheme } from "styled-components/macro";
// import { NavLink, useLocation } from "react-router-dom";
// import services from "../../../../api/services/services.js";
// import { useQuery } from "react-query";
// import DoughnutChart from "./DoughnutChart";
// import RadarChart from "./RadarChart";
// import ControlFamily from "./ControlFamily";

// import { Helmet } from "react-helmet";

// import {
//   Button,
//   CardContent,
//   Grid,
//   Link,
//   Chip as MuiChip,
//   Breadcrumbs as MuiBreadcrumbs,
//   Card as MuiCard,
//   Divider as MuiDivider,
//   Paper as MuiPaper,
//   TextField as MuiTextField,
//   Typography,
// } from "@material-ui/core";
// import { red, orange, green } from "@material-ui/core/colors";
// import { spacing } from "@material-ui/system";
// import queryString from "query-string";

// const Card = styled(MuiCard)(spacing);

// const Divider = styled(MuiDivider)(spacing);

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

// const TextFieldSpacing = styled(MuiTextField)(spacing);

// const Chip = styled(MuiChip)(spacing);

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

// const TextField = styled(TextFieldSpacing)`
//   width: 200px;
// `;

// function createData(
//   killChainStage,
//   Description,
//   techniqueOne,
//   techniqueTwo,
//   techniqueThree
// ) {
//   return {
//     killChainStage,
//     Description,
//     techniqueOne,
//     techniqueTwo,
//     techniqueThree,
//   };
// }

// function Details({ currentScore, vendorName, selectedScenario }) {
//   return (
//     <Card mb={6}>
//       <CardContent>
//         <Typography variant="h5" gutterBottom>
//           Threat Scenario Details
//         </Typography>
//         <Divider my={3} />
//         <Typography variant="body2" gutterBottom>
//           <b>{vendorName.vendorName + " Resiliency Score"}</b>
//         </Typography>
//         <Typography component="div" variant="body1" gutterBottom>
//           <ScoreChip
//             label={currentScore}
//             m={1}
//             key={currentScore}
//             rgbcolor={determineColor(currentScore)}
//           />
//         </Typography>
//         <span>&nbsp;&nbsp;</span>
//         <BusinessDetails selectedScenario={selectedScenario} />
//         <span>&nbsp;&nbsp;</span>
//         <ThreatDetails selectedScenario={selectedScenario} />
//         <span>&nbsp;&nbsp;</span>
//         <Typography variant="body2" gutterBottom>
//           <b>Description</b>
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           {selectedScenario[0][0].description}
//         </Typography>
//         <span>&nbsp;&nbsp;</span>
//         <Typography variant="body2" gutterBottom>
//           <b>MITRE ATT&CK Techniques</b>
//         </Typography>
//         <Typography component="div" variant="body1" gutterBottom>
//           {Array.from(selectedScenario[8]).map((technique) => {
//             return (
//               <div key={technique.id}>
//                 {technique.id + " - " + technique.technique}
//                 <br />
//               </div>
//             );
//           })}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// function BusinessDetails(props) {
//   let BI = [];

//   BI = [
//     ...new Set(
//       Array.from(props.selectedScenario[3]).map((e) =>
//         e.businessImpact
//           .replace("loss of client services", "Loss of Client Services")
//           .replace("loss of funds", "Loss of Funds")
//           .replace("loss of confidential data", "Loss of Confidential Data")
//       )
//     ),
//   ];
//   return (
//     <div id="business details">
//       <Typography variant="body2" gutterBottom>
//         <b>Business Impact</b>
//       </Typography>
//       <Typography variant="body1" component="div" gutterBottom>
//         {BI.map((impact) => (
//           <Chip label={impact} m={1} key={impact} />
//         ))}
//       </Typography>
//     </div>
//   );
// }

// function ThreatDetails(props) {
//   let Vector = [];
//   let Actor = [];
//   Vector = [
//     ...new Set(
//       Array.from(props.selectedScenario[4]).map((e) => e.threatVector)
//     ),
//   ];

//   Actor = [
//     ...new Set(Array.from(props.selectedScenario[5]).map((e) => e.threatActor)),
//   ];
//   console.log(Vector, Actor);
//   return (
//     <div id="threat details">
//       <Typography variant="body2" gutterBottom>
//         <b>Threat Actor</b>
//       </Typography>
//       <Typography variant="body1" component="div" gutterBottom>
//         {Actor.map((actor) => (
//           <Chip
//             label={actor}
//             m={1}
//             key={actor}
//             style={{ textTransform: "capitalize" }}
//           />
//         ))}
//       </Typography>
//       <span>&nbsp;&nbsp;&nbsp;</span>
//       <Typography variant="body2" gutterBottom>
//         <b>Threat Category</b>
//       </Typography>
//       <Typography variant="body1" component="div" gutterBottom>
//         {Vector.map((vector) => (
//           <Chip
//             label={vector}
//             m={1}
//             key={vector}
//             style={{ textTransform: "capitalize" }}
//           />
//         ))}
//       </Typography>
//     </div>
//   );
// }

// function Scenario() {
//   let location = useLocation();
//   let value = queryString.parse(location.search);

//   const {
//     data = {
//       data: [
//         [{ title: "" }],
//         { value: "" },
//         { value: "" },
//         { value: "" },
//         { value: "" },
//         { value: "" },
//         { value: "" },
//         { value: "" },
//         { value: "" },
//         { value: "" },
//         0,
//         [{ vendorName: "" }],
//         [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
//         ["zero", [0], [0], [0], [0]],
//       ],
//     },
//   } = useQuery("fetchScenario", () =>
//     services.getsupplychainthreatscenariodetails(value)
//   );

//   let selectedScenario = data.data;

//   console.log("details", data.data);

//   return (
//     <React.Fragment>
//       <Helmet title="Threat Scenario" />
//       <Grid justifyContent="space-between" container spacing={10}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom display="inline">
//             {data.data[0][0].title + " - " + data.data[11][0].vendorName}
//           </Typography>
//           <Breadcrumbs aria-label="Breadcrumb" mt={2}>
//             <Link
//               component={NavLink}
//               exact
//               to={"/insureddetails?id=" + value.vendor}
//             >
//               {data.data[11][0].vendorName}
//             </Link>
//             <Typography>Scenario</Typography>
//           </Breadcrumbs>
//         </Grid>
//         <Grid item>
//           <Link
//             component={NavLink}
//             exact
//             to={`/threatanalysis/scenario/newthreat?id=${value.id}&vendor=${value.vendor}`}
//           >
//             <Button variant="contained" color="primary">
//               New Threat Scenario
//             </Button>
//           </Link>
//         </Grid>
//       </Grid>

//       <Divider my={6} />
//       <Grid container spacing={6}>
//         <Grid item xs={12} md={6}>
//           <Details
//             currentScore={selectedScenario[10]}
//             vendorName={selectedScenario[11][0]}
//             selectedScenario={selectedScenario}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <RadarChart
//             selectedScenario={selectedScenario[12]}
//             vendorName={selectedScenario[11][0]}
//           />
//           <DoughnutChart selectedScenario={selectedScenario} />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default withTheme(Scenario);

// /*
// insert into line 245 after the demo
// <Grid item>
//   <Link
//     component={NavLink}
//     exact
//     to={`/threatanalysis/scenario/editscenario?id=${value.id}&vendor=${value.vendor}`}
//   >
//     <Button variant="contained" color="primary">
//       Edit Threat Scenario
//     </Button>
//   </Link>
// </Grid>
// */
