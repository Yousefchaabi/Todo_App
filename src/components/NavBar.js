import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Navbar() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#7b00fa" }}>
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ textAlign: "center" }}
            >
              TO-DO App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
