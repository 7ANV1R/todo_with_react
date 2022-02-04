import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton } from "@mui/material";

function Header() {
  return (
    <>
    <CssBaseline/>
    <AppBar position="relative">
      <Toolbar>
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" style={{fill: "white"}}/>
      </IconButton>
      <Typography variant="h6">Todo</Typography>
      </Toolbar>
    </AppBar>
    </>
    // <div className="header">
    //   <IconButton>
    //     <PersonIcon fontSize="large" className="header__icon" />
    //   </IconButton>

    //   <img
    //     className="header__logo"
    //     src="https://www.nexuslab.net/Logo.png"
    //     alt=""
    //   />

    //   <IconButton>
    //     <ForumIcon fontSize="large" className="header__icon" />
    //   </IconButton>
    // </div>
  );
}

export default Header;
