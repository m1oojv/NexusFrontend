// import React from "react";
// import styled, { withTheme } from "styled-components/macro";

// import {
//   CardContent,
//   Card as MuiCard,
//   Typography,
//   Divider as MuiDivider,
// } from "@material-ui/core";
// import orange from "@material-ui/core/colors/orange";
// import red from "@material-ui/core/colors/red";
// import blue from "@material-ui/core/colors/blue";
// import { spacing } from "@material-ui/system";

// import { Doughnut } from "react-chartjs-2";

// const Card = styled(MuiCard)(spacing);

// const Divider = styled(MuiDivider)(spacing);

// const Spacer = styled.div(spacing);

// const ChartWrapper = styled.div`
//   height: 300px;
// `;

// function DoughnutChart({ theme, selectedScenario }) {
//   let count = [0, 0, 0, 0, 0];
//   Array.from(selectedScenario[2]).map((control) => {
//     if (control.nistFunction == "Identify") count[0] += 1;
//     if (control.nistFunction == "Protect") count[1] += 1;
//     if (control.nistFunction == "Detect") count[2] += 1;
//     if (control.nistFunction == "Respond") count[3] += 1;
//     if (control.nistFunction == "Recover") count[4] += 1;
//   });

//   console.log(count);

//   const data = {
//     labels: ["Identify", "Protect", "Detect", "Respond", "Recover"],
//     datasets: [
//       {
//         data: count,
//         backgroundColor: [
//           theme.palette.secondary.main,
//           orange[300],
//           red[300],
//           theme.palette.grey[300],
//           blue[300],
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
//     },
//   };

//   return (
//     <Card mb={6}>
//       <CardContent>
//         <Typography variant="h5" gutterBottom>
//           Controls Overview
//         </Typography>
//         <Divider my={3} />
//         <Typography variant="body2" gutterBottom>
//           Distribution of controls across NIST cybersecurity functions in threat
//           scenario
//         </Typography>

//         <Spacer mb={6} />

//         <ChartWrapper>
//           <Doughnut data={data} options={options} />
//         </ChartWrapper>
//       </CardContent>
//     </Card>
//   );
// }

// export default withTheme(DoughnutChart);
