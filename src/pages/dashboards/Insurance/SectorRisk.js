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
//     tickColor: "#eee",
//     ticks: {
//       line: {
//         stroke: "#555555",
//       },
//       text: {
//         fill: "#ffffff",
//       },
//     },
//     legend: {
//       text: {
//         fill: "#aaaaaa",
//       },
//     },
//   },
//   grid: {
//     line: {
//       stroke: "#555555",
//     },
//   },
// };

// const SectorRisk = (props) => {
//   const firstDatasetColor = props.theme.palette.secondary.main;
//   let data = Array.from(props.sectorDetails);
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
//   data = data.sort((a, b) => a.risk - b.risk);
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
//         <div style={{ height: 300 }}>
//           <ResponsiveBar
//             data={data}
//             keys={["risk"]}
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
//             label={(d) => `${"$" + parseInt(d.value).toLocaleString()}`}
//             labelSkipWidth={9}
//             labelSkipHeight={12}
//             labelTextColor="#ffffff"
//             theme={theme}
//             tooltip={({ value, indexValue }) => (
//               <div
//                 style={{
//                   padding: 12,
//                   background: "#222222",
//                 }}
//               >
//                 <strong>{indexValue}</strong>
//                 <br />
//                 Risk: ${parseInt(value).toLocaleString()}
//               </div>
//             )}
//           />
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default withTheme(SectorRisk);
