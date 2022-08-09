// import React from "react";
// import styled, { withTheme } from "styled-components/macro";

// import {
//   Card as MuiCard,
//   CardContent as MuiCardContent,
//   Grid,
//   Typography,
// } from "@material-ui/core";

// import orange from "@material-ui/core/colors/orange";
// import red from "@material-ui/core/colors/red";
// import blue from "@material-ui/core/colors/blue";

// import { spacing } from "@material-ui/system";

// import { Doughnut } from "react-chartjs-2";

// const Card = styled(MuiCard)(spacing);

// const Spacer = styled.div(spacing);

// const CardContent = styled(MuiCardContent)`
//   &:last-child {
//     padding-bottom: ${(props) => props.theme.spacing(4)}px;
//   }
// `;

// const ChartWrapper = styled.div`
//   height: 300px;
// `;

// const SectorRisk = ({ theme, sectorDetails }) => {
//   let industry = [];
//   let risk = [];
//   Array.from(sectorDetails).map((row) => {
//     industry.push(row.industry);
//     risk.push(row.risk);
//   });
//   console.log("test", industry);

//   const data = {
//     labels: industry,
//     datasets: [
//       {
//         data: risk,
//         backgroundColor: [
//           red[300],
//           theme.palette.grey[500],
//           theme.palette.secondary.main,
//           orange[300],
//         ],
//         borderColor: "transparent",
//       },
//     ],
//   };

//   const options = {
//     maintainAspectRatio: false,
//     cutoutPercentage: 65,
//     legend: {
//       display: true,
//       fontColor: "#FFF",
//     },
//     tooltips: {
//       callbacks: {
//         label: function (tooltipItem, data) {
//           var index = tooltipItem.index;
//           var currentValue =
//             data.datasets[tooltipItem.datasetIndex].data[index];
//           var total = 0;
//           data.datasets.forEach(function (el) {
//             total = total + el.data[index];
//           });
//           return "$" + parseInt(currentValue).toLocaleString();
//         },
//         title: function (tooltipItem, data) {
//           return data.labels[tooltipItem[0].index];
//         },
//       },
//     },
//   };

//   return (
//     <Card mb={1}>
//       <CardContent>
//         <Grid container alignItems="center" spacing={2}>
//           <Grid item>
//             <Typography variant="body2" gutterBottom>
//               <b>Risk Exposure by Sector</b>
//             </Typography>
//           </Grid>
//         </Grid>
//         <Spacer mb={6} />
//         <ChartWrapper>
//           <Doughnut data={data} options={options} />
//         </ChartWrapper>
//       </CardContent>
//     </Card>
//   );
// };

// export default withTheme(SectorRisk);
