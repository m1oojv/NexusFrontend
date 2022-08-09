// import {
//   Grid,
//   Button,
//   Breadcrumbs as MuiBreadcrumbs,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Chip,
//   Typography,
// } from "@material-ui/core";

// import { useState } from "react";
// import { Plus } from "react-feather";
// import Industries from "../NewThreat/industries.json"; //import industry menu options json file
// import IndustryDialogContent from "./IndustryDialogContent";

// function AddField(props) {
//   const industries = Industries.industries; //get industry options from json file
//   const [open, setOpen] = useState(false);

//   function chooseDialogContent() {
//     if (props.type === "Industry") {
//       return (
//         <IndustryDialogContent
//           text="Select the industry from the dropdown below."
//           data={industries}
//         />
//       );
//     }
//   }

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   return (
//     <Grid container spacing={3}>
//       <Grid item xs={2}>
//         <Typography variant="body2">{props.type}</Typography>
//       </Grid>
//       <Grid item xs={12}>
//         <Chip icon={<Plus />} label="Add" onClick={handleOpen} />
//         <Dialog open={open} onClose={handleClose} fullWidth={true}>
//           <DialogTitle>{props.title}</DialogTitle>
//           <DialogContent>{chooseDialogContent(props)}</DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}>Close</Button>
//             <Button onClick={handleClose}>Add</Button>
//           </DialogActions>
//         </Dialog>
//       </Grid>
//     </Grid>
//   );
// }

// export default AddField;
