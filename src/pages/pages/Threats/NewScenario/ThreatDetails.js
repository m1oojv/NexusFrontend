// import React, { useState } from "react";
// import styled from "styled-components/macro";

// import {
//   Button,
//   CardContent,
//   Grid,
//   Chip as MuiChip,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Card as MuiCard,
//   Divider as MuiDivider,
//   Typography,
// } from "@material-ui/core";

// import { spacing } from "@material-ui/system";

// import { makeStyles } from "@material-ui/core/styles";

// const Card = styled(MuiCard)(spacing);

// const Divider = styled(MuiDivider)(spacing);

// const Chip = styled(MuiChip)(spacing);

// const useStyles = makeStyles(() => ({
//   root: {
//     flexGrow: 0,
//     width: "100%",
//   },
//   formControl: {
//     minWidth: 200,
//   },
// }));

// export default function ThreatDetails({
//   threatActor,
//   setThreatActor,
//   threatVector,
//   setThreatVector,
// }) {
//   const classes = useStyles();

//   const [addThreatActor, setAddThreatActor] = useState({
//     key: Math.floor(Math.random() * 1000),
//     threatActor: "",
//   });

//   const [addThreatVector, setAddThreatVector] = useState({
//     key: Math.floor(Math.random() * 1000),
//     threatVector: "",
//   });

//   const handleDeleteThreatActor = (data) => () => {
//     setThreatActor(threatActor.filter((item) => item.key !== data.key));
//   };

//   const handleDeleteThreatVector = (data) => () => {
//     setThreatVector(threatVector.filter((item) => item.key !== data.key));
//   };

//   const handleChangeThreatActor = (event) => {
//     setAddThreatActor({
//       ...addThreatActor,
//       threatActor: event.target.value,
//       key: Math.floor(Math.random() * 1000),
//     });
//   };
//   const handleChangeThreatVector = (event) => {
//     setAddThreatVector({
//       ...addThreatVector,
//       threatVector: event.target.value,
//       key: Math.floor(Math.random() * 1000),
//     });
//   };
//   const handleAddThreatActor = (event) => {
//     let add = true;
//     threatActor.map((e) => {
//       if (
//         addThreatActor.threatActor == e.threatActor ||
//         addThreatActor.key == e.key ||
//         addThreatActor.threatActor == ""
//       )
//         add = false;
//     });
//     if (add == true) setThreatActor([...threatActor, addThreatActor]);
//   };

//   const handleAddThreatVector = (event) => {
//     let add = true;
//     threatVector.map((e) => {
//       if (
//         addThreatVector.threatVector == e.threatVector ||
//         addThreatVector.key == e.key ||
//         addThreatVector.threatVector == " " ||
//         addThreatVector.threatVector == 0
//       )
//         add = false;
//     });
//     if (add == true) setThreatVector([...threatVector, addThreatVector]);
//   };

//   return (
//     <Card mb={6}>
//       <CardContent>
//         <Grid container spacing={6}>
//           <Grid item xs={12} md={12}>
//             <Divider my={3} />
//             <Typography variant="h6" gutterBottom>
//               Add Threat Details
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Grid item xs={12} md={12}>
//               <Typography variant="h6" gutterBottom>
//                 Threat Actor
//               </Typography>
//               <span>&nbsp;&nbsp;&nbsp;</span>
//               <div>
//                 {threatActor.map((data) => {
//                   return (
//                     <Chip
//                       key={data.key}
//                       label={data.threatActor}
//                       onDelete={handleDeleteThreatActor(data)}
//                       m={1}
//                       style={{ textTransform: "capitalize" }}
//                     />
//                   );
//                 })}
//               </div>
//             </Grid>
//             <Grid item xs={12} md={12}>
//               <Divider my={3} />
//               <FormControl className={classes.formControl} m={2}>
//                 <InputLabel id="threat-actor-select-label">
//                   Add Threat Actor
//                 </InputLabel>
//                 <Select
//                   labelId="threat-actor-select-label"
//                   id="threat-actor-select"
//                   value={addThreatActor.threatActor}
//                   onClick={handleChangeThreatActor}
//                 >
//                   <MenuItem value="organised crime">Organised Crime</MenuItem>
//                   <MenuItem value="third party threats">
//                     Third Party Threats
//                   </MenuItem>
//                   <MenuItem value="nation state">Nation State</MenuItem>
//                   <MenuItem value="trusted insider">Trusted Insider</MenuItem>
//                   <MenuItem value="script kiddie">Script Kiddie</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <span>&nbsp;&nbsp;&nbsp;</span>
//             <Grid item xs={12} md={12}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleAddThreatActor}
//               >
//                 Add
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Grid item xs={12} md={12}>
//               <Typography variant="h6" gutterBottom>
//                 Threat Vector
//               </Typography>
//               <span>&nbsp;&nbsp;&nbsp;</span>
//               <div>
//                 {threatVector.map((data) => {
//                   return (
//                     <Chip
//                       key={data.key}
//                       label={data.threatVector}
//                       onDelete={handleDeleteThreatVector(data)}
//                       m={1}
//                       style={{ textTransform: "capitalize" }}
//                     />
//                   );
//                 })}
//               </div>
//             </Grid>
//             <Grid item xs={12} md={12}>
//               <Divider my={3} />
//               <FormControl className={classes.formControl} m={2}>
//                 <InputLabel id="threat-vector-select-label">
//                   Add Threat Vector
//                 </InputLabel>
//                 <Select
//                   labelId="threat-vector-select-label"
//                   id="threat-vector-select"
//                   value={addThreatVector.threatVector}
//                   onClick={handleChangeThreatVector}
//                 >
//                   <MenuItem value="malware">Malware</MenuItem>
//                   <MenuItem value="privilege misuse">Privilege Misuse</MenuItem>
//                   <MenuItem value="phishing and social engineering">
//                     Phishing and Social Engineering
//                   </MenuItem>
//                   <MenuItem value="vulnerability exploitation">
//                     Vulnerability Exploitation
//                   </MenuItem>
//                   <MenuItem value="denial of service">
//                     Denial of Service
//                   </MenuItem>
//                   <MenuItem value="supply chain compromise">
//                     Supply Chain Compromise
//                   </MenuItem>
//                   <MenuItem value="web-based attacks">
//                     Web-based Attacks
//                   </MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <span>&nbsp;&nbsp;&nbsp;</span>
//             <Grid item xs={12} md={12}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleAddThreatVector}
//               >
//                 Add
//               </Button>
//             </Grid>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }
