// import React from "react";
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

// import BusinessDetails from "./BusinessDetails";

// import {
//   Box,
//   CardContent,
//   Grid,
//   Card as MuiCard,
//   Divider as MuiDivider,
//   List,
//   ListItem,
//   ListItemAvatar,
//   Avatar,
//   ListItemSecondaryAction,
//   ListItemText,
//   IconButton,
// } from "@material-ui/core";

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
// }));

// export default function AttackTimeline({
//   techniques,
//   setTechniques,
//   completeTechniqueList,
// }) {
//   const classes = useStyles();
//   const [secondary, setSecondary] = React.useState(false);

//   return (
//     <Grid container spacing={6}>
//       <Grid item xs={12} md={6}>
//         <Timeline align="alternate">
//           <TimelineItem>
//             <TimelineSeparator>
//               <TimelineDot></TimelineDot>
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent>
//               <Paper elevation={3} className={classes.paper}>
//                 <Typography
//                   variant="body1"
//                   component="h1"
//                   key={techniques[0].key}
//                 >
//                   <b>{techniques[0].killChainStage}</b>
//                 </Typography>
//                 <List dense={true}>
//                   {techniques[0].mitreTechniques.map((e) => {
//                     return e.map((f) => (
//                       <ListItem button>
//                         <ListItemText
//                           primary={f.name}
//                           secondary={secondary ? "Secondary text" : null}
//                           key={Math.floor(Math.random() * 1000)}
//                         />
//                         <ListItemSecondaryAction>
//                           <IconButton edge="end" aria-label="delete">
//                             <DeleteIcon />
//                           </IconButton>
//                         </ListItemSecondaryAction>
//                       </ListItem>
//                     ));
//                   })}
//                 </List>
//               </Paper>
//             </TimelineContent>
//           </TimelineItem>
//           <TimelineItem>
//             <TimelineSeparator>
//               <TimelineDot></TimelineDot>
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent>
//               <Paper elevation={3} className={classes.paper}>
//                 <Typography
//                   variant="body1"
//                   component="h1"
//                   key={techniques[1].key}
//                 >
//                   <b>{techniques[1].killChainStage}</b>
//                 </Typography>
//                 <List dense={true}>
//                   {techniques[1].mitreTechniques.map((e) => {
//                     return e.map((f) => (
//                       <ListItem button>
//                         <ListItemText
//                           primary={f.id + " - " + f.name}
//                           secondary={secondary ? "Secondary text" : null}
//                           key={Math.floor(Math.random() * 1000)}
//                         />
//                         <ListItemSecondaryAction>
//                           <IconButton edge="end" aria-label="delete">
//                             <DeleteIcon />
//                           </IconButton>
//                         </ListItemSecondaryAction>
//                       </ListItem>
//                     ));
//                   })}
//                 </List>
//               </Paper>
//             </TimelineContent>
//           </TimelineItem>
//         </Timeline>
//       </Grid>
//       <Grid item xs={12} md={6}></Grid>
//     </Grid>
//   );
// }
