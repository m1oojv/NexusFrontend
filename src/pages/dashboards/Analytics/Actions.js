// import React from "react";
// import styled from "styled-components/macro";

// import { Button as MuiButton, Menu, MenuItem, Select } from "@material-ui/core";

// import {
//   Loop as LoopIcon,
//   FilterList as FilterListIcon,
// } from "@material-ui/icons";

// import { spacing } from "@material-ui/system";

// const Button = styled(MuiButton)(spacing);

// const SmallButton = styled(Button)`
//   padding: 4px;
//   min-width: 0;
//   svg {
//     width: 0.9em;
//     height: 0.9em;
//   }
// `;

// let BusinessImpactOptions = [
//   "Loss of Funds",
//   "Loss of Confidential Data",
//   "Loss of Client Services",
// ];

// let options = [
//   "Global Banking",
//   "Transactional Banking",
//   "Private Banking",
//   "Investment Banking",
//   "Commercial Banking",
// ];

// function Actions(props) {
//   const [anchorEl, setAnchorEl] = React.useState({
//     BU: false,
//     BI: false,
//   });

//   const handleClick = (event) => {
//     setAnchorEl({ ...anchorEl, BU: event.currentTarget });
//   };

//   const handleClose = (option) => {
//     setAnchorEl({ ...anchorEl, BU: false });
//     props.onAddUserSelectedBU(option);
//   };

//   const handleClick2 = (event) => {
//     setAnchorEl({ ...anchorEl, BI: event.currentTarget });
//   };

//   const handleClose2 = (option) => {
//     setAnchorEl({ ...anchorEl, BI: false });
//     props.onAddUserSelectedBI(option);
//   };

//   return (
//     <React.Fragment>
//       <SmallButton size="small" mr={2}>
//         <LoopIcon />
//       </SmallButton>
//       <Button
//         variant="contained"
//         color="secondary"
//         aria-owns={anchorEl ? "simple-menu" : undefined}
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         Business Unit: {props.BusinessUnit}
//       </Button>
//       <Menu id="simple-menu" anchorEl={anchorEl.BU} open={Boolean(anchorEl.BU)}>
//         {options.map((option) => (
//           <MenuItem key={option} onClick={() => handleClose(option)}>
//             {option}
//           </MenuItem>
//         ))}
//       </Menu>
//       &nbsp;&nbsp;&nbsp;&nbsp;
//       <Button
//         variant="contained"
//         color="secondary"
//         aria-owns={anchorEl.BI ? "simple-menu" : undefined}
//         aria-haspopup="true"
//         onClick={handleClick2}
//       >
//         Business Impact: {props.BusinessImpact}
//       </Button>
//       <Menu id="simple-menu" anchorEl={anchorEl.BI} open={Boolean(anchorEl.BI)}>
//         {BusinessImpactOptions.map((BusinessImpactOption) => (
//           <MenuItem
//             key={BusinessImpactOption}
//             onClick={() => handleClose2(BusinessImpactOption)}
//           >
//             {BusinessImpactOption}
//           </MenuItem>
//         ))}
//       </Menu>
//     </React.Fragment>
//   );
// }

// export default Actions;
