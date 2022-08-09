// import React from "react";
// import styled from "styled-components/macro";

// import { Button as MuiButton, Menu, MenuItem } from "@material-ui/core";

// import {
//   Loop as LoopIcon,
//   FilterList as FilterListIcon,
// } from "@material-ui/icons";

// import { spacing } from "@material-ui/system";

// const Button = styled(MuiButton)(spacing);

// const SmallButton = styled(Button)`
//   padding: 5px;
//   min-width: 0;
//   svg {
//     width: 0.9em;
//     height: 0.9em;
//   }
// `;

// function Actions(props) {
//   let options = ["x", "y", "z"];

//   const [anchorEl, setAnchorEl] = React.useState({
//     BU: false,
//     BI: false,
//   });

//   const handleClick = (event) => {
//     setAnchorEl({ ...anchorEl, BU: event.currentTarget });
//   };

//   const handleClose = (option) => {
//     setAnchorEl({ ...anchorEl, BU: false });
//   };

//   return (
//     <React.Fragment>
//       <Button
//         variant="contained"
//         color="secondary"
//         aria-owns={anchorEl ? "simple-menu" : undefined}
//         aria-haspopup="true"
//         onClick={handleClick}
//         style={{ position: "relative", marginTop: "5%" }}
//       >
//         Kill Chain Stage
//       </Button>
//       <Menu id="simple-menu" anchorEl={anchorEl.BU} open={Boolean(anchorEl.BU)}>
//         {options.map((option) => (
//           <MenuItem key={option} onClick={() => handleClose(option)}>
//             {option}
//           </MenuItem>
//         ))}
//       </Menu>
//     </React.Fragment>
//   );
// }

// export default Actions;
