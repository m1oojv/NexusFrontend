// import React, { useState, useEffect } from "react";
// import styled, { withTheme } from "styled-components/macro";
// import { NavLink, useLocation } from "react-router-dom";
// import services from "../../../../api/services/services.js";
// import { useQuery } from "react-query";

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import "react-quill/dist/quill.bubble.css";

// import { Helmet } from "react-helmet";

// import {
//   Box,
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
//   FormControl,
//   FormLabel,
//   FormGroup,
//   FormControlLabel,
//   Switch,
// } from "@material-ui/core";
// import { red, orange, green } from "@material-ui/core/colors";
// import { spacing } from "@material-ui/system";

// import { makeStyles } from "@material-ui/core/styles";
// import queryString from "query-string";

// const Card = styled(MuiCard)(spacing);

// const Divider = styled(MuiDivider)(spacing);

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

// const Paper = styled(MuiPaper)(spacing);

// const TextFieldSpacing = styled(MuiTextField)(spacing);

// const cardHeight = "45vw";

// const BubbleWrapper = styled.div`
//   .ql-editor {
//     padding: 0;

//     &.ql-blank:before {
//       left: 0;
//     }
//   }

//   .ql-tooltip {
//     z-index: 9999;
//   }
// `;

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

// function setInitialMaturity(number) {
//   let initial = "";
//   if (number == 5)
//     initial = {
//       Five: true,
//       Four: false,
//       Three: false,
//       Two: false,
//       One: false,
//     };
//   else if (number == 4)
//     initial = {
//       Five: false,
//       Four: true,
//       Three: false,
//       Two: false,
//       One: false,
//     };
//   else if (number == 3)
//     initial = {
//       Five: false,
//       Four: false,
//       Three: true,
//       Two: false,
//       One: false,
//     };
//   else if (number == 2)
//     initial = {
//       Five: false,
//       Four: false,
//       Three: false,
//       Two: true,
//       One: false,
//     };
//   else if (number == 1)
//     initial = {
//       Five: false,
//       Four: false,
//       Three: false,
//       Two: false,
//       One: true,
//     };
//   else
//     initial = {
//       Five: false,
//       Four: false,
//       Three: false,
//       Two: false,
//       One: false,
//     };
//   return initial;
// }

// function setInitialEffectiveness(title, score) {
//   let initial = "";
//   let value = "";
//   if (title == "Effectiveness: Adaptability")
//     value = score.effectivenessAdaptabilityScore;
//   else if (title == "Effectiveness: Timeliness")
//     value = score.effectivenessTimelinessScore;
//   else if (title == "Effectiveness: Relevance")
//     value = score.effectivenessRelevanceScore;

//   if (value == "Strong")
//     initial = {
//       Strong: true,
//       Moderate: false,
//       Weak: false,
//     };
//   else if (value == "Moderate")
//     initial = {
//       Strong: false,
//       Moderate: true,
//       Weak: false,
//     };
//   else if (value == "Weak")
//     initial = {
//       Strong: false,
//       Moderate: false,
//       Weak: true,
//     };
//   else
//     initial = {
//       Strong: false,
//       Moderate: false,
//       Weak: false,
//     };
//   return initial;
// }

// function Details({ controlDetails }) {
//   return (
//     <Card mb={6} style={{ height: cardHeight, overflow: "auto" }}>
//       <CardContent>
//         <Typography variant="h5" gutterBottom>
//           Control Details
//         </Typography>
//         <Divider my={3} />
//         <Typography variant="body2" gutterBottom>
//           <b>Description:</b>
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           {controlDetails.current.description}
//         </Typography>
//         <span>&nbsp;&nbsp;</span>
//         <Typography variant="body2" gutterBottom>
//           <b>NIST Function:</b>
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           {controlDetails.current.nistFunction}
//         </Typography>
//         <span>&nbsp;&nbsp;</span>
//         <Typography variant="body2" gutterBottom>
//           <b>Source Framework</b>
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           {controlDetails.current.sourceFramework}
//         </Typography>
//         <span>&nbsp;&nbsp;</span>
//         <Typography variant="body2" gutterBottom>
//           <b>Source Framework Code</b>
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           {controlDetails.current.sourceFrameworkCode}
//         </Typography>
//         <span>&nbsp;&nbsp;</span>
//         <Typography variant="body2" gutterBottom>
//           <b>Organization Statement Type</b>
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           {controlDetails.current.orgStatementType}
//         </Typography>
//         <span>&nbsp;&nbsp;</span>
//         <Typography variant="body2" gutterBottom>
//           <b>Control Domain</b>
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           {controlDetails.current.controlDomain}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// function SwitchesGroupMaturity({ title, controlDetails, setControlDetails }) {
//   const [state, setState] = React.useState(
//     setInitialMaturity(controlDetails.current.maturityScore)
//   );

