// import React from "react";
// import styled, { withTheme } from "styled-components/macro";
// import services from "../../../../api/services/services.js";
// import { useQuery } from "react-query";

// import {
//   Card as MuiCard,
//   CardContent as MuiCardContent,
//   Grid,
//   Typography,
// } from "@material-ui/core";

// import { spacing } from "@material-ui/system";

// import TableChart from "@material-ui/icons/TableChart";

// import { ResponsiveLine } from "@nivo/line";

// const Card = styled(MuiCard)(spacing);

// const CardContent = styled(MuiCardContent)`
//   &:last-child {
//     padding-bottom: ${(props) => props.theme.spacing(4)}px;
//   }
// `;

// const theme = {
//   axis: {
//     fontSize: "14px",
//     tickColor: "#FFF",
//     ticks: {
//       line: {
//         stroke: "#696969",
//       },
//       text: {
//         fill: "#696969",
//       },
//     },
//   },
//   grid: {
//     line: {
//       stroke: "#f2f0f0",
//     },
//   },
// };

// const LossChart = (props) => {
//   const firstDatasetColor = props.theme.palette.secondary.main;
//   /*const {
//     data = {
//       data: [
//         {
//           loss_exceedence: "0",
//           loss_distribution: "0",
//           percentile: "0",
//         },
//       ],
//     },
//   } = useQuery("getLossSimulation", () => services.getlosssimulation());
//   console.log("test", data.data);
//   let realData = Array.from(data.data);*/
//   let chartData = [
//     {
//       id: "Loss Exceedence",
//       color: { firstDatasetColor },
//       data: props.lossExceedence,
//     },
//   ];
//   return (
//     <Card mb={3}>
//       <CardContent>
//         <Grid container alignItems="center" spacing={2}>
//           <Grid item>
//             <TableChart />
//           </Grid>
//           <Grid item>
//             <Typography variant="h6" gutterBottom>
//               Loss Exceedence
//             </Typography>
//           </Grid>
//         </Grid>
//         <div style={{ height: 400 }}>
//           <ResponsiveLine
//             data={chartData}
//             margin={{ top: 20, right: 50, bottom: 50, left: 60 }}
//             xScale={{
//               type: "linear",
//               min: "auto",
//               max: "auto",
//               stacked: true,
//               reverse: false,
//             }}
//             xFormat=" >-.2f"
//             yScale={{
//               type: "linear",
//               min: "auto",
//               max: "auto",
//               stacked: true,
//               reverse: false,
//             }}
//             yFormat=" >-.2f"
//             curve="natural"
//             axisTop={null}
//             axisRight={null}
//             axisBottom={{
//               orient: "bottom",
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 0,
//               legend: "Risk ($)",
//               legendOffset: 36,
//               legendPosition: "middle",
//             }}
//             axisLeft={{
//               orient: "left",
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 0,
//               legend: "Probability of Loss Greater Than",
//               legendOffset: -40,
//               legendPosition: "middle",
//             }}
//             lineWidth={3}
//             pointSize={10}
//             pointColor={{ theme: "background" }}
//             pointBorderWidth={2}
//             pointBorderColor={{ from: "serieColor" }}
//             pointLabelYOffset={-12}
//             useMesh={true}
//             theme={theme}
//             colors={firstDatasetColor}
//             enablePoints={false}
//             enableArea={true}
//             enableSlices="x"
//             sliceTooltip={({ slice }) => (
//               <div
//                 style={{
//                   padding: 12,
//                   background: "#f2f0f0",
//                 }}
//               >
//                 {slice.points.map((point) => (
//                   <div key={point.data.x}>
//                     <strong>Probability: </strong>
//                     {point.data.y}%
//                     <br />
//                     <strong>Loss: </strong>$
//                     {Math.round(point.data.x).toLocaleString()}
//                   </div>
//                 ))}
//               </div>
//             )}
//           />
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default withTheme(LossChart);
