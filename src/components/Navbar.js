import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#060D2A" }}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              color: "white",
              alignContent: "center",
              alignItems: "center",
              textDecoration: 'none',
            }}
          >
            <a href="/" style={{textDecoration: 'none', color: '#fff'}}>Utube Channel Analyser</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
