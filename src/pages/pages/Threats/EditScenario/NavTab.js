// import React, { useState, useEffect } from "react";
// import styled from "styled-components/macro";
// import AttackTimeline from "./AttackTimelineCopy";
// import BusinessDetails from "./BusinessDetails";
// import ThreatDetails from "./ThreatDetails";
// import ControlsTable from "./AdvancedTable";
// import Description from "./Description";

// import {
//   Box,
//   CardContent,
//   Grid,
//   Card as MuiCard,
//   Divider as MuiDivider,
//   Typography,
// } from "@material-ui/core";

// import { spacing } from "@material-ui/system";

// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import PropTypes, { array } from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";

// const Card = styled(MuiCard)(spacing);

// const Divider = styled(MuiDivider)(spacing);

// const KillChain = [
//   "Pre-Attack",
//   "Reconnaissance",
//   "Weaponization",
//   "Delivery",
//   "Exploitation",
//   "Installation",
//   "Command and Control",
//   "Action on Objectives",
//   "Post-Breach",
// ];

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
//   formControl: {
//     minWidth: 200,
//   },
// }));

// export default function NavTabs({ selectedScenario, setEditedScenario }) {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const [title, setTitle] = useState([
//     {
//       id: selectedScenario[0][0].id,
//       title: selectedScenario[0][0].title,
//       description: selectedScenario[0][0].description,
//     },
//   ]);

//   const [description, setDescription] = useState(
//     Array.from(selectedScenario[1]).map((e) => ({
//       threatScenario: e.threatScenario,
//       killChainStage: e.killChainStage,
//       threatEventDescription: e.threatEventDescription,
//     }))
//   );

//   const [businessDetails, setBusinessDetails] = useState(
//     Array.from(selectedScenario[3]).map((e) => ({
//       key: Math.floor(Math.random() * 1000),
//       businessUnit: e.businessUnit
//         .replace("transactional_banking", "Transactional Banking")
//         .replace("global_banking", "Global Banking"),
//       businessImpact: e.businessImpact
//         .replace("loss of client services", "Loss of Client Services")
//         .replace("loss of funds", "Loss of Funds")
//         .replace("loss of confidential data", "Loss of Confidential Data"),
//     }))
//   );

//   const [threatVector, setThreatVector] = useState(
//     Array.from(selectedScenario[4]).map((e) => {
//       if (e.threatVector == undefined) e.threatVector = "";
//       return {
//         key: Math.floor(Math.random() * 1000),
//         threatVector: e.threatVector,
//       };
//     })
//   );
//   console.log("threatactor", selectedScenario[5]);
//   const [threatActor, setThreatActor] = useState(
//     Array.from(selectedScenario[5]).map((e) => {
//       if (e.threatActor == undefined) e.threatActor = "";
//       return {
//         key: Math.floor(Math.random() * 1000),
//         threatActor: e.threatActor,
//       };
//     })
//   );

//   const [techniques, setTechniques] = useState(
//     KillChain.map((row) => {
//       return {
//         killChainStage: row,
//         key: Math.floor(Math.random() * 1000),
//         mitreTechniques: [
//           selectedScenario[8].map((e) => {
//             let result = null;
//             if (row == e.killChainStage)
//               result = { name: e.technique, id: e.id };
//             return result;
//           }),
//         ][0].filter((item) => !!item),
//       };
//     })
//   );

//   let updateTechnique = [];
//   techniques.map((e) => {
//     return e.mitreTechniques.map((f) => {
//       updateTechnique.push({
//         killChainStage: e.killChainStage,
//         technique: f.name,
//         id: f.id,
//       });
//     });
//   });

//   const [industry, setIndustry] = useState(
//     Array.from(selectedScenario[14]).map((e) => {
//       if (e.industry == undefined) e.industry = "";
//       return {
//         key: Math.floor(Math.random() * 1000),
//         industry: e.industry,
//       };
//     })
//   );

//   let controlsList = [];
//   Array.from(selectedScenario[9]).map((control) => {
//     let techniqueExist = false;
//     updateTechnique.map((technique) => {
//       if (control.techniqueID == technique.id || control.techniqueID == "NIL") {
//         techniqueExist = true;
//         control.killChainStage = technique.killChainStage;
//       }
//     });
//     if (techniqueExist == true) controlsList.push(control);
//   });

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   console.log("control list", controlsList);
//   useEffect(() => {
//     let editedScenario = selectedScenario;
//     editedScenario[0] = title;
//     editedScenario[1] = description;
//     editedScenario[2] = controlsList;
//     editedScenario[3] = businessDetails;
//     editedScenario[4] = threatVector;
//     editedScenario[5] = threatActor;
//     editedScenario[8] = updateTechnique;
//     editedScenario[14] = industry;

//     setEditedScenario(editedScenario);
//   });

//   return (
//     <div className={classes.root}>
//       <Card mb={6}>
//         <CardContent>
//           <Typography component={"span"} variant="h4" gutterBottom>
//             Edit Threat Scenario
//           </Typography>
//           <Divider my={3} />
//           <Typography variant="body2" gutterBottom>
//             Select tabs to edit threat scenario details
//           </Typography>
//           <AppBar position="static" color="default">
//             <Tabs
//               value={value}
//               indicatorColor="primary"
//               textColor="primary"
//               onChange={handleChange}
//               variant={"scrollable"}
//               scrollButtons={"on"}
//             >
//               <Tab label="Title and Description" {...a11yProps(0)} />
//               <Tab label="Business Details" {...a11yProps(1)} />
//               <Tab label="Threat Details" {...a11yProps(2)} />
//               <Tab label="ATT&CK Techniques" {...a11yProps(3)} />
//               <Tab label="Controls" {...a11yProps(4)} />
//             </Tabs>
//           </AppBar>
//           <TabPanel value={value} index={0}>
//             <Description
//               title={title}
//               setTitle={setTitle}
//               description={title}
//               setDescription={setDescription}
//               scenarioControls={selectedScenario[2]}
//             />
//           </TabPanel>
//           <TabPanel value={value} index={1}>
//             <Grid container spacing={6}>
//               <Grid item xs={12} md={12}>
//                 <BusinessDetails
//                   businessDetails={businessDetails}
//                   setBusinessDetails={setBusinessDetails}
//                   industry={industry}
//                   setIndustry={setIndustry}
//                 />
//               </Grid>
//             </Grid>
//           </TabPanel>
//           <TabPanel value={value} index={2}>
//             <ThreatDetails
//               threatVector={threatVector}
//               setThreatVector={setThreatVector}
//               threatActor={threatActor}
//               setThreatActor={setThreatActor}
//             />
//           </TabPanel>
//           <TabPanel value={value} index={3}>
//             <AttackTimeline
//               techniques={techniques}
//               setTechniques={setTechniques}
//               completeTechniqueList={selectedScenario[7]}
//             />
//           </TabPanel>
//           <TabPanel value={value} index={4}>
//             <ControlsTable
//               killChainStageControls={controlsList}
//               controlsList={controlsList}
//             />
//           </TabPanel>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
