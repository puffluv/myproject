import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => ({
  searchBlock: {
    position: "relative",
    overflow: "hidden",
  },
  searchInput: {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    color: theme.palette.text.primary,
  },
  iconButton: {
    position: "relative",
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
    transition: "transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
    borderRadius: "50%",
  },
  animateBackground: {
    transition: "background-color 1s ease-in-out",
    backgroundColor: theme.palette.mode === "dark" ? "#000" : "#fff",
  },
}));
