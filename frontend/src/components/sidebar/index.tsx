import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import {
  Box,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  colors,
} from "@mui/material";
import { ChevronLeftOutlined, LogoutOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "../flex-between";
import { navMenu } from "../../common/moks/navigate";
import { tokens } from "../../theme";
import Logo from "../../assets/images/sidebar/logo.svg";

const SideBarComponent = (props: any) => {
  const [active, setActive] = useState("");
  const { isNotMobile, drawerWidth, isOpen, setIsOpen } = props;
  const classes = useStyles();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const renderNavMenu = navMenu.map((element): JSX.Element => {
    return (
      <ListItem key={element.id}>
        <ListItemButton
          onClick={() => navigate(`${element.path}`)}
          className={classes.navItem}
        >
          <ListItemIcon>{element.icon}</ListItemIcon>
          <ListItemText>
            <Typography variant={"body1"}>
              {element.name.toUpperCase()}
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    );
  });

  return (
    <Box component="nav">
      {isOpen && (
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.primary.main,
              transition: "background-color 1s ease-in-out",
              boxSizing: "border-box",
            },
          }}
        >
          <Box
            width="100%"
            sx={{ borderBottom: `1px solid ${colors.sidebarborderColor}` }}
          >
            <Box>
              <FlexBetween>
                <Box className={classes.brand}>
                  <img src={Logo} alt="Logo image" />
                  <Typography
                    variant="h1"
                    color={
                      theme.palette.mode === "dark"
                        ? colors.white.DEFAULT
                        : colors.black.DEFAULT
                    }
                  >
                    Myproject
                  </Typography>
                </Box>
                {!isNotMobile && (
                  <IconButton onClick={() => setIsOpen(!isOpen)}>
                    <ChevronLeftOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>

            <List
              sx={{
                marginBottom: "55px",
              }}
            >
              {renderNavMenu}
            </List>
          </Box>
          <Box width="100%">
            <List>
              <ListItem>
                <ListItemButton className={classes.navItem}>
                  <ListItemIcon>
                    <LogoutOutlined />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>Выйти</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SideBarComponent;
