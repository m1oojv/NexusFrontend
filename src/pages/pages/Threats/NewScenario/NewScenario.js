// import React from "react";
// import styled, { withTheme } from "styled-components/macro";
// import { NavLink, useLocation } from "react-router-dom";
// import services from "../../../../api/services/services.js";
// import ControlsTable from "../../Scenario/AdvancedTable";
// import { useQuery, useMutation } from "react-query";
// import NavTab from "./NavTab";
// import { Helmet } from "react-helmet";

// import {
//   Button,
//   CardContent,
//   Grid,
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Link,
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

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

// const Paper = styled(MuiPaper)(spacing);

// const TextFieldSpacing = styled(MuiTextField)(spacing);

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
//                   readOnly: false,
//                 }}
//                 variant="outlined"
//                 style={{ width: "100%" }}
//                 multiline={true}
//               />
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

// function NewScenario() {
//   let location = useLocation();
//   let value = queryString.parse(location.search);
//   console.log(value.id);
//   const mutation = useMutation("updateScenario", (updateScenario) =>
//     services.updatethreatscenario(updateScenario)
//   );

//   const data = {
//     data: [
//       [[{ title: "", id: value.id }]],
//       [],
//       [{ title: "", value: "" }],
//       [{ businessImpact: "", businessUnit: "" }],
//       [[{ threatVector: "", value: "" }]],
//       [[{ threatActor: "", value: "" }]],
//       [{ title: "", value: "" }],
//       [{ title: "", value: "" }],
//       [{ title: "", value: "" }],
//       [{ title: "", value: "" }],
//     ],
//   };

//   const [editedScenario, setEditedScenario] = React.useState(data.data);
//   console.log("data.data", data.data);

//   const handleSubmit = () => {
//     mutation.mutate(editedScenario, {
//       onSuccess: () =>
//         (window.location.href = "/threatanalysis/scenario?id=" + value.id),
//     });
//   };
//   console.log("Submit", editedScenario);

//   return (
//     <React.Fragment>
//       <Helmet title="New Threat Scenario" />
//       <Grid justify="space-between" container spacing={10}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom display="inline">
//             {data.data[0][0].title}
//           </Typography>
//           <Breadcrumbs aria-label="Breadcrumb" mt={2}>
//             <Link component={NavLink} exact to="/threatanalysis">
//               Threat Analysis
//             </Link>
//             <Typography>Edit Scenario</Typography>
//           </Breadcrumbs>
//         </Grid>
//         <Grid item>
//           <div>
//             <Button variant="contained" color="primary" onClick={handleSubmit}>
//               Submit
//             </Button>
//           </div>
//         </Grid>
//       </Grid>

//       <Divider my={6} />
//       <Grid container spacing={6}>
//         <Grid item xs={12}>
//           <NavTab
//             id={value.id}
//             selectedScenario={editedScenario}
//             setEditedScenario={setEditedScenario}
//           />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }
// /*
//       <Grid item xs={12}>
//           <ControlledAccordion
//             selectedScenario={data.data[1]}
//             selectedScenarioControls={data.data[2]}
//           />
//         </Grid>
// */

// export default withTheme(NewScenario);
