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

// import { ResponsiveBar } from "@nivo/bar";

// const Card = styled(MuiCard)(spacing);

// const Spacer = styled.div(spacing);

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

// function createData(industry, premiums, claims) {
//   return { industry, ratio: Math.round((claims / premiums) * 100) };
// }

// const LossRatio = (props) => {
//   const firstDatasetColor = props.theme.palette.secondary.main;
//   let data = Array.from(props.sectorDetails);
//   let industries = [];
//   Array.from(props.sectorDetails).map((row) => {
//     industries.push(createData(row.industry, row.premiums, row.claims));
//   });
//   console.log(industries);
//   /*[
//     {
//       sector: "Technology",
//       risk: 259000,
//     },
//     {
//       sector: "Healthcare",
//       risk: 15000,
//     },
//     {
//       sector: "Logistics",
//       risk: 37500,
//     },
//     {
//       sector: "Professional Services",
//       risk: 25000,
//     },
//   ];*/
//   industries = industries.sort((a, b) => a.ratio - b.ratio);
//   return (
//     <Card mb={1}>
//       <CardContent>
//         <Grid container alignItems="center" spacing={2}>
//           <Grid item>
//             <Typography variant="body2" gutterBottom>
//               <b>Loss Ratio by Sector</b>
//             </Typography>
//           </Grid>
//         </Grid>
//         <Spacer mb={6} />
//         <div style={{ height: 300 }}>
//           <ResponsiveBar
//             data={industries}
//             keys={["ratio"]}
//             indexBy="industry"
//             margin={{ top: 0, right: 20, bottom: 0, left: 100 }}
//             padding={0.3}
//             layout="horizontal"
//             valueScale={{ type: "linear" }}
//             indexScale={{ type: "band", round: true }}
//             valueFormat={{ format: "", enabled: false }}
//             colors={firstDatasetColor}
//             defs={[
//               {
//                 id: "dots",
//                 type: "patternDots",
//                 background: "inherit",
//                 color: "#38bcb2",
//                 size: 4,
//                 padding: 1,
//                 stagger: true,
//               },
//               {
//                 id: "lines",
//                 type: "patternLines",
//                 background: "inherit",
//                 color: "#eed312",
//                 rotation: -45,
//                 lineWidth: 6,
//                 spacing: 10,
//               },
//             ]}
//             borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
//             axisTop={null}
//             axisRight={null}
//             axisBottom={{
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 0,
//               legend: "Risk ($M)",
//               legendPosition: "middle",
//               legendOffset: 32,
//             }}
//             axisLeft={{
//               format: (v) => {
//                 return v.length > 10 ? (
//                   <tspan>
//                     {v.substring(0, 10) + "..."}
//                     <title>{v}</title>
//                   </tspan>
//                 ) : (
//                   v
//                 );
//               },
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 0,
//               legend: "",
//               legendPosition: "middle",
//               legendOffset: -40,
//             }}
//             label={(d) => `${d.value + "%"}`}
//             labelSkipWidth={9}
//             labelSkipHeight={12}
//             labelTextColor="#ffffff"
//             theme={theme}
//             tooltip={({ value, indexValue }) => (
//               <div
//                 style={{
//                   padding: 12,
//                   background: "#f2f0f0",
//                 }}
//               >
//                 <strong>{indexValue}</strong>
//                 <br />
//                 Risk: {parseInt(value).toLocaleString()}%
//               </div>
//             )}
//           />
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default withTheme(LossRatio);
