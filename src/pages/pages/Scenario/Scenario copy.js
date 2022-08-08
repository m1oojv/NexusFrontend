// import React, { useEffect } from "react";
// import styled, { withTheme } from "styled-components/macro";
// import { NavLink, useLocation } from "react-router-dom";
// import services from "../../../api/services/services.js";
// import ControlsTable from "./AdvancedTable";
// import Actions from "./Actions";
// import { useQuery } from "react-query";
// import InformationSystemAsset from "./InformationSystemAsset";

// import { Helmet } from "react-helmet";

// import {
//   Box,
//   Button,
//   CardContent,
//   Grid,
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Link,
//   Chip as MuiChip,
//   Container,
//   Breadcrumbs as MuiBreadcrumbs,
//   Card as MuiCard,
//   Divider as MuiDivider,
//   Paper as MuiPaper,
//   TextField as MuiTextField,
//   Typography,
// } from "@material-ui/core";
// import { blue, red, orange, green } from "@material-ui/core/colors";
// import { spacing } from "@material-ui/system";
// import {
//   ExpandMore as ExpandMoreIcon,
//   Add as AddIcon,
// } from "@material-ui/icons";

// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import queryString from "query-string";

// const Card = styled(MuiCard)(spacing);

// const Divider = styled(MuiDivider)(spacing);

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

// const Paper = styled(MuiPaper)(spacing);

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

// function Description(props) {
//   return (
//     <Card mb={6}>
//       <Grid item>
//         <CardContent>
//           <Typography variant="h5" gutterBottom>
//             Description
//           </Typography>
//           <Divider my={3} />
//           <Typography variant="body2" gutterBottom>
//             {Array.from(props.description).map((killchain) => {
//               return (
//                 <span key={killchain.killChainStage}>
//                   {killchain.threatEventDescription}
//                   <br />
//                   <br />
//                 </span>
//               );
//             })}
//           </Typography>
//         </CardContent>
//       </Grid>
//     </Card>
//   );
// }

// function CurrentScore({ currentScore }) {
//   return (
//     <Card mb={6}>
//       <Grid item>
//         <CardContent>
//           <Typography variant="h5" gutterBottom>
//             Current Score
//           </Typography>
//           <Divider my={3} />
//           <Typography variant="h6" gutterBottom>
//             <ScoreChip
//               label={currentScore}
//               m={1}
//               key={currentScore}
//               rgbcolor={determineColor(currentScore)}
//             />
//           </Typography>
//         </CardContent>
//       </Grid>
//     </Card>
//   );
// }

// function PIScore({ piScore }) {
//   return (
//     <Card mb={6}>
//       <Grid item>
//         <CardContent>
//           <Typography variant="h5" gutterBottom>
//             Post Investment Score
//           </Typography>
//           <Divider my={3} />
//           <Typography variant="h6" gutterBottom>
//             <ScoreChip
//               label={piScore}
//               m={1}
//               key={piScore}
//               rgbcolor={determineColor(piScore)}
//             />
//           </Typography>
//         </CardContent>
//       </Grid>
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
//     <Card mb={6}>
//       <Grid item>
//         <CardContent>
//           <Typography variant="h5" gutterBottom>
//             Business Details
//           </Typography>
//           <Divider my={3} />
//           <Typography variant="h6" gutterBottom>
//             Business Units
//           </Typography>
//           <Typography variant="body2" component="div" gutterBottom>
//             {BU.map((unit) => (
//               <Chip label={unit} m={1} key={unit} />
//             ))}
//           </Typography>
//           <span>&nbsp;&nbsp;&nbsp;</span>
//           <Typography variant="h6" gutterBottom>
//             Business Impact
//           </Typography>
//           <Typography variant="body2" component="div" gutterBottom>
//             {BI.map((impact) => (
//               <Chip label={impact} m={1} key={impact} />
//             ))}
//           </Typography>
//         </CardContent>
//       </Grid>
//     </Card>
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
//     <Card mb={6}>
//       <Grid item>
//         <CardContent>
//           <Typography variant="h5" gutterBottom>
//             Threat Details
//           </Typography>
//           <Divider my={3} />
//           <Typography variant="h6" gutterBottom>
//             Threat Actor
//           </Typography>
//           <Typography variant="body2" component="div" gutterBottom>
//             {Actor.map((actor) => (
//               <Chip
//                 label={actor}
//                 m={1}
//                 key={actor}
//                 style={{ textTransform: "capitalize" }}
//               />
//             ))}
//           </Typography>
//           <span>&nbsp;&nbsp;&nbsp;</span>
//           <Typography variant="h6" gutterBottom>
//             Threat Vector
//           </Typography>
//           <Typography variant="body2" component="div" gutterBottom>
//             {Vector.map((vector) => (
//               <Chip
//                 label={vector}
//                 m={1}
//                 key={vector}
//                 style={{ textTransform: "capitalize" }}
//               />
//             ))}
//           </Typography>
//         </CardContent>
//       </Grid>
//     </Card>
//   );
// }

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       id={`scrollable-auto-tabpanel-${index}`}
//       aria-labelledby={`scrollable-auto-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography component="div">{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `scrollable-auto-tab-${index}`,
//     "aria-controls": `scrollable-auto-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 0,
//     width: "100%",
//   },
// }));

