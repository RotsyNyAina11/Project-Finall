import React from "react";
import ProductStockChart from "./ProductStockChart";
import ProductPerformanceChart from "./ProductPerformanceChart";
import AppPerformanceChart from "./AppPerformanceChart";
import { Grid2, Box } from "@mui/material";
import PageHeader from "../PageHeader";
import PeopleOutlineTwoToneIcon from "@mui/icons-material/PeopleOutlineTwoTone";

const ChartParent: React.FC = () => {
  const products = [
    { name: "Produit A", stockQuantity: 1000 },
    { name: "Produit B", stockQuantity: 30 },
    { name: "Produit C", stockQuantity: 70 },
    { name: "Produit D", stockQuantity: 10 },
    { name: "Produit E", stockQuantity: 50 },
    { name: "Produit F", stockQuantity: 30 },
    { name: "Produit G", stockQuantity: 70 },
    { name: "Produit H", stockQuantity: 10 },
    { name: "Produit I", stockQuantity: 50 },
    { name: "Produit J", stockQuantity: 30 },
    { name: "Produit K", stockQuantity: 70 },
    { name: "Produit L", stockQuantity: 10 },
  ];

  return (
    <>
        <PageHeader title="Chart Section" icon={<PeopleOutlineTwoToneIcon />}/>
    <Grid2
      container
      sx={{
        width: "100%", // Prend toute la largeur disponible
        height: "75vh", // 80% de la hauteur de l'écran
        display: "flex",
        flexDirection: "row", // Alignement horizontal
        justifyContent: "space-between", // Espacement uniforme entre les graphiques
        alignItems: "center", // Centrer les graphiques verticalement
        padding: "10px",
        gap: "10px", // Espacement entre les graphiques
      }}
    >
      {/* Premier graphique */}
      <Box
        sx={{
          width: "32%", // Chaque graphique occupe environ un tiers de la largeur
          height: "80%", // Adapte la hauteur à celle du conteneur
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid gray",
          padding:"10px" // Optionnel : pour délimiter chaque graphique
        }}
      >
        <ProductStockChart products={products}/>
      </Box>

      {/* Deuxième graphique */}
      <Box
        sx={{
          width: "32%",
          height: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid gray",
          padding:"10px"
        }}
      >
        <ProductPerformanceChart products={products} />
      </Box>

      {/* Troisième graphique */}
      <Box
        sx={{
          width: "32%",
          height: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid gray",
          padding:"10px"
        }}
      >
        <AppPerformanceChart products={products} />
      </Box>
    </Grid2>
    </>
  );
};

export default ChartParent;
