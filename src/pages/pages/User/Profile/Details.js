import React from "react";

import { Box } from "@material-ui/core";

function Details({ value }) {
  return (
    <Box flexGrow={1} flexBasis={0} color="#000">
      {value}
    </Box>
  );
}

export default Details;
