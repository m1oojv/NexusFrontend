// import React from "react";
// import styled, { withTheme } from "styled-components/macro";

// import {
//   Card as MuiCard,
//   CardContent as MuiCardContent,
//   CardHeader,
//   IconButton,
// } from "@material-ui/core";

// import { spacing } from "@material-ui/system";

// import "../../../vendor/roundedBarCharts";
// import { Bar } from "react-chartjs-2";

// import { MoreVertical } from "react-feather";

// const Card = styled(MuiCard)(spacing);

// const CardContent = styled(MuiCardContent)`
//   &:last-child {
//     padding-bottom: ${(props) => props.theme.spacing(4)}px;
//   }
// `;

// const ChartWrapper = styled.div`
//   height: 325px;
//   width: 100%;
// `;

// const BarChart = (props) => {
//   const firstDatasetColor = props.theme.palette.secondary.main;
//   const secondDatasetColor =
//     props.theme.palette.type === "dark"
//       ? "rgba(255, 255, 255, 0.5)"
//       : "rgba(0, 0, 0, 0.1)";

//   const data = {
//     labels: ["Identify", "Protect", "Detect", "Respond", "Recover"],
//     datasets: [
//       {
//         label: "Current",
//         backgroundColor: firstDatasetColor,
//         borderColor: firstDatasetColor,
//         hoverBackgroundColor: firstDatasetColor,
//         hoverBorderColor: firstDatasetColor,
//         data: [
//           props.nistCurrent.identify,
//           props.nistCurrent.protect,
//           props.nistCurrent.detect,
//           props.nistCurrent.respond,
//           props.nistCurrent.recover,
//         ],
//         barPercentage: 0.75,
//         categoryPercentage: 0.5,
//       },
//       {
//         label: "Post Investment",
//         backgroundColor: secondDatasetColor,
//         borderColor: secondDatasetColor,
//         hoverBackgroundColor: secondDatasetColor,
//         hoverBorderColor: secondDatasetColor,
//         data: [
//           props.nistPostInvestment.identify,
//           props.nistPostInvestment.protect,
//           props.nistPostInvestment.detect,
//           props.nistPostInvestment.respond,
//           props.nistPostInvestment.recover,
//         ],
//         barPercentage: 0.75,
//         categoryPercentage: 0.5,
//       },
//     ],
//   };

//   const options = {
//     maintainAspectRatio: false,
//     cornerRadius: 2,
//     legend: {
//       display: true,
//     },
//     scales: {
//       yAxes: [
//         {
//           gridLines: {
//             display: false,
//           },
//           stacked: false,
//           ticks: {
//             stepSize: 20,
//             fontColor: props.theme.palette.text.secondary,
//           },
//         },
//       ],
//       xAxes: [
//         {
//           stacked: false,
//           gridLines: {
//             color: "transparent",
//           },
//           ticks: {
//             fontColor: props.theme.palette.text.secondary,
//           },
//         },
//       ],
//     },
//   };

//   return (
//     <Card mb={3}>
//       <CardHeader
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertical />
//           </IconButton>
//         }
//         title="Performance Breakdown by NIST Function"
//       />
//       <CardContent>
//         <ChartWrapper>
//           <Bar data={data} options={options} />
//         </ChartWrapper>
//       </CardContent>
//     </Card>
//   );
// };

// export default withTheme(BarChart);
