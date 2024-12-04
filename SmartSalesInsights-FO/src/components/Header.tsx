import React, { useState } from "react";
import { AppBar, Grid, IconButton, InputBase, Menu, MenuItem, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
    handleMenuClose();
  };

  const handleLogoutClick = () => {
    console.log("Logout clicked");
    handleMenuClose();
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
        {/* Section de recherche */}
        <Grid
          container
          alignItems="center"
          sx={{
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            padding: "4px 10px",
            width: "40%",
          }}
        >
          <SearchIcon sx={{ color: "#6b7280" }} />
          <InputBase
            placeholder="Search topics"
            sx={{
              marginLeft: "10px",
              color: "#4a4a4a",
              flex: 1,
            }}
          />
        </Grid>

        {/* Bouton de menu hamburger */}
        <IconButton
          onClick={handleMenuOpen}
          sx={{
            backgroundColor: "#f9f9f9",
            "&:hover": {
              backgroundColor: "#f2f2f2",
            },
          }}
        >
          <MenuIcon sx={{ color: "#253053" }} />
        </IconButton>

        {/* Menu déroulant */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{
            "& .MuiMenu-paper": {
              backgroundColor: "secondary.main", // Utilise la couleur secondaire du thème
              color: "#fff", // Texte en blanc
            },
          }}
        >
          <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
          <MenuItem onClick={handleLogoutClick}>Log out </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
