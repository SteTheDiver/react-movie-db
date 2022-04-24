import React from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Loader() {
  return (
    <Box sx={{ display: "flex", justifyContent:"center", alignItems:"center", height:"300px", fontWeight:300 }}>
      <CircularProgress />
    </Box>
  );
}

export default Loader;
