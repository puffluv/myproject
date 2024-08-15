import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    root: {
      background: `${colors.primary.DEFAULT} !important`,
      position: "static",
      transition: "background-color 1.5s ease-in-out !important",
      borderBottom: `1px solid ${colors.sidebarborderColor}`,
      boxShadow: "none !important",
    },

    searchBlock: {
      display: "flex",
      maxHeight: "45px",
      borderRadius: 9,
      marginLeft: 28,
      backgroundColor: `${colors.primary[600]}`,
    },
    searchIcon: {
      position: "relative",
      overflow: "hidden",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    searchInput: {
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      color: theme.palette.text.primary,
      padding: "12px 12px",
    },

    menuIcon: {
      marginRight: "10px",
      cursor: "pointer",
    },

    toolbar: {
      justifyContent: "space-between",
      padding: "25px 45px",
    },

    iconBlock: {
      paddingRight: "38px",
      paddingTop: "10px",
      borderRight: `1px solid ${colors.sidebarborderColor}`,
    },
    iconButton: {
      position: "relative",
      mr: "45px",
      overflow: "hidden",
      "& .MuiIconButton-root": {
        overflow: "hidden",
      },
    },
    iconBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      transform: "scale(0)",
      transition:
        "transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
      borderRadius: "50%",
      backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#000",
    },
    animateBackground: {
      transition: "background-color 1s ease-in-out",
      backgroundColor: theme.palette.mode === "dark" ? "#000" : "#fff",
    },
  };
});
