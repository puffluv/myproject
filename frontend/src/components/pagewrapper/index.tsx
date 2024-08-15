import React, { useEffect, ReactNode } from "react";
import { useTheme } from "@mui/material";
import { useStyles } from "./style";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme.palette.background.default]);

  return <div className={classes.wrapper}>{children}</div>;
};

export default PageWrapper;
