import React, { useContext } from "react";
import { Box, Grid, IconButton, InputBase, useTheme } from "@mui/material";
import { useAppSelector } from "../../utils/hook";
import { ColorModeContext } from "../../theme";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useStyles } from "./styles";

const TopBarComponent = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const classes = useStyles();
  const { user } = useAppSelector((state) => state.auth.user);
  console.log(user);

  const handleColorModeToggle = () => {
    setTimeout(() => {
      colorMode.toggleColorMode();
    }, 200); // Duration of the animation
  };

  return (
    <Box className={classes.root}>
      <Grid>
        ДОБРО ПОЖАЛОВАТЬ,{" "}
        {user?.firstName ? user.firstName.toUpperCase() : "ГОСТЬ"}
      </Grid>
      <Box display="flex">
        <Grid className={classes.iconBlock}>
          <IconButton
            onClick={handleColorModeToggle}
            className={classes.iconButton}
          >
            <Box className={classes.iconBackground} />
            {theme.palette.mode === "dark" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
        </Grid>
        <Grid className={classes.searchBlock}>
          <IconButton className={classes.searchIcon}>
            <SearchIcon />
          </IconButton>
          <InputBase className={classes.searchInput} placeholder="Поиск" />
        </Grid>
      </Box>
    </Box>
  );
};

export default TopBarComponent;
