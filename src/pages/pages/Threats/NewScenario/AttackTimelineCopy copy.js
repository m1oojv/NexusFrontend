// import React from "react";
// import styled from "styled-components/macro";
// import { makeStyles } from "@material-ui/core/styles";
// import Timeline from "@material-ui/lab/Timeline";
// import TimelineItem from "@material-ui/lab/TimelineItem";
// import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
// import TimelineConnector from "@material-ui/lab/TimelineConnector";
// import TimelineContent from "@material-ui/lab/TimelineContent";
// import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
// import TimelineDot from "@material-ui/lab/TimelineDot";
// import FolderIcon from "@material-ui/icons/Folder";
// import LaptopMacIcon from "@material-ui/icons/LaptopMac";
// import HotelIcon from "@material-ui/icons/Hotel";
// import RepeatIcon from "@material-ui/icons/Repeat";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import DeleteIcon from "@material-ui/icons/DeleteOutlined";
// import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";

// import BusinessDetails from "./BusinessDetails";

// import {
//   Button,
//   CardContent,
//   Grid,
//   Card as MuiCard,
//   Divider as MuiDivider,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemSecondaryAction,
//   ListItemText,
//   IconButton,
//   Collapse,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@material-ui/core";

// import { spacing } from "@material-ui/system";
// import { TrendingUpRounded } from "@material-ui/icons";

// const Card = styled(MuiCard)(spacing);

// const Divider = styled(MuiDivider)(spacing);

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: "6px 16px",
//     variant: "outlined",
//     borderRadius: 20,
//     borderColor: "#000",
//     background: "#6e7f80",
//   },
//   secondaryTail: {
//     backgroundColor: theme.palette.secondary.main,
//   },
//   formControl: {
//     minWidth: 200,
//   },
// }));

// const Tactics = [
//   "Initial Access",
//   "Execution",
//   "Persistence",
//   "Privilege Escalation",
//   "Defense Evasion",
//   "Credential Access",
//   "Discovery",
//   "Lateral Movement",
//   "Collection",
//   "Command and Control",
//   "Exfiltration",
//   "Impact",
// ];

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

// export default function AttackTimeline({
//   techniques,
//   setTechniques,
//   completeTechniqueList,
// }) {
//   const classes = useStyles();
//   const [secondary, setSecondary] = React.useState(false);
//   const [open, setOpen] = React.useState(true);
//   const [selectedKillChain, setselectedKillChain] = React.useState("");
//   const [selectedTactics, setselectedTactics] = React.useState(
//     "Initial Access"
//   );
//   const [selectedTechnique, setselectedTechnique] = React.useState("");

//   console.log(techniques);

//   const handleKillChainChange = (event) => {
//     if (event.target.value != "" || event.target.value != undefined)
//       setselectedKillChain(event.target.value);
//   };
//   console.log(selectedKillChain);

//   const handleTacticsChange = (event) => {
//     if (event.target.value != "" || event.target.value != undefined)
//       setselectedTactics(event.target.value);
//   };

//   const handleTechniqueChange = (event) => {
//     setselectedTechnique(event.target.value);
//   };

//   const handleAddTechnique = (event) => {
//     techniques[selectedKillChain].mitreTechniques[0] = [
//       ...techniques[selectedKillChain].mitreTechniques[0],
//       {
//         name: selectedTechnique,
//         id: "T1102",
//       },
//     ];
//     setTechniques(techniques);
//   };
//   console.log(selectedTechnique);

//   const handleClick = (index) => {
//     //techniques[index].open = !techniques[index].open;
//     //setTechniques(techniques);
//     //console.log(techniques[index].open, index);
//     setOpen(!open);
//   };

//   return (
//     <Card mb={6}>
//       <CardContent>
//         <Grid container spacing={6}>
//           <Grid item xs={12} md={12}>
//             <Divider my={3} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Timeline align="alternate">
//               {techniques.map((killChain, index) => (
//                 <TimelineItem>
//                   <TimelineSeparator>
//                     <TimelineDot></TimelineDot>
//                     <TimelineConnector />
//                   </TimelineSeparator>
//                   <TimelineContent>
//                     <Paper elevation={3} className={classes.paper}>
//                       <List dense={TrendingUpRounded}>
//                         <ListItem button onClick={() => handleClick(index)}>
//                           <ListItemText
//                             primary={killChain.killChainStage}
//                             key={killChain.key}
//                           />
//                           {open ? <ExpandLess /> : <ExpandMore />}
//                         </ListItem>
//                         <Collapse in={open} timeout="auto" unmountOnExit>
//                           {killChain.mitreTechniques.map((e, index1) => {
//                             return e.map((f, index2) => (
//                               <ListItem button>
//                                 <ListItemText
//                                   primary={f.id + " - " + f.name}
//                                   secondary={
//                                     secondary ? "Secondary text" : null
//                                   }
//                                   key={Math.floor(Math.random() * 1000)}
//                                 />
//                                 <ListItemSecondaryAction>
//                                   <IconButton edge="end" aria-label="delete">
//                                     <DeleteIcon />
//                                   </IconButton>
//                                 </ListItemSecondaryAction>
//                               </ListItem>
//                             ));
//                           })}
//                         </Collapse>
//                       </List>
//                     </Paper>
//                   </TimelineContent>
//                 </TimelineItem>
//               ))}
//             </Timeline>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h6" gutterBottom>
//               Techniques
//             </Typography>
//             <Grid item xs={12} md={12}>
//               <FormControl className={classes.formControl} m={2}>
//                 <InputLabel id="killchain-select-label">
//                   Select Kill Chain Stage
//                 </InputLabel>
//                 <Select
//                   labelId="killchain-select-label"
//                   id="killchain-select"
//                   value={selectedKillChain}
//                   onClick={handleKillChainChange}
//                 >
//                   {KillChain.map((chooseKillChain, index) => {
//                     return <MenuItem value={index}>{chooseKillChain}</MenuItem>;
//                   })}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <span>&nbsp;&nbsp;&nbsp;</span>
//             <Grid item xs={12} md={12}>
//               <FormControl className={classes.formControl} m={2}>
//                 <InputLabel id="tactics-select-label">Select Tactic</InputLabel>
//                 <Select
//                   labelId="tactics-select-label"
//                   id="tactics-select"
//                   value={selectedTactics}
//                   onClick={handleTacticsChange}
//                 >
//                   {Tactics.map((chooseTactic, index) => {
//                     return (
//                       <MenuItem value={chooseTactic}>{chooseTactic}</MenuItem>
//                     );
//                   })}
//                 </Select>
//               </FormControl>
//               <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
//               <FormControl className={classes.formControl} m={2}>
//                 <InputLabel id="techniques-select-label">
//                   Select Technique
//                 </InputLabel>
//                 <Select
//                   labelId="techniques-select-label"
//                   id="techniques-select"
//                   value={selectedTechnique}
//                   onClick={handleTechniqueChange}
//                 >
//                   {completeTechniqueList.map((e) => {
//                     if (selectedTactics === e.tactic) {
//                       return (
//                         <MenuItem value={[e.name, e.id]}>
//                           {e.id + " - " + e.name}
//                         </MenuItem>
//                       );
//                     }
//                   })}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <span>&nbsp;&nbsp;&nbsp;</span>
//             <Grid item xs={12} md={12}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleAddTechnique}
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
