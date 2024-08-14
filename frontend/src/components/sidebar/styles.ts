import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => ({
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "30px 15px",
    cursor: "pointer",
  },
  navItem: {
    "&:hover": {
      backgroundImage:
        "linear-gradient(45deg, #1900d5 30%, #5300e8 90%) !important",
      transition: "background-color 0.3s, transform 0.6s",
      "&:hover": {
        backgroundColor: "#5300e8",
        transform: "scale(1.05)",
      },
      "&:active": {
        backgroundColor: "#3e00a6",
        transform: "scale(1)",
      },
      borderRadius: "6px",
      color: "#fff",
    },
  },
}));
