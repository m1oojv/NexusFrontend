// import React from "react";
// import styled, { withTheme } from "styled-components/macro";
// import "../../../../node_modules/react-vis/dist/style.css";
// import { NavLink } from "react-router-dom";
// import { AutoSizer } from "react-virtualized";
// import services from "../../../api/services/services.js";
// import { useQuery } from "react-query";

// import {
//   XYPlot,
//   XAxis,
//   YAxis,
//   VerticalGridLines,
//   HorizontalGridLines,
//   MarkSeries,
//   Crosshair,
//   Hint,
// } from "react-vis";

// import {
//   CardContent,
//   Card as MuiCard,
//   Typography,
//   Grid,
//   Link,
// } from "@material-ui/core";
// import { spacing } from "@material-ui/system";

// const Card = styled(MuiCard)(spacing);

// const Spacer = styled.div(spacing);

// function createData(x, y, name) {
//   return {
//     x,
//     y,
//     size: x,
//     name,
//   };
// }

// export default function Example(props) {
//   const [value, setValue] = React.useState({
//     x: "0",
//     y: "0",
//     size: "0",
//     name: "",
//   });
//   const [mouseOver, setMouseOver] = React.useState(false);

//   const {
//     data = {
//       data: {
//         companyName: "",
//         premium: "",
//         assessmentProgress: "",
//         lastAssessed: "",
//         risk: "",
//         description: "",
//         id: "",
//       },
//     },
//   } = useQuery("fetchVendors", () => services.getinsuredcompanies());
//   let vendors = [];
//   Array.from(data.data).map((row) => {
//     vendors.push(createData(row.risk, row.premium, row.companyName));
//   });
//   const handleMouseEnter = (event) => {
//     setMouseOver(true);
//   };
//   const handleMouseLeave = (event) => {
//     setMouseOver(false);
//   };
//   const handleNearestX = (event) => {
//     setValue({
//       x: event.x,
//       y: event.y,
//       size: event.size,
//       name: event.name,
//     });
//   };
//   return (
//     <Card mb={1}>
//       <CardContent>
//         <Grid container alignItems="center" spacing={2}>
//           <Grid item>
//             <Typography variant="body2" gutterBottom>
//               <b>Cyber Investments Distribution</b>
//             </Typography>
//           </Grid>
//         </Grid>
//         <Spacer mb={6} />
//         <div style={{ flex: "1 1 auto", height: "27vh" }}>
//           <AutoSizer>
//             {({ width }) => (
//               <XYPlot
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//                 width={width}
//                 height={250}
//                 margin={{ left: 50 }}
//               >
//                 <HorizontalGridLines />
//                 <XAxis
//                   title="Risk Reduced ($M)"
//                   position="middle"
//                   style={{
//                     text: { stroke: "none", fill: "#C8C8C8" },
//                   }}
//                 />
//                 <YAxis
//                   title="Investment Cost ($M)"
//                   position="start"
//                   style={{
//                     text: { stroke: "none", fill: "#C8C8C8" },
//                   }}
//                 />
//                 <MarkSeries
//                   onNearestX={handleNearestX}
//                   className="mark-series-example"
//                   strokeWidth={2}
//                   opacity="0.6"
//                   sizeRange={[5, 15]}
//                   data={[
//                     { x: 8, y: 1.2, size: 3, name: "Data Loss Protection" },
//                     { x: 9.4, y: 2.2, size: 5, name: "Network Segmentation" },
//                     { x: 6.6, y: 0.7, size: 5, name: "EDR Deployment" },
//                     { x: 5.4, y: 1.5, size: 5, name: "Asset Refresh" },
//                   ]}
//                 />
//                 <MarkSeries
//                   data={[
//                     { x: 0, y: 0, size: 0 },
//                     { x: 10, y: 3, size: 0 },
//                   ]}
//                   style={{ display: "none" }}
//                 />
//                 {mouseOver && (
//                   <Hint value={value}>
//                     <div style={{ background: "black", fontSize: 12 }}>
//                       <Link to="/vendors">
//                         <b>{value.name}</b>
//                       </Link>
//                       <p style={{ margin: 0 }}>
//                         Resiliency: {"$" + value.x + "M"}
//                       </p>
//                       <p style={{ margin: 0 }}>
//                         Criticality: {"$" + value.y + "M"}
//                       </p>
//                     </div>
//                   </Hint>
//                 )}
//               </XYPlot>
//             )}
//           </AutoSizer>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