//   const handleChange = (event) => {
//     const resetState = {
//       Five: false,
//       Four: false,
//       Three: false,
//       Two: false,
//       One: false,
//     };
//     setState({ ...resetState, [event.target.name]: event.target.checked });
//     let newControlDetails = controlDetails;
//     newControlDetails.current.maturityScore = event.target.value;
//     setControlDetails(newControlDetails);
//   };

//   const { Five, Four, Three, Two, One } = state;
//   //console.log(path, controlDetails.current.effectivenessTimelinessScore);
//   return (
//     <Card mb={6}>
//       <CardContent>
//         <Paper mt={3}>
//           <FormControl component="fieldset">
//             <FormLabel component="legend">Select Score</FormLabel>
//             <FormGroup>
//               <FormControlLabel
//                 control={
//                   <Switch
//                     checked={Five}
//                     onChange={handleChange}
//                     name="Five"
//                     value="5"
//                   />
//                 }
//                 label="Five (5)"
//               />
//               <FormControlLabel
//                 control={
//                   <Switch
//                     checked={Four}
//                     onChange={handleChange}
//                     name="Four"
//                     value="4"
//                   />
//                 }
//                 label="Four (4)"
//               />
//               <FormControlLabel
//                 control={
//                   <Switch
//                     checked={Three}
//                     onChange={handleChange}
//                     name="Three"
//                     value="3"
//                   />
//                 }
//                 label="Three (3)"
//               />
//               <FormControlLabel
//                 control={
//                   <Switch
//                     checked={Two}
//                     onChange={handleChange}
//                     name="Two"
//                     value="2"
//                   />
//                 }
//                 label="Two (2)"
//               />
//               <FormControlLabel
//                 control={
//                   <Switch
//                     checked={One}
//                     onChange={handleChange}
//                     name="One"
//                     value="1"
//                   />
//                 }
//                 label="One (1)"
//               />
//             </FormGroup>
//           </FormControl>
//         </Paper>
//       </CardContent>
//     </Card>
//   );
// }

// function SwitchesGroup({ title, controlDetails, setControlDetails }) {
//   const [state, setState] = React.useState(
//     setInitialEffectiveness(title, controlDetails.current)
//   );

//   const handleChange = (event) => {
//     const resetState = { Strong: false, Moderate: false, Weak: false };
//     setState({ ...resetState, [event.target.name]: event.target.checked });
//     let newControlDetails = controlDetails;
//     if (title == "Maturity")
//       newControlDetails.current.maturityScore = event.target.name;
//     else if (title == "Effectiveness: Adaptability")
//       newControlDetails.current.effectivenessAdaptabilityScore =
//         event.target.name;
//     else if (title == "Effectiveness: Timeliness")
//       newControlDetails.current.effectivenessTimelinessScore =
//         event.target.name;
//     else if (title == "Effectiveness: Relevance")
//       newControlDetails.current.effectivenessRelevanceScore = event.target.name;
//     else if (title == "Coverage")
//       newControlDetails.current.coverageScore = event.target.name;
//     setControlDetails(newControlDetails);
//   };

