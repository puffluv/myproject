import { Box, Grid, Icon, IconButton, InputBase, useTheme } from "@mui/material";
import { useAppSelector } from "../../utils/hook";
import React, { useContext } from "react"
import { ColorModeContext, tokens } from "../../theme";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useStyles } from "./styles";


const TopBarComponent = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    const { user } = useAppSelector((state) => state.auth.user)

  return (
    <div>
      <Box display='flex' justifyContent="space-between" px="32px" py="24px">
        <Grid>ДОБРО ПОЖАЛОВАТЬ, {user ? user.firstName.toUpperCase() : ''}</Grid>
        <Box display='flex'>
            <Grid onClick={colorMode.toggleColorMode} sx={{pr: '38px', borderRight: `1px solid ${colors.borderColor}`}}>
                <IconButton sx={{mr: '45px'}}>
                    {theme.palette.mode === 'dark' ? (<DarkModeIcon />) : (<LightModeIcon />)}
                </IconButton>
                <IconButton>
                    <NotificationsNoneIcon />
                </IconButton>
            </Grid>
            <Grid sx={{
                display: 'flex',
                backgroundColor: `${colors.primary[600]}`,
                borderRadius: '9px',
                ml: '28px'
            }}
            >
                <IconButton className={classes.searchBlock}>
                    <SearchIcon />
                </IconButton>
                <InputBase className={classes.searchInput} sx={{px: '18px', py: '8px'}} placeholder="Поиск"/>
            </Grid>
        </Box>
      </Box>
    </div>
  )
};

export default TopBarComponent;
