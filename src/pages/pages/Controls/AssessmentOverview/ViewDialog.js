// import * as React from "react";
// import { useHistory } from "react-router-dom";
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   CircularProgress,
//   Box,
// } from "@material-ui/core";

// import Threats from "./Threats";
// import Exposure from "./Exposure";

// export default function ViewDialog({
//   completion,
//   name,
//   assessmentUuid,
//   companyUuid,
//   scanResults,
// }) {
//   const [open, setOpen] = React.useState(false);
//   let isCompleted = completion == 1;
//   const history = useHistory();

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleControlsClick = () => {
//     history.push(`/controls/controlassessmentfamily?uuid=${assessmentUuid}`);
//   };

//   return isCompleted ? (
//     name == "Controls Assessment" ? (
//       <div>
//         <Button variant="contained" color="primary" onClick={handleClickOpen}>
//           Verify
//         </Button>
//         <Dialog
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title">
//             {"Do you want to verify the assessment?"}
//           </DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-description">
//               Click here to verify
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}>Disagree</Button>
//             <Button onClick={handleClose} autoFocus>
//               Agree
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     ) : name == "Threats Assessment" ? (
//       <div>
//         <Button variant="contained" color="primary" onClick={handleClickOpen}>
//           View
//         </Button>
//         <Dialog
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title">
//             <Threats uuid={companyUuid} />
//           </DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-description">
//               Click here to close
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}>Close</Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     ) : name == "Exposure Assessment" ? (
//       <div>
//         <Button variant="contained" color="primary" onClick={handleClickOpen}>
//           View
//         </Button>
//         <Dialog
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title">
//             {"Exposure Findings"}
//           </DialogTitle>
//           <DialogContent>
//             <Exposure scanResults={scanResults} />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}>Close</Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     ) : null
//   ) : name == "Controls Assessment" ? (
//     <Button variant="contained" color="primary" onClick={handleControlsClick}>
//       Start
//     </Button>
//   ) : name == "Threats Assessment" ? (
//     <Box sx={{ display: "flex" }}>
//       <CircularProgress />
//     </Box>
//   ) : name == "Exposure Assessment" ? (
//     <Box sx={{ display: "flex" }}>
//       <CircularProgress />
//     </Box>
//   ) : null;
// }
