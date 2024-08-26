import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    brand: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "30px 15px",
      cursor: "pointer",
    },
    brandTitle: {
      color: `${
        theme.palette.mode === "dark"
          ? colors.white.DEFAULT
          : colors.black.DEFAULT
      }`,
    },
    navBlock: {
      width: "100%",
      borderBottom: `1px solid ${colors.sidebarborderColor}`,
    },
    navList: {
      marginBottom: "55px",
    },
    navItem: {
      position: "relative",
      padding: "10px 15px",
      borderRadius: "6px !important",
      color:
        theme.palette.mode === "dark"
          ? colors.white.DEFAULT
          : colors.black.DEFAULT,
      transition: "transform 0.3s ease !important",

      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "6px",
        backgroundImage:
          "linear-gradient(45deg, #1900d5 30%, #5300e8 90%) !important",
        opacity: 0,
        transition: "opacity 0.6s ease ",
        zIndex: -1,
      },

      "&:hover": {
        transform: "scale(1.05)",
        "&::before": {
          opacity: 1,
        },
        color: "#fff",
        "& .MuiSvgIcon-root": {
          color: "#fff",
        },
      },

      "&:active": {
        transform: "scale(1)",
        "&::before": {
          opacity: 0.8,
        },
      },
    },
    active: {
      backgroundImage:
        "linear-gradient(45deg, #1900d5 30%, #5300e8 90%) !important",
      backgroundColor: "#3e00a6 !important",
      color: "#fff !important",
      borderRadius: "6px !important",
      "& .MuiSvgIcon-root": {
        color: `${colors.white.DEFAULT}`,
      },
    },
  };
});
