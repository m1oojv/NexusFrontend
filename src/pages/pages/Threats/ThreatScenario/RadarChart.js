// import React from "react";
// import styled, { withTheme } from "styled-components/macro";

// import {
//   CardContent,
//   Card as MuiCard,
//   Typography,
//   Divider as MuiDivider,
// } from "@material-ui/core";
// import orange from "@material-ui/core/colors/orange";
// import grey from "@material-ui/core/colors/grey";
// import { lighten } from "@material-ui/core/styles/colorManipulator";
// import { spacing } from "@material-ui/system";

// import { Radar } from "react-chartjs-2";

// const Divider = styled(MuiDivider)(spacing);

// const Card = styled(MuiCard)(spacing);

// const Spacer = styled.div(spacing);

// const ChartWrapper = styled.div`
//   height: 300px;
// `;

// function RadarChart({ theme, selectedScenario, vendorName }) {
//   let currentScore = [];
//   let PIScore = [];
//   if (
//     selectedScenario[0] != undefined &&
//     selectedScenario[1] != undefined &&
//     selectedScenario[2] != undefined &&
//     selectedScenario[3] != undefined &&
//     selectedScenario[4] != undefined
//   ) {
//     currentScore = [
//       selectedScenario[0][0],
//       selectedScenario[1][0],
//       selectedScenario[2][0],
//       selectedScenario[3][0],
//       selectedScenario[4][0],
//     ];
//   }

//   const data = {
//     labels: ["Identify", "Protect", "Detect", "Respond", "Recover"],
//     datasets: [
//       {
//         label: "Vendor Resiliency Score",
//         backgroundColor: lighten(theme.palette.secondary.main, 0.33),
//         borderColor: theme.palette.secondary.main,
//         pointBackgroundColor: theme.palette.secondary.main,
//         pointBorderColor: "#fff",
//         pointHoverBackgroundColor: "#fff",
//         pointHoverBorderColor: theme.palette.secondary.main,
//         data: currentScore,
//       },
//     ],
//   };

//   const options = {
//     maintainAspectRatio: false,
//     scale: {
//       gridLines: {
//         color: grey[800],
//       },
//       angleLines: {
//         color: grey[800],
//       },
//       ticks: {
//         beginAtZero: true,
//         max: 1,
//         min: 0,
//       },
//     },
//   };

//   return (
//     <Card mb={6}>
//       <CardContent>
//         <Typography variant="h6" gutterBottom>
//           Breakdown by NIST Cybersecurity Functions
//         </Typography>
//         <Divider my={3} />
//         <Typography variant="body2" gutterBottom>
//           Resiliency scores for each NIST cybersecurity function
//         </Typography>

//         <Spacer mb={6} />

//         <ChartWrapper>
//           <Radar data={data} options={options} />
//         </ChartWrapper>
//       </CardContent>
//     </Card>
//   );
// }

// export default withTheme(RadarChart);
