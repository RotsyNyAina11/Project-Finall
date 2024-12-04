import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import HistoryIcon from '@mui/icons-material/History';


const SideMenu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "0px",
        width: "260px",
        height: "100vh",
        backgroundColor: "#253053", // Couleur de fond
        alignItems: "center", // Centrer horizontalement
        justifyContent: "flex-start", // Aligner en haut
        paddingTop: "20px", // Ajout d'un padding supérieur
        gap: 2, // Espacement entre les éléments
        boxShadow: "2px 0px 10px rgba(0,0,0,0.1)", // Ajout d'une ombre
      }}
    >
      {/* Titre */}
      <Typography
        variant="h6"
        sx={{
          color: "#ffffff",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Menu
      </Typography>

      {/* Boutons */}
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DashboardIcon />}
        sx={{
          width: "90%",
          justifyContent: "flex-start",
          backgroundColor: "#3C4A6B", // Couleur des boutons
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#4B5A7D",
          },
        }}
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<ShoppingCartIcon />}
        sx={{
          width: "90%",
          justifyContent: "flex-start",
          backgroundColor: "#3C4A6B",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#4B5A7D",
          },
        }}
        onClick={() => navigate("/products")}
      >
        Products
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<PeopleIcon />}
        sx={{
          width: "90%",
          justifyContent: "flex-start",
          backgroundColor: "#3C4A6B",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#4B5A7D",
          },
        }}
        onClick={() => navigate("/users")}
      >
        Users
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<HistoryIcon />}
        sx={{
          width: "90%",
          justifyContent: "flex-start",
          backgroundColor: "#3C4A6B",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#4B5A7D",
          },
        }}
        onClick={() => navigate("/history")}
      >
        History
      </Button>
    </Box>
  );
};


export default SideMenu;
