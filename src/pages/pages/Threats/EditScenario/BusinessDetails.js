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
// import Industries from "./industries.json";

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

// export default function BusinessDetails({
//   businessDetails,
//   setBusinessDetails,
//   industry,
//   setIndustry,
// }) {
//   const classes = useStyles();
//   const [addBusinessDetails, setAddBusinessDetails] = useState({
//     key: Math.floor(Math.random() * 1000),
//     businessUnit: "",
//     businessImpact: "",
//   });
//   /*
//   const [industry, setIndustry] = useState([
//     {
//       key: Math.floor(Math.random() * 1000),
//       industry: "",
//     },
//   ]);*/
//   const [addIndustries, setAddIndustries] = useState({
//     key: Math.floor(Math.random() * 1000),
//     industry: "",
//   });

//   const handleDelete = (data) => () => {
//     setBusinessDetails(businessDetails.filter((item) => item.key !== data.key));
//   };

//   const handleIndustryDelete = (data) => () => {
//     setIndustry(industry.filter((item) => item.key !== data.key));
//   };

//   const handleChangeBusinessUnit = (event) => {
//     setAddBusinessDetails({
//       ...addBusinessDetails,
//       businessUnit: event.target.value,
//       key: Math.floor(Math.random() * 1000),
//     });
//   };
//   const handleChangeBusinessImpact = (event) => {
//     setAddBusinessDetails({
//       ...addBusinessDetails,
//       businessImpact: event.target.value,
//       key: Math.floor(Math.random() * 1000),
//     });
//   };
//   const handleChangeIndustry = (event) => {
//     setAddIndustries({
//       ...addIndustries,
//       industry: event.target.value,
//       key: Math.floor(Math.random() * 1000),
//     });
//   };
//   const handleAdd = (event) => {
//     let add = true;
//     businessDetails.map((e) => {
//       if (
//         (addBusinessDetails.businessUnit == e.businessUnit &&
//           addBusinessDetails.businessImpact == e.businessImpact) ||
//         addBusinessDetails.key == e.key ||
//         addBusinessDetails.businessUnit == " " ||
//         addBusinessDetails.businessImpact == " " ||
//         addBusinessDetails.businessUnit == 0 ||
//         addBusinessDetails.businessImpact == 0
//       )
//         add = false;
//     });
//     if (add == true)
//       setBusinessDetails([...businessDetails, addBusinessDetails]);
//   };
//   const handleAddIndustry = (event) => {
//     let add = true;
//     industry.map((e) => {
//       if (
//         addIndustries.industry == e.industry ||
//         addIndustries.key == e.key ||
//         addIndustries.industry == " " ||
//         addIndustries.industry == 0
//       )
//         add = false;
//     });
//     if (add == true) setIndustry([...industry, addIndustries]);
//     console.log(industry);
//   };

//   //industries for drop down list
//   const industries = Industries.industries.sort();

//   return (
//     <Card mb={6}>
//       <CardContent>
//         <Grid item xs={12} md={6} container spacing={6}>
//           <Grid item xs={12} md={12}>
//             <Divider my={3} />
//             <Typography variant="h6" gutterBottom>
//               Add Business Details
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <Typography variant="h6" gutterBottom>
//               Business Unit | Business Impact
//             </Typography>
//             <span>&nbsp;&nbsp;&nbsp;</span>
//             <div>
//               {businessDetails.map((data) => {
//                 return (
//                   <Chip
//                     key={data.key}
//                     label={data.businessUnit + " | " + data.businessImpact}
//                     onDelete={handleDelete(data)}
//                     m={1}
//                   />
//                 );
//               })}
//             </div>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <Divider my={3} />
//             <FormControl className={classes.formControl} m={2}>
//               <InputLabel id="threat-actor-select-label">
//                 Add Business Unit
//               </InputLabel>
//               <Select
//                 labelId="business-unit-select-label"
//                 id="business-unit-select"
//                 value={addBusinessDetails.businessUnit}
//                 onClick={handleChangeBusinessUnit}
//               >
//                 <MenuItem value="Global Banking">Global Banking</MenuItem>
//                 <MenuItem value="Transactional Banking">
//                   Transactional Banking
//                 </MenuItem>
//                 <MenuItem value="Private Banking">Private Banking</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item>
//             <FormControl className={classes.formControl} m={2}>
//               <InputLabel id="threat-vector-select-label">
//                 Add Business Impact
//               </InputLabel>
//               <Select
//                 labelId="threat-vector-select-label"
//                 id="threat-vector-select"
//                 value={addBusinessDetails.businessImpact}
//                 onClick={handleChangeBusinessImpact}
//               >
//                 <MenuItem value="Loss of Client Services">
//                   Loss of Client Services
//                 </MenuItem>
//                 <MenuItem value="Loss of Funds">Loss of Funds</MenuItem>
//                 <MenuItem value="Loss of Confidential Data">
//                   Loss of Confidential Data
//                 </MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <Button variant="contained" color="primary" onClick={handleAdd}>
//               Add
//             </Button>
//           </Grid>
//         </Grid>
//         <Grid item xs={12} md={6} container spacing={6}>
//           <Grid item xs={12} md={12}>
//             <Divider my={3} />
//             <Typography variant="h6" gutterBottom>
//               Add Industries
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <Typography variant="h6" gutterBottom>
//               Industries
//             </Typography>
//             <span>&nbsp;&nbsp;&nbsp;</span>
//             <div>
//               {industry.map((data) => {
//                 return (
//                   <Chip
//                     key={data.key}
//                     label={data.industry}
//                     onDelete={handleIndustryDelete(data)}
//                     m={1}
//                   />
//                 );
//               })}
//             </div>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <FormControl className={classes.formControl} m={2}>
//               <InputLabel id="threat-vector-select-label">
//                 Add Industry
//               </InputLabel>
//               <Select
//                 labelId="threat-vector-select-label"
//                 id="threat-vector-select"
//                 value={addIndustries.industry}
//                 onClick={handleChangeIndustry}
//               >
//                 {industries.map((industry) => (
//                   //loop through industries to display each menu item
//                   <MenuItem key={industry} value={industry}>
//                     {industry}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} md={12}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleAddIndustry}
//             >
//               Add
//             </Button>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }
