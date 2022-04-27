import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import AccountCircle from "@mui/icons-material/AccountCircle";

import { Avatar, Button, Link } from "@mui/material";
import { clientContext } from "../context/ClientContext";
import { Logout } from "@mui/icons-material";

const NavBar = () => {
  const data = React.useContext(clientContext);
  const { authWithGoogle, user, logout } = data;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navbar">
          <Link to="/">
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Главная
            </Button>
          </Link>
          <Link to="/admin-panel/add">
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              О нас
            </Button>
          </Link>
          <Link to="/admin-panel">
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Продукция
            </Button>
          </Link>
          <Link to="/admin-panel/add">
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Гарантия
            </Button>
          </Link>
          <Link to="/admin-panel/add">
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Контакты
            </Button>
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {user ? (
              <>
                <Avatar
                  src={user.photoURL}
                  alt={user.displayName}
                  style={{ marginLeft: 10 }}
                />

                <Button>
                  <Logout color="error" onClick={logout} />
                </Button>
              </>
            ) : (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls=""
                aria-haspopup="true"
                color="inherit"
                onClick={authWithGoogle}
              >
                <AccountCircle />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
