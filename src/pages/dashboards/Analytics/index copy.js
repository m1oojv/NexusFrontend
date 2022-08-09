// import React from "react";
// import styled, { withTheme } from "styled-components/macro";

// import { Helmet } from "react-helmet";

// import {
//   Grid,
//   Divider as MuiDivider,
//   Typography as MuiTypography,
// } from "@material-ui/core";

// import { green, red } from "@material-ui/core/colors";

// import { spacing } from "@material-ui/system";

// import Actions from "./Actions";
// import BarChart from "./BarChart";
// import DoughnutChart from "./DoughnutChart";
// import LanguagesTable from "./LanguagesTable";
// import Stats from "./Stats";
// import TrafficTable from "./TrafficTable";
// import WorldMap from "./WorldMap";

// const Divider = styled(MuiDivider)(spacing);

// const Typography = styled(MuiTypography)(spacing);

// function Analytics({ theme }) {
//   return (
//     <React.Fragment>
//       <Helmet title="Overview" />
//       <Grid justify="space-between" container spacing={6}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom>
//             Overview
//           </Typography>
//           <Typography variant="subtitle1">
//             Welcome back, Lucy! We've missed you.{" "}
//             <span role="img" aria-label="Waving Hand Sign">
//               👋
//             </span>
//           </Typography>
//         </Grid>

//         <Grid item>
//           <Actions />
//         </Grid>
//       </Grid>

//       <Divider my={6} />

//       <Grid container spacing={6}>
//         <Grid item xs={12} lg={6}>
//           <Grid container spacing={6}>
//             <Grid item xs={12} sm={12} md={12}>
//               <Stats
//                 title="Current Score"
//                 amount="2.3"
//                 chip="Today"
//                 percentageText="+14%"
//                 percentagecolor={green[500]}
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item xs={12} lg={6}>
//           <Grid container spacing={6}>
//             <Grid item xs={12} sm={12} md={6}>
//               <Stats
//                 title="Post Investment Score"
//                 amount="63.200"
//                 chip="Annual"
//                 percentageText="-12%"
//                 percentagecolor={red[500]}
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>

//       <Grid container spacing={6}>
//         <Grid item xs={12} lg={8}>
//           <WorldMap />
//         </Grid>
//         <Grid item xs={12} lg={4}>
//           <DoughnutChart />
//         </Grid>
//       </Grid>
//       <Grid container spacing={6}>
//         <Grid item xs={12} lg={4}>
//           <LanguagesTable />
//         </Grid>
//         <Grid item xs={12} lg={8}>
//           <TrafficTable />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default withTheme(Analytics);