// function ScenarioPage(props) {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <Card mb={6}>
//         <CardContent>
//           <Typography component={"span"} variant="h3" gutterBottom>
//             {props.selectedScenario[0][0].title}
//           </Typography>
//           <Typography variant="body2" gutterBottom>
//             Select tabs to view threat event, business details, threat details
//             and information system-asset rating
//           </Typography>
//           <Tabs
//             value={value}
//             indicatorColor="primary"
//             textColor="primary"
//             onChange={handleChange}
//             variant={"scrollable"}
//             scrollButtons={"on"}
//           >
//             <Tab label="MITRE ATT&CK Kill Chain Stages" {...a11yProps(0)} />
//             <Tab label="Business Details" {...a11yProps(1)} />
//             <Tab label="Threat Details" {...a11yProps(2)} />
//             <Tab label="Information System-Asset Rating" {...a11yProps(2)} />
//           </Tabs>
//           <TabPanel value={value} index={0}>
//             Item One
//           </TabPanel>
//           <TabPanel value={value} index={1}>
//             Item Two
//           </TabPanel>
//           <TabPanel value={value} index={2}>
//             Item Three
//           </TabPanel>
//           <TabPanel value={value} index={3}>
//             Item Four
//           </TabPanel>
//           <TabPanel value={value} index={4}>
//             Item Five
//           </TabPanel>
//           <TabPanel value={value} index={5}>
//             Item Six
//           </TabPanel>
//           <TabPanel value={value} index={6}>
//             Item Seven
//           </TabPanel>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// function ControlledAccordion(props) {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   const killChain = Array.from(props.selectedScenario).map((value) =>
//     createData(
//       value.killChainStage,
//       value.threatEventDescription,
//       value.techniqueOne,
//       value.techniqueTwo,
//       value.techniqueThree
//     )
//   );
//   console.log(killChain);

//   const controls = Array.from(props.selectedScenarioControls).map((value) =>
//     createControlsData(
//       value.killChainStage,
//       value.controlID,
//       value.nistFunction,
//       value.controlFamily,
//       value.description
//     )
//   );

//   function renderForm() {
//     const inputs = [];
//     for (const stage of killChain) {
//       let panel = "panel" + stage.killChainStage;
//       const killChainStageControls = [];
//       for (const control of controls) {
//         if (control.killChainStage == stage.killChainStage) {
//           killChainStageControls.push(control);
//         }
//       }
//       inputs.push(
//         <Accordion
//           key={stage.killChainStage}
//           expanded={expanded === panel}
//           onChange={handleChange(panel)}
//         >
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography variant="h4">{stage.killChainStage}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Grid item xs={12}>
//               <TextField
//                 id="standard-read-only-input"
//                 label={"Event Description"}
//                 defaultValue={stage.Description}
//                 InputProps={{
//                   readOnly: true,
//                 }}
//                 variant="outlined"
//                 style={{ width: "100%" }}
//                 multiline={true}
//               />
//               <Paper mt={3}>
//                 <TextField
//                   id="standard-required"
//                   label="Technique #1"
//                   defaultValue={stage.techniqueOne}
//                   InputProps={{
//                     readOnly: true,
//                   }}
//                   style={{ width: "25%" }}
//                   m={2}
//                 />
//                 <TextField
//                   id="standard-required"
//                   label="Technique #2"
//                   defaultValue={stage.techniqueTwo}
//                   InputProps={{
//                     readOnly: true,
//                   }}
//                   style={{ width: "25%" }}
//                   m={2}
//                 />
//               </Paper>
//               <ControlsTable killChainStageControls={killChainStageControls} />
//             </Grid>
//           </AccordionDetails>
//         </Accordion>
//       );
//     }
//     return inputs;
//   }
//   return (
//     <Card mb={6}>
//       <CardContent>{renderForm()}</CardContent>
//     </Card>
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
//       ],
//     },
//   } = useQuery("fetchScenario", () =>
//     services.getthreatscenariodetails({ value })
//   );

//   Array.from(data.data[1]).map((e) => {
//     if (e.threatEventDescription != "") description.push(e);
//   });

//   console.log("score", data.data[10]);

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
//           <div>
//             <Link
//               component={NavLink}
//               exact
//               to={"/threatanalysis/scenario/editscenario?id=" + value.id}
//             >
//               <Button variant="contained" color="primary">
//                 Edit Threat Scenario
//               </Button>
//             </Link>
//           </div>
//         </Grid>
//       </Grid>

//       <Divider my={6} />
//       <Grid container spacing={6}>
//         <Grid item xs={12} md={6}>
//           <CurrentScore currentScore={data.data[10]} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <PIScore piScore={data.data[11]} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Description description={description} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <BusinessDetails selectedScenario={data.data} />
//           <ThreatDetails selectedScenario={data.data} />
//         </Grid>
//         <Grid item xs={12}>
//           <InformationSystemAsset selectedScenario={data.data} />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }
// //          <ScenarioPage selectedScenario={selectedScenario} />
// /*
//       <Grid item xs={12}>
//           <ControlledAccordion
//             selectedScenario={data.data[1]}
//             selectedScenarioControls={data.data[2]}
//           />
//         </Grid>
// */

// export default withTheme(Scenario);
