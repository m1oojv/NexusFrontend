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

// import { ResponsiveAreaBump } from "@nivo/bump";

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

// function createData(industry, risk, riskM1, riskM2) {
//   return {
//     id: industry,
//     data: [
//       {
//         x: "Jun",
//         y: riskM2,
//       },
//       {
//         x: "Jul",
//         y: riskM1,
//       },
//       {
//         x: "Aug",
//         y: risk,
//       },
//     ],
//   };
// }

// const SectorRisk = (props) => {
//   const firstDatasetColor = props.theme.palette.secondary.main;
//   //let data = Array.from(props.sectorDetails);
//   let data = [];
//   Array.from(props.sectorDetails).map((row) => {
//     data.push(createData(row.industry, row.risk, row.riskM1, row.riskM2));
//   });
//   console.log("test", data);
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
//   //data = data.sort((a, b) => a.risk - b.risk);
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
//           <ResponsiveAreaBump
//             data={data}
//             margin={{ top: 0, right: 20, bottom: 0, left: 100 }}
//             spacing={8}
//             colors={{ scheme: "nivo" }}
//             blendMode="multiply"
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
//             fill={[
//               {
//                 match: {
//                   id: "CoffeeScript",
//                 },
//                 id: "dots",
//               },
//               {
//                 match: {
//                   id: "TypeScript",
//                 },
//                 id: "lines",
//               },
//             ]}
//             startLabel="id"
//             axisTop={{
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 0,
//               legend: "",
//               legendPosition: "middle",
//               legendOffset: -36,
//             }}
//             axisBottom={{
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 0,
//               legend: "",
//               legendPosition: "middle",
//               legendOffset: 32,
//             }}
//             theme={theme}
//             tooltip={({ serie }) => (
//               <div
//                 style={{
//                   padding: 12,
//                   background: "#222222",
//                 }}
//               >
//                 <strong>{serie.points.data.y}</strong>
//               </div>
//             )}
//           />
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default withTheme(SectorRisk);
