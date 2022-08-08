// import React, { useState, useEffect } from "react";
// import styled, { withTheme } from "styled-components/macro";
// import services from "../../../../api/services/services.js";
// import { NavLink, useLocation } from "react-router-dom";
// import { useQuery } from "react-query";
// import initialData from "./initialdata.json";

// import { Helmet } from "react-helmet";

// import {
//   CardContent,
//   Grid,
//   Link,
//   Chip as MuiChip,
//   Breadcrumbs as MuiBreadcrumbs,
//   Card as MuiCard,
//   Divider as MuiDivider,
//   TextField as MuiTextField,
//   Typography as MuiTypography,
// } from "@material-ui/core";

// import { red, orange, green } from "@material-ui/core/colors";

// import { spacing } from "@material-ui/system";
// import queryString from "query-string";

// import NavTabs from "./NavTabs";
// import AssessmentOverview from "../../Controls/AssessmentOverview";
// import ReactCountryFlag from "react-country-flag";
// import Countries from "./countries.json";

// const DEFAULT_QUERY = "redux";

// const Card = styled(MuiCard)(spacing);

// const Chip = styled(MuiChip)(spacing);

// const ScoreChip = styled(MuiChip)`
//   spacing: 120;
//   font-size: 90%;
//   background-color: ${(props) => props.rgbcolor};
//   color: ${(props) => props.theme.palette.common.white};
// `;

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

// const Divider = styled(MuiDivider)(spacing);

// const Typography = styled(MuiTypography)(spacing);

// function determineColor(number) {
//   if (number >= 3) return green[500];
//   else if (number >= 1) return orange[500];
//   else if (number > 0) return red[500];
//   else return null;
// }

// function determineAssessColor(value) {
//   if (value == "COMPLETED") return green[500];
//   else if (value == "IN PROGRESS") return orange[500];
//   else if (value == "NOT STARTED") return red[500];
//   else return null;
// }

// function checkCompleted(value) {
//   if (value == "COMPLETED") return true;
//   return false;
// }

// function DisplayAAL(props) {
//   if (props.isCompleted) {
//     return (
//       <Typography component="div" variant="body1" gutterBottom>
//         {"$" + parseInt(props.risk).toLocaleString()}
//       </Typography>
//     );
//   }
//   return (
//     <Typography component="div" variant="body1" gutterBottom>
//       <i>-</i>
//     </Typography>
//   );
// }

// function Details({ companyDetails, isCompleted }) {
//   let country = Countries.filter((country) =>
//     country.name.includes(companyDetails.country)
//   )[0];
//   let code = country.code;

