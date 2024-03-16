import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#00261d",
        color: "white",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        height: "100vh",
        gap: 3,
        padding: 3,
        overflowY: "hidden",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          width: "100%",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
