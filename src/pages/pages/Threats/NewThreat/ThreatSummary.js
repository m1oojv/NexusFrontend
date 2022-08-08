// import {
//   Grid,
//   Divider as MuiDivider,
//   Typography,
//   TextField,
//   CardContent,
//   Breadcrumbs as MuiBreadcrumbs,
//   Box,
// } from "@material-ui/core";

// import { useState } from "react";
// import { useForm, Controller } from "react-hook-form";

// import AddField from "../Components/AddField";

// const defaultValues = {
//   title: "",
//   desription: "",
//   industry: "",
//   business: "",
//   actor: "",
//   vector: "",
// };

// export default function ThreatSummary() {
//   const {
//     handleSubmit,
//     formState: { errors },
//     control,
//     setValue,
//   } = useForm();

//   const [open, setOpen] = useState(false);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleDelete = () => {
//     console.info("You clicked the delete icon.");
//   };

//   return (
//     <form>
//       <CardContent>
//         <Box>
//           <Grid container spacing={6}>
//             <Grid item xs={12}>
//               <Typography variant="body2">Scenario Title</Typography>
//               <Controller
//                 control={control}
//                 name="title"
//                 defaultValue={""}
//                 render={({ field: { onChange, value }, formState }) => (
//                   <TextField
//                     style={{ width: "100%" }}
//                     value={value}
//                     variant="outlined"
//                     size="medium"
//                     error={!!formState.errors?.title}
//                     onChange={({ target: { value } }) => {
//                       setValue("title", value);
//                       onChange(value);
//                     }}
//                   />
//                 )}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Typography variant="body2">Description</Typography>
//               <TextField
//                 style={{ width: "100%" }}
//                 //value={value}
//                 variant="outlined"
//                 size="medium"
//                 multiline
//                 rows={4}
//                 // error={!!formState.errors?.firstName}
//                 // onChange={({ target: { value } }) => {
//                 //   setValue("firstName", value);
//                 //   onChange(value);
//                 // }}
//               />
//               <Typography variant="body2" style={{ color: "gray" }}>
//                 Maximum 500 characters
//               </Typography>
//             </Grid>

//             <Grid item xs={12}>
//               <AddField type="Industry" />
//             </Grid>
//           </Grid>
//         </Box>
//       </CardContent>
//     </form>
//   );
// }
