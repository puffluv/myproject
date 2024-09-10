import React, { FC, useContext } from "react";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useAppSelector } from "../../utils/hook";
import { ColorModeContext } from "../../theme";
import { LightMode, DarkMode, Search, MenuOutlined } from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useStyles } from "./styles";
import FlexBetween from "../flex-between";
import { ITopbarProps } from "../../common/types/topbar";

const TopBarComponent: FC<ITopbarProps> = (
  props: ITopbarProps
): JSX.Element => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const classes = useStyles();
  const { setIsOpen, isOpen } = props;
  const { user } = useAppSelector((state) => state.auth.user);

  const handleColorModeToggle = () => {
    setTimeout(() => {
      colorMode.toggleColorMode();
    }, 200); // Duration of the animation
  };

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolbar}>
        <FlexBetween>
          <MenuOutlined
            className={classes.menuIcon}
            onClick={() => setIsOpen(!isOpen)}
          />
          <Typography variant="h6">
            ДОБРО ПОЖАЛОВАТЬ, {sessionStorage.getItem("name")}
          </Typography>
        </FlexBetween>

        <Box display="flex">
          <Grid className={classes.iconBlock}>
            <IconButton
              onClick={handleColorModeToggle}
              className={classes.iconButton}
            >
              <Box className={classes.iconBackground} />
              {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
            </IconButton>
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
          </Grid>
          <Grid className={classes.searchBlock}>
            <IconButton className={classes.searchIcon}>
              <Search />
            </IconButton>
            <InputBase className={classes.searchInput} placeholder="Поиск" />
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBarComponent;