//   const { Strong, Moderate, Weak } = state;
//   //console.log(path, controlDetails.current.effectivenessTimelinessScore);
//   return (
//     <Card mb={6}>
//       <CardContent>
//         <Paper mt={3}>
//           <FormControl component="fieldset">
//             <FormLabel component="legend">Select Score</FormLabel>
//             <FormGroup>
//               <FormControlLabel
//                 control={
//                   <Switch
//                     checked={Strong}
//                     onChange={handleChange}
//                     name="Strong"
//                   />
//                 }
//                 label="Strong"
//               />
//               <FormControlLabel
//                 control={
//                   <Switch
//                     checked={Moderate}
//                     onChange={handleChange}
//                     name="Moderate"
//                   />
//                 }
//                 label="Moderate"
//               />
//               <FormControlLabel
//                 control={
//                   <Switch checked={Weak} onChange={handleChange} name="Weak" />
//                 }
//                 label="Weak"
//               />
//             </FormGroup>
//           </FormControl>
//         </Paper>
//       </CardContent>
//     </Card>
//   );
// }

// function Maturity({ title, controlDetails, setControlDetails }) {
//   let detail = [
//     controlDetails.current.maturity,
//     controlDetails.current.maturityScore,
//   ];

//   useEffect(() => {
//     let newControlDetails = controlDetails;
//     newControlDetails.current.maturity = value;
//     setControlDetails(newControlDetails);
//   });
//   const [value, setValue] = useState(detail[0]);

//   return (
//     <div id={title}>
//       <Typography variant="body2" gutterBottom>
//         <b>{title}</b>
//       </Typography>
//       <Box mt={3}>
//         <BubbleWrapper>
//           <ReactQuill theme="bubble" value={value || ""} onChange={setValue} />
//         </BubbleWrapper>
//       </Box>
//       <SwitchesGroupMaturity
//         title={title}
//         controlDetails={controlDetails}
//         setControlDetails={setControlDetails}
//       />
//     </div>
//   );
// }

// function Effectiveness({ title, controlDetails, setControlDetails }) {
//   let detail = "";
//   if (title == "Effectiveness: Adaptability") {
//     detail = [
//       controlDetails.current.effectivenessAdaptability,
//       controlDetails.current.effectivenessAdaptabilityScore,
//     ];
//   } else if (title == "Effectiveness: Timeliness") {
//     detail = [
//       controlDetails.current.effectivenessTimeliness,
//       controlDetails.current.effectivenessTimelinessScore,
//     ];
//   } else if (title == "Effectiveness: Relevance") {
//     detail = [
//       controlDetails.current.effectivenessRelevance,
//       controlDetails.current.effectivenessRelevanceScore,
//     ];
//   }

//   useEffect(() => {
//     let newControlDetails = controlDetails;
//     if (title == "Effectiveness: Adaptability")
//       newControlDetails.current.effectivenessAdaptability = value;
//     else if (title == "Effectiveness: Timeliness")
//       newControlDetails.current.effectivenessTimeliness = value;
//     else if (title == "Effectiveness: Relevance")
//       newControlDetails.current.effectivenessRelevance = value;
//     setControlDetails(newControlDetails);
//   });
//   const [value, setValue] = useState(detail[0]);

//   return (
//     <div id={title}>
//       <Typography variant="body2" gutterBottom>
//         <b>{title}</b>
//       </Typography>
//       <Box mt={3}>
//         <BubbleWrapper>
//           <ReactQuill theme="bubble" value={value || ""} onChange={setValue} />
//         </BubbleWrapper>
//       </Box>
//       <SwitchesGroup
//         title={title}
//         controlDetails={controlDetails}
//         setControlDetails={setControlDetails}
//       />
//     </div>
//   );
// }

// function Coverage({ title, controlDetails, setControlDetails }) {
//   let detail = [
//     controlDetails.current.coverage,
//     controlDetails.current.coverageScore,
//   ];

//   useEffect(() => {
//     let newControlDetails = controlDetails;
//     newControlDetails.current.coverage = value;
//     setControlDetails(newControlDetails);
//   });
//   const [value, setValue] = useState(detail[0]);

//   const writeData = (event) => {
//     let newControlDetails = controlDetails;
//     newControlDetails.current.coverageScore = event.target.value;
//     setControlDetails(newControlDetails);
//   };

//   return (
//     <div id={title}>
//       <Typography variant="body2" gutterBottom>
//         <b>{title}</b>
//       </Typography>
//       <Box mt={3}>
//         <BubbleWrapper>
//           <ReactQuill theme="bubble" value={value || ""} onChange={setValue} />
//         </BubbleWrapper>
//       </Box>
//       <span>&nbsp;&nbsp;</span>
//       <TextField
//         id="coverage"
//         label={"Coverage Score"}
//         defaultValue={detail[1]}
//         variant="outlined"
//         style={{ width: "100%" }}
//         multiline={true}
//         onChange={writeData}
//       />
//     </div>
//   );
// }

