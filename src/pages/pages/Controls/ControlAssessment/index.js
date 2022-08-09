// import React, { useState, useEffect } from "react";
// import styled, { withTheme } from "styled-components/macro";
// import { NavLink, useLocation } from "react-router-dom";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useMutation, useQuery } from "react-query";
// import services from "../../../../api/services/services.js";
// import queryString from "query-string";
// import score from "./score.json";
// import Panel from "./Panel";
// import Frameworks from "./Frameworks";
// import Nist from "./Nist";

// import Helmet from "react-helmet";
// import {
//   Grid,
//   Link,
//   Breadcrumbs as MuiBreadcrumbs,
//   Divider as MuiDivider,
//   Typography,
//   Button,
//   TextField,
//   Card,
//   CardContent,
//   Box,
//   InputAdornment,
//   Select as MuiSelect,
//   MenuItem,
// } from "@material-ui/core";

// import { spacing } from "@material-ui/system";
// import { useForm, Controller, useFieldArray } from "react-hook-form";

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

// const Divider = styled(MuiDivider)(spacing);

// const Select = styled(MuiSelect)(spacing);

// //yup validation schema
// const validationSchema = yup.object().shape({
//   controls: yup.array().of(
//     yup.object().shape({
//       maturityScore: yup
//         .number()
//         .typeError("Please select a value")
//         .required("Please enter your Maturity score"),
//       effectivenessTimelinessScore: yup
//         .string()
//         .typeError("Please select a value")
//         .required("Please enter your Effectiveness:Timeliness score"),
//       effectivenessAdaptabilityScore: yup
//         .string()
//         .typeError("Please select a value")
//         .required("Please enter your Effectiveness:Adaptability score"),
//       effectivenessRelevanceScore: yup
//         .string()
//         .typeError("Please select a value")
//         .required("Please enter your Effectiveness:Relevance score"),
//       coverageScore: yup
//         .number()
//         .typeError("Please input a number")
//         .min(0, "Please enter a value between 0 to 1")
//         .max(1, "Please enter a value between 0 to 1")
//         .required("Please enter your coverage score"),
//     })
//   ),
// });

// function NotCompleted(controls) {
//   let count = 0;
//   controls.map((item) => {
//     if (
//       item.maturityScore === "" ||
//       item.effectivenessAdaptabilityScore === "" ||
//       item.effectivenessTimelinessScore === "" ||
//       item.effectivenessRelevanceScore === "" ||
//       item.coverageScore === "" ||
//       item.maturityScore === null ||
//       item.effectivenessAdaptabilityScore === null ||
//       item.effectivenessTimelinessScore === null ||
//       item.effectivenessRelevanceScore === null ||
//       item.coverageScore === null
//     )
//       count++;
//   });
//   return count;
// }

// function SplitNewLine(text) {
//   text = text.split("\n").map((i, key) => {
//     return <div key={key}>{i}</div>;
//   });
//   return text;
// }

// function ControlAssessment() {
//   let location = useLocation();
//   let value = queryString.parse(location.search);

//   const [firstLoad, setFirstLoad] = useState([false, true]);

//   const {
//     handleSubmit,
//     formState: { errors },
//     control,
//     setValue,
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//     defaultValues: {
//       controls: [
//         {
//           maturity: "",
//           effectivenessAdaptability: "",
//           effectivenessTimeliness: "",
//           effectivenessRelevance: "",
//           coverage: "",
//           controlId: " ",
//           description: "",
//         },
//       ],
//     },
//   });

//   const { fields } = useFieldArray({
//     control,
//     name: "controls",
//   });

//   const mutation = useMutation("updateControlScore", (data) =>
//     services.updatecontrolscore(data)
//   );

//   const { data = { data: { "": "" } } } = useQuery(
//     "getControlAssessment",
//     () => services.getcontrolassessment(value),
//     {
//       onSuccess: () => {
//         firstLoad[1] && setFirstLoad([true, false]);
//       },
//     }
//   );

//   useEffect(() => {
//     firstLoad[0] && setValue("controls", Array.from(data.data));
//     firstLoad[0] && setFirstLoad([false, false]);
//   }, [data]);
//   console.log(fields);
//   const onSubmit = (data) => {
//     const submitData = data.controls.map(
//       ({
//         controlFamily,
//         maturity,
//         effectivenessTimeliness,
//         effectivenessAdaptability,
//         effectivenessRelevance,
//         coverage,
//         description,
//         nistFunction,
//         sourceFramework,
//         sourceFrameworkCode,
//         ...rest
//       }) => ({
//         uuid: value.uuid,
//         controlFamily: value.controlFamily,
//         ...rest,
//       })
//     );
//     mutation.mutate(submitData, {
//       onSuccess: () =>
//         (window.location.href = `/controls/controlassessmentfamily?uuid=${value.uuid}`),
//     });
//     console.log("submit", submitData);
//   };
//   let framework = fields
//     .map((item) => item.sourceFramework)
//     .filter((value, index, self) => self.indexOf(value) === index);
//   //prettier-ignore
//   return (
//     <React.Fragment>
//       <Helmet title="Business Units" />
//       <Grid justify="space-between" container spacing={10}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom display="inline">
//             {value.controlFamily} - Controls Assessment
//           </Typography>

