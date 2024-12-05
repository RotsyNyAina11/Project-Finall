import React, { useState } from "react";
import { AppBar, Grid, IconButton, InputBase, Toolbar, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

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
    setDialogOpen(true);
    handleMenuClose();
  }

  const handleConfirmLogout = async () => {
    console.log("Logout clicked");

    const token = localStorage.getItem("access_token");
    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    try{
      const token = localStorage.getItem("access_token");
      if(token ) {
              await axios.post('http://localhost:3000/auth/logout',  { token }, { headers: { Authorization: `Bearer ${token}`}});
        localStorage.removeItem('access_token');
        navigate("/login");
      }
    } catch(error){
      console.error("Logout error", error);
    }

    setDialogOpen(false);
  };

  const handleCancelLogout = () => {
    setDialogOpen(false);
  }

  return (
    <>
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

        
        {/* Menu de profil et déconnexion */}
        <div>
          <IconButton
            onClick={handleMenuOpen}
            sx={{
              backgroundColor: "#f9f9f9",
              "&:hover": {
                backgroundColor: "#f2f2f2",
              },
            }}
          >
            <AccountCircleIcon sx={{ color: "#253053" }} />
          </IconButton>

          {/* Menu contextuel */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>

    {/* Boite de dialogue de confirmation */}
    <Dialog
      open={dialogOpen}
      onClose={handleCancelLogout}
    >
      <DialogTitle>Confirmer la déconnexion</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Voulez-vous vraiment vous déconnecter ?
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={handleCancelLogout}
          color="primary"
        >
          Annuler
        </Button>
        <Button
          onClick={handleConfirmLogout}
          color="primary"
          variant="contained"
        >
          Confirmer
        </Button>
      </DialogActions>
    </Dialog>


    </>
  );
};

export default Header;