// function ControlDetails() {
//   let location = useLocation();
//   let value = queryString.parse(location.search);
//   console.log(value);

//   const [firstLoad, setFirstLoad] = React.useState([false, false]);

//   const {
//     isLoading,
//     error,
//     data = { data: { current: "", pi: "" } },
//   } = useQuery(
//     "fetchVendorControlDetails",
//     () => services.getvendorcontroldetails(value),
//     {
//       onSuccess: () => {
//         if (firstLoad[0] == false) setFirstLoad([true, true]);
//       },
//     }
//   );

//   const [controlDetails, setControlDetails] = React.useState({
//     current: {
//       maturity: "",
//       maturityScore: "",
//       controlFamily: "",
//       effectivenessTimelinessScore: "",
//     },
//     pi: "",
//   });

//   const handleSave = () => {
//     console.log(controlDetails);
//   };

//   if (firstLoad[0] == false) return <React.Fragment></React.Fragment>;
//   if (firstLoad[1] == true) {
//     setControlDetails({ current: data.data[0] });
//     //setControlDetails({ current: data.data[0], pi: data.data[1] }); this is the old one
//     setFirstLoad([true, false]);
//   }
//   console.log(controlDetails);

//   return (
//     <React.Fragment>
//       <Helmet title="Control Details" />
//       <Grid justify="space-between" container spacing={10}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom display="inline">
//             {controlDetails.current.controlID}
//           </Typography>
//           <Breadcrumbs aria-label="Breadcrumb" mt={2}>
//             <Link
//               component={NavLink}
//               exact
//               to={"/insureddetails?id=" + value.vendor}
//             >
//               Company
//             </Link>
//             <Link
//               component={NavLink}
//               exact
//               to={"/controls?uuid=" + value.vendor}
//             >
//               Controls Analysis
//             </Link>
//             <Link
//               component={NavLink}
//               exact
//               to={
//                 "/controls/controlfamilydetails?id=" +
//                 controlDetails.current.controlFamily
//                   .replace(/\s/g, "+")
//                   .replace(/&/g, "%26") +
//                 "&vendor=" +
//                 value.vendor
//               }
//             >
//               Controls Family
//             </Link>
//             <Typography>Controls Details</Typography>
//           </Breadcrumbs>
//         </Grid>
//       </Grid>
//       <Divider my={6} />
//       <Grid container spacing={6}>
//         <Grid item xs={12} md={4}>
//           <Details controlDetails={controlDetails} />
//         </Grid>
//         <Grid item xs={12} md={8}>
//           <Card mb={6} style={{ maxHeight: cardHeight, overflow: "auto" }}>
//             <CardContent>
//               <Typography variant="h5" gutterBottom>
//                 Assessment
//               </Typography>
//               <Divider my={3} />
//               <Maturity
//                 title="Maturity"
//                 controlDetails={controlDetails}
//                 setControlDetails={setControlDetails}
//               />
//               <Divider my={3} />
//               <Effectiveness
//                 title="Effectiveness: Adaptability"
//                 controlDetails={controlDetails}
//                 setControlDetails={setControlDetails}
//               />
//               <Divider my={3} />
//               <Effectiveness
//                 title="Effectiveness: Timeliness"
//                 controlDetails={controlDetails}
//                 setControlDetails={setControlDetails}
//               />
//               <Divider my={3} />
//               <Effectiveness
//                 title="Effectiveness: Relevance"
//                 controlDetails={controlDetails}
//                 setControlDetails={setControlDetails}
//               />
//               <Divider my={3} />
//               <Coverage
//                 title="Coverage"
//                 controlDetails={controlDetails}
//                 setControlDetails={setControlDetails}
//               />
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default withTheme(ControlDetails);

// /*
// insert into line 594
// <Grid item>
//   <div>
//     <Link>
//       <Button variant="contained" color="primary" onClick={handleSave}>
//         Save Changes
//       </Button>
//     </Link>
//   </div>
// </Grid>
// */
