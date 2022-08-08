// import React from "react";
// import styled from "styled-components/macro";

// import {
//   CardContent,
//   Grid,
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Breadcrumbs as MuiBreadcrumbs,
//   Card as MuiCard,
//   Divider as MuiDivider,
//   Paper as MuiPaper,
//   TextField as MuiTextField,
//   Typography,
// } from "@material-ui/core";

// import { spacing } from "@material-ui/system";
// import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

// import queryString from "query-string";

// const Card = styled(MuiCard)(spacing);

// const Divider = styled(MuiDivider)(spacing);

// const TextFieldSpacing = styled(MuiTextField)(spacing);

// const TextField = styled(TextFieldSpacing)`
//   width: 200px;
// `;

// const KillChain = [
//   { killChainStage: "Pre-Attack" },
//   { killChainStage: "Reconnaissance" },
//   { killChainStage: "Weaponization" },
//   { killChainStage: "Delivery" },
//   { killChainStage: "Exploitation" },
//   { killChainStage: "Installation" },
//   { killChainStage: "Command and Control" },
//   { killChainStage: "Action on Objectives" },
//   { killChainStage: "Post-Breach" },
// ];

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

// function Description({
//   title,
//   setTitle,
//   description,
//   setDescription,
//   scenarioControls,
// }) {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   const writeTitle = (event) => {
//     let newTitle = title;
//     newTitle[0].title = event.target.value;
//     setTitle(newTitle);
//   };

//   const writeData = (event) => {
//     let newDescription = description;
//     newDescription[0].description = event.target.value;
//     console.log("title", title);
//     setTitle(newDescription);
//   };

//   const controls = Array.from(scenarioControls).map((value) =>
//     createControlsData(
//       value.killChainStage,
//       value.controlID,
//       value.nistFunction,
//       value.controlFamily,
//       value.description
//     )
//   );
//   let index = 0;

//   function renderForm() {
//     const inputs = [];
//     if (description.length == 0) description = KillChain;
//     for (const stage of KillChain) {
//       let panel = "panel" + stage.killChainStage;
//       let details = [];
//       description.map((e) => {
//         if (stage.killChainStage == e.killChainStage) details = e;
//       });
//       inputs.push(
//         <Accordion
//           key={stage.killChainStage}
//           expanded={expanded === panel}
//           onChange={handleChange(panel)}
//         >
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography variant="body1">
//               <b>{stage.killChainStage}</b>
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Grid item xs={12}>
//               <TextField
//                 id="standard-read-only-input"
//                 label={"Event Description"}
//                 defaultValue={details.threatEventDescription}
//                 InputProps={{
//                   readOnly: false,
//                 }}
//                 variant="outlined"
//                 style={{ width: "100%" }}
//                 multiline={true}
//                 onChange={writeData}
//                 id={index.toString()}
//               />
//             </Grid>
//           </AccordionDetails>
//         </Accordion>
//       );
//       index++;
//     }
//     return inputs;
//   }
//   return (
//     <Card mb={6}>
//       <CardContent>
//         <Grid container spacing={6}>
//           <Grid item xs={12} md={12}>
//             <Divider my={3} />
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <Typography variant="h6">Scenario Title</Typography>
//             <span>&nbsp;&nbsp;&nbsp;</span>
//             <TextField
//               id="standard-read-only-input"
//               label={"Scenario Title"}
//               defaultValue={title[0].title}
//               InputProps={{
//                 readOnly: false,
//               }}
//               variant="outlined"
//               style={{ width: "100%" }}
//               multiline={true}
//               onChange={writeTitle}
//             />
//           </Grid>
//           <span>&nbsp;&nbsp;&nbsp;</span>
//           <Grid item xs={12} md={12}>
//             <Typography variant="h6">Description</Typography>
//             <span>&nbsp;&nbsp;&nbsp;</span>
//             <TextField
//               id="standard-read-only-input"
//               label={"Scenario Description"}
//               defaultValue={title[0].description}
//               InputProps={{
//                 readOnly: false,
//               }}
//               variant="outlined"
//               style={{ width: "100%" }}
//               multiline={true}
//               onChange={writeData}
//             />
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }

// export default Description;
