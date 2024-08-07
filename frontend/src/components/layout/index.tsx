import { ILayout } from "../../common/types/layout";
import React, { useState } from "react";
import TopBarComponent from "../top-bar";
import { useLocation } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import SideBarComponent from "../sidebar";
import { useStyles } from "./styles";

const LayoutComponent = ({ children }: ILayout) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const isNotMobile = useMediaQuery("(min-width:600px)");
  const classes = useStyles();

  return location.pathname === "/login" || location.pathname === "/register" ? (
    <>{children}</>
  ) : (
    <>
      <Box
        display={isNotMobile ? "flex" : "block"}
        justifyContent="space-between"
        width="100%"
        height="100%"
      >
        <SideBarComponent
          isNotMobile={isNotMobile}
          drawerWidth="250"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Box className={classes.mainSection}>
          <TopBarComponent />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default LayoutComponent;
