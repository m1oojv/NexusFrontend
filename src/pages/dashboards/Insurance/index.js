// import React, { useEffect, useState } from "react";
// import styled, { withTheme } from "styled-components/macro";
// import services from "../../../api/services/services.js";
// import { useQuery } from "react-query";

// import { Helmet } from "react-helmet";

// import {
//   Grid,
//   Card as MuiCard,
//   CardContent,
//   Divider as MuiDivider,
//   Typography as MuiTypography,
// } from "@material-ui/core";

// import { green, red } from "@material-ui/core/colors";

// import { spacing } from "@material-ui/system";

// import Panel from "./Panel";
// import Panel2 from "./Panel2";
// import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";
// import Companies from "./Companies";
// import CompaniesLoss from "./CompaniesLoss";
// import SectorRisk from "./SectorRisk3";
// import LossRatio from "./LossRatio";

// const Card = styled(MuiCard)(spacing);

// const Spacer = styled.div(spacing);

// const Alert = styled(MuiAlert)(spacing);

// const DEFAULT_QUERY = "redux";

// const Divider = styled(MuiDivider)(spacing);

// const Typography = styled(MuiTypography)(spacing);

// function Insurance({ theme }) {
//   const {
//     data = {
//       data: [
//         {
//           risk: "",
//           premium: "",
//           claims: "",
//           industry: {
//             industry: "",
//             risk: "",
//             riskM1: "",
//             riskM2: "",
//             premiums: "",
//             claims: "",
//           },
//         },
//       ],
//     },
//   } = useQuery("fetchInsuranceDashboard", () =>
//     services.getinsurancedashboard()
//   );

//   let portfolio = data.data[0];

//   const [firstName, setFirstName] = useState("");
//   React.useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("userData"));
//     if (userData) {
//       setFirstName(userData.firstName);
//     }
//   }, []);

//   return (
//     <React.Fragment>
//       <Helmet title="Overview" />
//       <Grid justifyContent="space-between" container spacing={6}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom>
//             Insurance Portfolio
//           </Typography>
//           <Typography variant="subtitle1">
//             {"Welcome back, " + firstName + "! " + "We've missed you. "}
//             <span role="img" aria-label="Waving Hand Sign">
//               👋
//             </span>
//           </Typography>
//         </Grid>
//       </Grid>

//       <Divider my={6} />

//       <Grid container spacing={6}>
//         <Grid item xs={6} sm={6} md={6} lg={3}>
//           <Panel
//             title="Portfolio Risk Exposure"
//             value={portfolio.risk}
//             color="orange"
//           />
//         </Grid>
//         <Grid item xs={6} sm={6} md={6} lg={3}>
//           <Panel
//             title="Gross Written Premiums"
//             value={portfolio.premiums}
//             color="green"
//           />
//         </Grid>
//         <Grid item xs={6} sm={6} md={6} lg={3}>
//           <Panel title="Claims Dispensed" value={portfolio.claims} />
//         </Grid>
//         <Grid item xs={6} sm={6} md={6} lg={3}>
//           <Panel2
//             title="Loss Ratio"
//             value={portfolio.claims / portfolio.premiums}
//           />
//         </Grid>
//       </Grid>
//       <Grid container spacing={6}>
//         <Grid item xs={12} sm={12} md={12} lg={6}>
//           <SectorRisk sectorDetails={portfolio.industry} />
//         </Grid>
//         <Grid item xs={12} sm={12} md={12} lg={6}>
//           <LossRatio sectorDetails={portfolio.industry} />
//         </Grid>
//         <Grid item xs={12} sm={12} md={12} lg={6}>
//           <Companies />
//         </Grid>
//         <Grid item xs={12} sm={12} md={12} lg={6}>
//           <CompaniesLoss />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default withTheme(Insurance);
