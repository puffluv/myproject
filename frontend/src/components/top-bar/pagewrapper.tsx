import React, { useEffect, ReactNode } from "react";
import { useTheme, Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

interface PageWrapperProps {
  children: ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      transition: "background-color 1s ease-in-out",
      minHeight: "100vh",
      backgroundColor: theme.palette.background.default,
    },
  })
);

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme.palette.background.default]);

  return <div className={classes.wrapper}>{children}</div>;
};

export default PageWrapper;
