// import React, { useEffect } from "react";
// import styled, { withTheme } from "styled-components/macro";
// import services from "../../../../api/services/services.js";
// import { NavLink, useLocation } from "react-router-dom";
// import { useQuery } from "react-query";

// import { Helmet } from "react-helmet";

// import {
//   CardContent,
//   Grid,
//   Link,
//   Chip as MuiChip,
//   Breadcrumbs as MuiBreadcrumbs,
//   Card as MuiCard,
//   Divider as MuiDivider,
//   Paper as MuiPaper,
//   TextField as MuiTextField,
//   Typography as MuiTypography,
// } from "@material-ui/core";

// import { red, orange, green } from "@material-ui/core/colors";

// import { spacing } from "@material-ui/system";
// import queryString from "query-string";

// import NavTabs from "./NavTabs";
// import ReactCountryFlag from "react-country-flag";

// const DEFAULT_QUERY = "redux";

// const Card = styled(MuiCard)(spacing);

// const Chip = styled(MuiChip)(spacing);

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

// const TextFieldSpacing = styled(MuiTextField)(spacing);

// const ScoreChip = styled(MuiChip)`
//   spacing: 120;
//   font-size: 90%;
//   background-color: ${(props) => props.rgbcolor};
//   color: ${(props) => props.theme.palette.common.white};
// `;

// const Divider = styled(MuiDivider)(spacing);

// const Typography = styled(MuiTypography)(spacing);

// function determineColor(number) {
//   if (number >= 3) return green[500];
//   else if (number >= 1) return orange[500];
//   else if (number > 0) return red[500];
//   else return null;
// }

// function determineAssessColor(value) {
//   if (value == "Completed") return green[500];
//   else if (value == "In Progress") return orange[500];
//   else if (value == "Not Started") return red[500];
//   else return null;
// }

// function Details({ companyDetails }) {
//   let code = "SG";
//   if (companyDetails.country == "United States") code = "US";
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
//             <Typography component="div" variant="body1" gutterBottom>
//               {"$" + parseInt(companyDetails.financials.risk).toLocaleString()}
//             </Typography>
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
//               <b>Premium</b>
//             </Typography>
//             <Typography component="div" variant="body1" gutterBottom>
//               {"$" +
//                 parseInt(companyDetails.financials.premium).toLocaleString()}
//             </Typography>
//           </Grid>
//           <Grid item xs={3} sm={3} md={3} lg={3}>
//             <Typography variant="body2" gutterBottom>
//               <b>Limit</b>
//             </Typography>
//             <Typography component="div" variant="body1" gutterBottom>
//               {"$" + parseInt(companyDetails.financials.limit).toLocaleString()}
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

//   const {
//     data = {
//       data: [
//         {
//           companyName: "",
//           industry: "",
//           domain: "",
//           financials: {
//             risk: "",
//             riskM1: "",
//             riskM2: "",
//             lossExceedence: {
//               data: [
//                 {
//                   x: "",
//                   y: "",
//                 },
//               ],
//             },
//             threatCategory: {
//               data: [
//                 {
//                   threatCategory: "",
//                   risk: "",
//                 },
//               ],
//             },
//           },
//         },
//       ],
//     },
//   } = useQuery("fetchCompanyDetails", () => services.getcompanydetails(value));

//   let companyDetails = data.data[0];
//   console.log("company details", companyDetails);
//   return (
//     <React.Fragment>
//       <Helmet title="Company Details" />
//       <Grid justify="space-between" container spacing={10}>
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
//           <Details companyDetails={companyDetails} />
//         </Grid>
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           <NavTabs uuid={value} companyDetails={companyDetails} />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default withTheme(InsuredDetails);
