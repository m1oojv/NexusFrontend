// import React from "react";
// import styled from "styled-components/macro";

// import {
//   Box,
//   Card as MuiCard,
//   CardContent as MuiCardContent,
//   Chip as MuiChip,
//   Typography as MuiTypography,
//   Button,
// } from "@material-ui/core";

// import { spacing } from "@material-ui/system";

// const Card = styled(MuiCard)(spacing);

// const Typography = styled(MuiTypography)(spacing);

// const CardContent = styled(MuiCardContent)`
//   position: relative;

//   &:last-child {
//     padding-bottom: ${(props) => props.theme.spacing(4)}px;
//   }
// `;

// const AddNew = ({ title, value }) => {
//   return (
//     <Card mb={3} style={{ height: "93%" }}>
//       <CardContent>
//         <Typography variant="body2" mb={3} align="center">
//           <b>{title}</b>
//         </Typography>
//         <Typography variant="h6" mb={3} align="center" component="div">
//           <Box fontWeight="fontWeightRegular">
//             {value.map((item) => {
//               return `${item} | `;
//             })}
//           </Box>
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default AddNew;
