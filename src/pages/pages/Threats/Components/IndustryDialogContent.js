// import React from "react";

// import { DialogContentText, Select, MenuItem } from "@material-ui/core";

// import { useForm, Controller } from "react-hook-form";

// function IndustryDialogContent(props) {
//   const {
//     handleSubmit,
//     formState: { errors },
//     control,
//     setValue,
//   } = useForm({
//     // resolver: yupResolver(schema),
//   });

//   return (
//     <React.Fragment>
//       <form>
//         <DialogContentText>
//           Select the industry from the dropdown below.
//         </DialogContentText>
//         <Controller
//           control={control}
//           name="industry"
//           defaultValue={""}
//           render={({ field: { onChange, value }, formState }) => (
//             <Select
//               labelId="countries"
//               value={value || ""}
//               style={{ width: "100%" }}
//               variant="outlined"
//               // error={!!formState.errors?.countries}
//               onChange={({ target: { value } }) => {
//                 setValue("industry", { value: value });
//                 onChange(value);
//               }}
//             >
//               {props.data.map((industry) => (
//                 //loop through industries to display each menu item
//                 <MenuItem key={industry} value={industry}>
//                   {industry}
//                 </MenuItem>
//               ))}
//             </Select>
//           )}
//         />
//       </form>
//     </React.Fragment>
//   );
// }

// export default IndustryDialogContent;
