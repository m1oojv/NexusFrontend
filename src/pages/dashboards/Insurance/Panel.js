// import React from "react";
// import styled from "styled-components/macro";

// import {
//   Box,
//   Card as MuiCard,
//   CardContent as MuiCardContent,
//   Chip as MuiChip,
//   Typography as MuiTypography,
// } from "@material-ui/core";

// import { spacing } from "@material-ui/system";

// import { red, orange, green } from "@material-ui/core/colors";

// const Card = styled(MuiCard)(spacing);

// const Typography = styled(MuiTypography)(spacing);

// const CardContent = styled(MuiCardContent)`
//   position: relative;

//   &:last-child {
//     padding-bottom: ${(props) => props.theme.spacing(4)}px;
//   }
// `;

// const Chip = styled(MuiChip)`
//   position: absolute;
//   top: 16px;
//   right: 16px;
//   height: 20px;
//   padding: 4px 0;
//   font-size: 85%;
//   background-color: ${(props) => props.theme.palette.secondary.main};
//   color: ${(props) => props.theme.palette.common.white};
//   margin-bottom: ${(props) => props.theme.spacing(4)}px;

//   span {
//     padding-left: ${(props) => props.theme.spacing(2)}px;
//     padding-right: ${(props) => props.theme.spacing(2)}px;
//   }
// `;

// function determineColor(number) {
//   if (number >= 100) return red[500];
//   else if (number > 70 && number < 100) return orange[500];
//   else if (number < 45) return green[500];
//   else return orange[500];
// }

// const Panel = ({ title, value, color }) => {
//   return (
//     <Card mb={3}>
//       <CardContent>
//         <Typography
//           variant="body2"
//           mb={4}
//           style={{
//             textOverflow: "ellipsis",
//             display: "block",
//             overflow: "hidden",
//             maxWidth: "100%",
//             whiteSpace: "nowrap",
//           }}
//         >
//           <b>{title}</b>
//         </Typography>
//         <Typography variant="h3" mb={3} align="center">
//           <Box fontWeight="fontWeightRegular" color={color}>
//             {"$" + parseInt(value).toLocaleString()}
//           </Box>
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default Panel;
