// import React, { useEffect } from "react";
// import styled, { withTheme } from "styled-components/macro";
// import { NavLink, useLocation } from "react-router-dom";
// import services from "../../../api/services/services.js";
// import { useQuery } from "react-query";
// import InformationSystemAsset from "./InformationSystemAsset";
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

// function createControlsData(
//   killChainStage,
//   controlID,
//   nistFunction,
//   controlFamily,
//   description
// ) {
//   return {
//     killChainStage,
//     controlID,
//     nistFunction,
//     controlFamily,
//     description,
//   };
// }

// function Title(props) {
//   return (
//     <Card mb={6}>
//       <Grid item>
//         <CardContent>
//           <Typography variant="h3" gutterBottom>
//             {props.selectedScenario[0][0].title}
//           </Typography>
//         </CardContent>
//       </Grid>
//     </Card>
//   );
// }

// function Details({ currentScore, piScore, description, selectedScenario }) {
//   return (
//     <Card mb={6}>
//       <CardContent>
//         <Typography variant="h5" gutterBottom>
//           Threat Scenario Details
//         </Typography>
//         <Divider my={3} />
//         <Typography variant="body2" gutterBottom>
//           <b>Current Score</b>
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
//         <Typography variant="body2" gutterBottom>
//           <b>Post Investment Score</b>
//         </Typography>
//         <Typography component="div" variant="body1" gutterBottom>
//           <ScoreChip
//             label={piScore}
//             m={1}
//             key={piScore}
//             rgbcolor={determineColor(piScore)}
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
//           {Array.from(description).map((killchain) => {
//             return (
//               <span key={killchain.killChainStage}>
//                 {killchain.threatEventDescription}
//                 <br />
//                 <br />
//               </span>
//             );
//           })}
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
//   let BU = [];
//   let BI = [];
//   BU = [
//     ...new Set(
//       Array.from(props.selectedScenario[3]).map((e) =>
//         e.businessUnit
//           .replace("transactional_banking", "Transactional Banking")
//           .replace("global_banking", "Global Banking")
//       )
//     ),
//   ];

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
//         <b>Business Units</b>
//       </Typography>
//       <Typography variant="body1" component="div" gutterBottom>
//         {BU.map((unit) => (
//           <Chip label={unit} m={1} key={unit} />
//         ))}
//       </Typography>
//       <span>&nbsp;&nbsp;&nbsp;</span>
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
//         <b>Threat Vector</b>
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
//   let description = [];

//   const {
//     isLoading,
//     error,
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
//         0,
//         [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
//         ["zero", [0], [0], [0], [0]],
//       ],
//     },
//   } = useQuery("fetchScenario", () =>
//     services.getthreatscenariodetails({ value })
//   );

//   Array.from(data.data[1]).map((e) => {
//     if (e.threatEventDescription != "") description.push(e);
//   });

//   console.log("details", data.data);

//   return (
//     <React.Fragment>
//       <Helmet title="Threat Scenario" />
//       <Grid justify="space-between" container spacing={10}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom display="inline">
//             {data.data[0][0].title}
//           </Typography>
//           <Breadcrumbs aria-label="Breadcrumb" mt={2}>
//             <Link component={NavLink} exact to="/threatanalysis">
//               Threat Analysis
//             </Link>
//             <Typography>Scenario</Typography>
//           </Breadcrumbs>
//         </Grid>
//         <Grid item>
//           <Link
//             component={NavLink}
//             exact
//             to={"/threatanalysis/scenario/editscenario?id=" + value.id}
//           >
//             <Button variant="contained" color="primary">
//               Edit Threat Scenario
//             </Button>
//           </Link>
//         </Grid>
//       </Grid>

//       <Divider my={6} />
//       <Grid container spacing={6}>
//         <Grid item xs={12} md={6}>
//           <Details
//             currentScore={data.data[10]}
//             piScore={data.data[11]}
//             description={description}
//             selectedScenario={data.data}
//           />
//           <InformationSystemAsset selectedScenario={data.data} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <RadarChart selectedScenario={data.data[12]} />
//           <DoughnutChart selectedScenario={data.data} />
//           <ControlFamily controlScore={data.data[13]} />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default withTheme(Scenario);
