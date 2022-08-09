import React from "react";

import { Box } from "@material-ui/core";

function Item({ value }) {
  return (
    <Box fontWeight="fontWeightBold" color="#696969" flexGrow={1} flexBasis={0}>
      {value}
    </Box>
  );
}

export default Item;