//   return (
//     <Card mb={6}>
//       <CardContent>
//         <Typography variant="h5" gutterBottom>
//           Company Profile
//         </Typography>
//         <Divider my={3} />
//         <Grid container spacing={6}>
//           <Grid item xs={3} sm={3} md={3} lg={3}>
//             <Typography variant="body2" gutterBottom>
//               <b>Annualized Average Loss</b>
//             </Typography>
//             <DisplayAAL
//               isCompleted={isCompleted}
//               risk={companyDetails.financials.risk}
//             />
//           </Grid>
//           <Grid item xs={3} sm={3} md={3} lg={3}>
//             <Typography variant="body2" gutterBottom>
//               <b>Annual Revenue</b>
//             </Typography>
//             <Typography component="div" variant="body1" gutterBottom>
//               {"$" + parseInt(companyDetails.revenue).toLocaleString()}
//             </Typography>
//           </Grid>
//           <Grid item xs={3} sm={3} md={3} lg={3}>
//             <Typography variant="body2" gutterBottom>
//               <b>No. of Employees</b>
//             </Typography>
//             <Typography component="div" variant="body1" gutterBottom>
//               {parseInt(companyDetails.employees).toLocaleString()}
//             </Typography>
//           </Grid>
//           <Grid item xs={3} sm={3} md={3} lg={3}>
//             <Typography variant="body2" gutterBottom>
//               <b>Country</b>
//             </Typography>
//             <Grid container alignItems="center" spacing={2}>
//               <Grid item>
//                 <ReactCountryFlag
//                   countryCode={code}
//                   style={{
//                     fontSize: "2em",
//                   }}
//                 />
//               </Grid>
//               <Grid item>
//                 <Typography component="div" variant="body1" gutterBottom>
//                   {companyDetails.country}
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid item xs={3} sm={3} md={3} lg={3}>
//             <Typography variant="body2" gutterBottom>
//               <b>Sector</b>
//             </Typography>
//             <Typography component="div" variant="body1" gutterBottom>
//               <Chip
//                 label={companyDetails.industry}
//                 key={companyDetails.industry}
//               />
//             </Typography>
//           </Grid>
//           <Grid item xs={3} sm={3} md={3} lg={3}>
//             <Typography variant="body2" gutterBottom>
//               <b>Domain</b>
//             </Typography>
//             <Grid container alignItems="center" spacing={2}>
//               <Typography component="div" variant="body1" gutterBottom>
//                 <Chip
//                   label={companyDetails.domain}
//                   key={companyDetails.domain}
//                 />
//               </Typography>
//             </Grid>
//           </Grid>
//           <Grid item xs={3} sm={3} md={3} lg={3}>
//             <Typography variant="body2" gutterBottom>
//               <b>Assessment Status</b>
//             </Typography>
//             <Grid container alignItems="center" spacing={2}>
//               <Typography component="div" variant="body1" gutterBottom>
//                 <ScoreChip
//                   label={companyDetails.assessmentProgress}
//                   key={companyDetails.assessmentProgress}
//                   rgbcolor={determineAssessColor(
//                     companyDetails.assessmentProgress
//                   )}
//                 />
//               </Typography>
//             </Grid>
//           </Grid>
//           <Grid item xs={3} sm={3} md={3} lg={3}>
//             <Typography variant="body2" gutterBottom>
//               <b>Records Held</b>
//             </Typography>
//             <Typography component="div" variant="body1" gutterBottom>
//               {companyDetails.pii.toLocaleString()}
//             </Typography>
//           </Grid>
//         </Grid>
//         <span>&nbsp;&nbsp;</span>
//       </CardContent>
//     </Card>
//   );
// }

// function InsuredDetails({ theme }) {
//   let location = useLocation();
//   let value = queryString.parse(location.search);
//   console.log(value);
//   let isCompleted = false;
//   const {
//     data = {
//       data: initialData,
//     },
//   } = useQuery("fetchCompanyDetails", () => services.getcompanydetails(value));

//   let companyDetails = data.data[0];
//   console.log(companyDetails);
//   isCompleted = checkCompleted(companyDetails.assessmentProgress);

//   console.log("company details", companyDetails, isCompleted);
//   return (
//     <React.Fragment>
//       <Helmet title="Company Details" />
//       <Grid justifyContent="space-between" container spacing={10}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom display="inline">
//             {companyDetails.companyName}
//           </Typography>
//           <Breadcrumbs aria-label="Breadcrumb" mt={2}>
//             <Link component={NavLink} exact to="/insured">
//               Companies
//             </Link>
//             <Typography>{companyDetails.companyName}</Typography>
//           </Breadcrumbs>
//         </Grid>
//       </Grid>

//       <Divider my={6} />

//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           <Details companyDetails={companyDetails} isCompleted={isCompleted} />
//         </Grid>
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           {isCompleted ? (
//             <NavTabs
//               uuid={value}
//               companyDetails={companyDetails}
//               isCompleted={isCompleted}
//             />
//           ) : null}
//           {!isCompleted ? (
//             <AssessmentOverview companyDetails={companyDetails} />
//           ) : null}
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default withTheme(InsuredDetails);