//           <Breadcrumbs aria-label="Breadcrumb" mt={2}>
//             <Link
//               component={NavLink}
//               exact
//               to={"/controls/controlassessmentfamily?uuid=" + value.uuid}
//             >
//               Control Families
//             </Link>
//             <Typography>Control Assessment</Typography>
//           </Breadcrumbs>
//         </Grid>
//       </Grid>
//       <Divider my={3} />
//       <Grid container spacing={6} display="flex">
//         <Grid item xs={6} sm={6} md={6} lg={3}>
//           <Panel
//             title="Total No. of Controls"
//             value={fields.length}
//           />
//         </Grid>
//         <Grid item xs={6} sm={6} md={6} lg={3}>
//           <Nist
//             title="Controls Not Completed"
//             value={NotCompleted(fields)}
//           />
//         </Grid>
//         <Grid item xs={6} sm={6} md={12} lg={6}>
//           <Frameworks
//             title="Reference Frameworks"
//             value={framework}
//           />
//         </Grid>
//       </Grid>

//       <Divider my={3} />
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Grid container spacing={6}>
//           {Array.from(fields).map((item, index) => {
//             return (
//               <React.Fragment key={item.id}>
//               <Grid item xs={12} sm={12} md={12} lg={12}>
//                 <Card>
//                   <CardContent>
//                     <Box flexGrow={1} flexBasis={0}>
//                       <Grid container spacing={6}>
//                         <Grid item xs={12}>
//                           <Typography variant="h6">{item.controlId}</Typography>
//                           <Divider my={3} />
//                         </Grid>
//                         <Grid item xs={3}>
//                           <Typography variant="body2">
//                             <b>Control Family</b>
//                             </Typography>
//                           <Typography variant="body2">{item.controlFamily}</Typography>
//                           </Grid>
//                           <Grid item xs={3}>
//                           <Typography variant="body2">
//                             <b>Source Framework</b>
//                             </Typography>
//                           <Typography variant="body2">{item.sourceFramework}</Typography>
//                         </Grid>
//                         <Grid item xs={3}>
//                           <Typography variant="body2">
//                             <b>Framework Code</b>
//                             </Typography>
//                           <Typography variant="body2">{item.sourceFrameworkCode}</Typography>
//                           </Grid>
//                         <Grid item xs={3}>
//                           <Typography variant="body2">
//                             <b>NIST Function</b>
//                             </Typography>
//                           <Typography variant="body2">{item.nistFunction}</Typography>
//                         </Grid>
//                         <Grid item xs={12}>
//                           <Typography variant="body2">
//                             <b>Control Description</b>
//                             </Typography>
//                           <Typography variant="body2">
//                             {SplitNewLine(item.description)}
//                           </Typography>
//                         </Grid>
//                         <Grid item xs={12}>
//                           <Typography variant="body2">
//                             <b>Maturity</b>
//                           </Typography>
//                           <Typography>
//                             {SplitNewLine(item.maturity)}
//                           </Typography>
//                         </Grid>
//                         <Grid item xs={12}>
//                           <Controller
//                             control={control}
//                             name={`controls[${index}].maturityScore`}
//                             defaultValue={""}
//                             render={({ field: { onChange, value }, formState }) => (
//                               <Select
//                                 labelId={`controls[${index}].maturityScore`}
//                                 value={value}
//                                 style={{ width: "100%" }}
//                                 variant="outlined"
//                                 error={!!formState.controls?.[index]?.maturityScore}
//                                 onChange={({ target: { value } }) => {
//                                   setValue(`controls[${index}].maturityScore`, { value: value });
//                                   onChange(value);
//                                 }}
//                               >
//                                 {score.maturityFields.map((row) => (
//                                   //loop through countries to display each menu item
//                                   <MenuItem key={row} value={row}>
//                                     {row}
//                                   </MenuItem>
//                                 ))}
//                               </Select>
//                             )}
//                           />
//                           {errors.controls?.[index]?.maturityScore && <p>{errors.controls?.[index]?.maturityScore.message}</p>}
//                         </Grid>
//                         <Grid item xs={12}>
//                           <Typography variant="body2">
//                             <b>Effectivenss: Timeliness</b>
//                           </Typography>
//                           <Typography variant="body2">
//                             {SplitNewLine(item.effectivenessTimeliness)}
//                           </Typography>
//                         </Grid>
//                         <Grid item xs={12}>
//                           <Controller
//                             control={control}
//                             name={`controls[${index}].effectivenessTimelinessScore`}
//                             defaultValue={""}
//                             render={({ field: { onChange, value }, formState }) => (
//                               <Select
//                                 labelId={`controls[${index}].effectivenessTimelinessScore`}
//                                 value={value}
//                                 style={{ width: "100%" }}
//                                 variant="outlined"
//                                 error={!!formState.errors.controls?.[index]?.effectivenessTimelinessScore}
//                                 onChange={({ target: { value } }) => {
//                                   setValue(`controls[${index}].effectivenessTimelinessScore`, { value: value });
//                                   onChange(value);
//                                 }}
//                               >
//                                 {score.effectivenessFields.map((row) => (
//                                   //loop through countries to display each menu item
//                                   <MenuItem key={row} value={row}>
//                                     {row}
//                                   </MenuItem>
//                                 ))}
//                               </Select>
//                             )}
//                           />
//                         {errors.controls?.[index]?.effectivenessTimelinessScore && <p>{errors.controls?.[index]?.effectivenessTimelinessScore.message}</p>}
//                         </Grid>
//                         <Grid item xs={12}>
//                           <Typography variant="body2">
//                             <b>Effectivenss: Adaptability</b>
//                           </Typography>
//                           <Typography variant="body2">
//                             {SplitNewLine(item.effectivenessAdaptability)}
//                           </Typography>
//                         </Grid>
//                         <Grid item xs={12}>
//                           <Controller
//                             control={control}
//                             name={`controls[${index}].effectivenessAdaptabilityScore`}
//                             defaultValue={""}
//                             render={({ field: { onChange, value }, formState }) => (
//                               <Select
//                                 labelId={`controls[${index}].effectivenessAdaptabilityScore`}
//                                 value={value}
//                                 style={{ width: "100%" }}
//                                 variant="outlined"
//                                 error={!!formState.errors.controls?.[index]?.effectivenessAdaptabilityScore}
//                                 onChange={({ target: { value } }) => {
//                                   setValue(`controls[${index}].effectivenessAdaptabilityScore`, { value: value });
//                                   onChange(value);
//                                 }}
//                               >
//                                 {score.effectivenessFields.map((row) => (
//                                   //loop through countries to display each menu item
//                                   <MenuItem key={row} value={row}>
//                                     {row}
//                                   </MenuItem>
//                                 ))}
//                               </Select>
//                             )}
//                           />
//                         {errors.controls?.[index]?.effectivenessAdaptabilityScore && <p>{errors.controls?.[index]?.effectivenessAdaptabilityScore.message}</p>}
//                         </Grid>
//                         <Grid item xs={12}>
//                           <Typography variant="body2">
//                             <b>Effectivenss: Relevance</b>
//                           </Typography>
//                           <Typography variant="body2">
//                             {SplitNewLine(item.effectivenessRelevance)}
//                           </Typography>
//                         </Grid>
//                         <Grid item xs={12}>
//                           <Controller
//                             control={control}
//                             name={`controls[${index}].effectivenessRelevanceScore`}
//                             defaultValue={""}
//                             render={({ field: { onChange, value }, formState }) => (
//                               <Select
//                                 value={value}
//                                 style={{ width: "100%" }}
//                                 variant="outlined"
//                                 error={!!formState.errors.controls?.[index]?.effectivenessRelevanceScore}
//                                 onChange={({ target: { value } }) => {
//                                   setValue(`controls[${index}].effectivenessRelevanceScore`, { value: value });
//                                   onChange(value);
//                                 }}
//                               >
//                                 {score.effectivenessFields.map((row) => (
//                                   //loop through countries to display each menu item
//                                   <MenuItem key={row} value={row}>
//                                     {row}
//                                   </MenuItem>
//                                 ))}
//                               </Select>
//                             )}
//                           />
//                         {errors.controls?.[index]?.effectivenessRelevanceScore && <p>{errors.controls?.[index]?.effectivenessRelevanceScore.message}</p>}
//                         </Grid>
//                         <Grid item xs={12}>
//                           <Typography variant="body2">
//                             <b>Coverage</b>
//                           </Typography>
//                           <Typography variant="body2">
//                             {SplitNewLine(item.coverage)}
//                           </Typography>
//                         </Grid>
//                         <Grid item xs={12}>
//                           <Controller
//                             control={control}
//                             name={`controls[${index}].coverageScore`}
//                             defaultValue={""}
//                             render={({ field: { onChange, value }, formState }) => (
//                               <TextField
//                                 style={{ width: "100%" }}
//                                 value={value}
//                                 variant="outlined"
//                                 size="medium"
//                                 error={!!formState.errors.controls?.[index]?.coverageScore}
//                                 onChange={({ target: { value } }) => {
//                                   setValue(`controls[${index}].coverageScore`, value);
//                                   onChange(value);
//                                 }}
//                               />
//                             )}
//                           />
//                         {errors.controls?.[index]?.coverageScore && <p>{errors.controls?.[index]?.coverageScore.message}</p>}
//                         </Grid>
//                       </Grid>
//                     </Box>
//                   </CardContent>
//                 </Card>
//               </Grid>
//               </React.Fragment>
//             );
//           })}
//         <Grid item xs={12}>
//           <Button type="submit" variant="contained" color="primary">
//             Submit
//           </Button>
//         </Grid>
//         </Grid>
//       </form>
//     </React.Fragment>
//   );
// }

// export default withTheme(ControlAssessment);
