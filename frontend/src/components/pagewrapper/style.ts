import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    wrapper: {
      transition: "background-color 1s ease-in-out",
      minHeight: "100vh",
      backgroundColor: theme.palette.background.default,
    },
  };
});
