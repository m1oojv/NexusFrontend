// import React from "react";
// import styled, { withTheme } from "styled-components/macro";
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

// const RiskTrend = (props) => {
//   const firstDatasetColor = props.theme.palette.secondary.main;
//   let data = [
//     {
//       id: "Risk",
//       data: [
//         {
//           x: "Jun",
//           y: parseInt(props.financials.riskM2),
//         },
//         {
//           x: "Jul",
//           y: parseInt(props.financials.riskM1),
//         },
//         {
//           x: "Aug",
//           y: parseInt(props.financials.risk),
//         },
//       ],
//     },
//   ];
//   console.log(parseInt(props.financials.risk).toLocaleString());
//   return (
//     <Card mb={3}>
//       <CardContent>
//         <Grid container alignItems="center" spacing={2}>
//           <Grid item>
//             <TableChart />
//           </Grid>
//           <Grid item>
//             <Typography variant="h6" gutterBottom>
//               Risk Exposure (Last 3 Months)
//             </Typography>
//           </Grid>
//         </Grid>
//         <div style={{ height: 300 }}>
//           <ResponsiveLine
//             data={data}
//             margin={{ top: 20, right: 50, bottom: 50, left: 60 }}
//             xScale={{ type: "point" }}
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
//               legend: "Month",
//               legendOffset: 36,
//               legendPosition: "middle",
//             }}
//             axisLeft={{
//               orient: "left",
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 0,
//               legend: "Risk ($)",
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
//             enablePoints={true}
//             enableGridY={false}
//             enableArea={false}
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
//                     <strong>{point.data.x}</strong>
//                     <br />
//                     <strong>Risk: </strong>${point.data.y.toLocaleString()}
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

// export default withTheme(RiskTrend);
