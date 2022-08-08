// import React, { useEffect } from "react";
// import styled, { withTheme } from "styled-components/macro";
// import services from "../../../api/services/services.js";

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
// import ThreatEvents from "./ThreatEvents";
// import Stats from "./Stats";
// import TrafficTable from "./TrafficTable";
// import WorldMap from "./WorldMap";
// import LineChart from "./LineChart";
// import ScoreTrending from "./ScoreTrending";
// import ThirdParty from "./ThirdParty";

// const DEFAULT_QUERY = "redux";

// const Divider = styled(MuiDivider)(spacing);

// const Typography = styled(MuiTypography)(spacing);

// function Analytics({ theme }) {
//   const [userSelect, setUserSelect] = React.useState({
//     BU: "Global Banking",
//     BI: "Loss of Funds",
//     currentScore: [""],
//     postInvestmentScore: "",
//     nistCurrent: {
//       identify: "",
//       protect: "",
//       detect: "",
//       respond: "",
//       recover: "",
//     },
//     nistPostInvestment: {
//       identify: "",
//       protect: "",
//       detect: "",
//       respond: "",
//       recover: "",
//     },
//     controlScore: [],
//     threatScenario: [],
//   });

//   useEffect(() => {
//     const body = {
//       BusinessUnit: userSelect.BU,
//       BusinessImpact: userSelect.BI,
//     };
//     services
//       .getcurrentscore(body)
//       .then((response) => {
//         setUserSelect({
//           ...userSelect,
//           currentScore: response.data[0],
//           postInvestmentScore: response.data[1],
//           nistCurrent: {
//             identify: response.data[2][0][0],
//             protect: response.data[2][3][0],
//             detect: response.data[2][4][0],
//             respond: response.data[2][7][0],
//             recover: response.data[2][8][0],
//           },
//           nistPostInvestment: {
//             identify: response.data[2][1][0],
//             protect: response.data[2][2][0],
//             detect: response.data[2][5][0],
//             respond: response.data[2][6][0],
//             recover: response.data[2][9][0],
//           },
//           controlScore: response.data[3],
//           threatScenario: response.data[4],
//         });
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, [userSelect.BU, userSelect.BI]);

//   function addUserSelectedHandlerBU(selected) {
//     setUserSelect({ ...userSelect, BU: selected });
//   }

//   function addUserSelectedHandlerBI(selected) {
//     setUserSelect({ ...userSelect, BI: selected });
//   }

//   function calculatePercentage(current, post) {
//     return parseInt((post / current) * 100 - 100);
//   }
//   console.log("data", userSelect);

//   return (
//     <React.Fragment>
//       <Helmet title="Overview" />
//       <Grid justify="space-between" container spacing={6}>
//         <Grid item>
//           <Typography variant="h3" gutterBottom>
//             Enterprise Overview
//           </Typography>
//           <Typography variant="subtitle1">
//             Welcome back, Esther! We've missed you.{" "}
//             <span role="img" aria-label="Waving Hand Sign">
//               👋
//             </span>
//           </Typography>
//         </Grid>

//         <Grid item>
//           <Actions
//             onAddUserSelectedBU={addUserSelectedHandlerBU}
//             onAddUserSelectedBI={addUserSelectedHandlerBI}
//             BusinessUnit={userSelect.BU}
//             BusinessImpact={userSelect.BI}
//           />
//         </Grid>
//       </Grid>

//       <Divider my={6} />

//       <Grid container spacing={6}>
//         <Grid item xs={12} sm={12} md={12} lg={6}>
//           <Stats
//             title="Current"
//             title2="Post Investment"
//             amount={userSelect.currentScore}
//             amount2={userSelect.postInvestmentScore}
//             chip={userSelect.BU + " | " + userSelect.BI}
//             percentageText={
//               "+" +
//               Math.floor(
//                 ((userSelect.postInvestmentScore - userSelect.currentScore) /
//                   userSelect.currentScore) *
//                   100
//               ) +
//               "%"
//             }
//             percentagecolor={green[500]}
//           />
//         </Grid>
//         <Grid item xs={12} sm={12} md={12} lg={6}>
//           <ScoreTrending score={userSelect.currentScore[0][0]} />
//         </Grid>
//       </Grid>
//       <Grid container spacing={6}>
//         <Grid item xs={12} lg={8}>
//           <BarChart
//             nistCurrent={userSelect.nistCurrent}
//             nistPostInvestment={userSelect.nistPostInvestment}
//           />
//         </Grid>
//         <Grid item xs={12} lg={4}>
//           <ThirdParty />
//         </Grid>
//       </Grid>
//       <Grid container spacing={6}>
//         <Grid item xs={12} lg={6}>
//           <TrafficTable controlScore={userSelect.controlScore} />
//         </Grid>
//         <Grid item xs={12} lg={6}>
//           <ThreatEvents threatScenario={userSelect.threatScenario} />
//         </Grid>
//       </Grid>
//       <Grid container spacing={6}>
//         <Grid item xs={12} lg={12}>
//           <LineChart controlScore={userSelect.controlScore} />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default withTheme(Analytics);
