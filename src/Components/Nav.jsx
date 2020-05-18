import React, { useState } from "react";
import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import _MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const MenuItem = styled(_MenuItem)`
  text-decoration: none;
`;

function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h5" color="default" align="center">
            Wild Circus
          </Typography>
          <IconButton
            edge="start"
            justifyContent="flex-end"
            color="inherit"
            aria-label="menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <Link to="/" onClick={handleClose}>
                  Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/booking" onClick={handleClose}>
                  Booking
                </Link>
              </MenuItem>
            </Menu>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
