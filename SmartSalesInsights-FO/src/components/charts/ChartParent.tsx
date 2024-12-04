import React from "react";
import PageHeader from "../PageHeader";
import PeopleOutlineTwoToneIcon from "@mui/icons-material/PeopleOutlineTwoTone";
import ProductStockChart from "./ProductStockChart";
import ProductPerformanceChart from "./ProductPerformanceChart";
import { Grid2, Box } from "@mui/material"; // Utilisation de Grid2 et Box
import AppPerformanceChart from "./AppPerformanceChart";

const ChartParent: React.FC = () => {
  const products = [
    { name: 'Produit A', stockQuantity: 50 },
    { name: 'Produit B', stockQuantity: 30 },
    { name: 'Produit C', stockQuantity: 70 },
    { name: 'Produit D', stockQuantity: 10 },
  ];
  
  return (
    <>
      <PageHeader title="Chart Section" icon={<PeopleOutlineTwoToneIcon />} />
      
      {/* Container pour les graphiques */}
      <Box
        sx={{
          width: '80%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',  // Pour distribuer les éléments côte à côte
          alignItems: 'center',
          height: '400px',  // Hauteur fixe pour les graphiques
        }}
      >
        {/* Premier graphique : ProductStockChart */}
        <Box
          sx={{
            width: '48%',  // Largeur presque égale pour chaque graphique
            height: { xs: '100%', sm: '50%', md: '50%' },// Hauteur fixe, même que le conteneur
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ProductStockChart products={products} />
        </Box>

        {/* Deuxième graphique : ProductPerformanceChart */}
        <Box
          sx={{
            width: '48%',  // Largeur presque égale pour chaque graphique
            height: '100%', // Hauteur fixe, même que le conteneur
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ProductPerformanceChart products={products} />
        </Box>
      </Box>

      {/* Troisième graphique en dessous des deux premiers */}
      <Grid2
        container
        spacing={3}
        justifyContent="center"
        style={{ width: '80%', margin: '20px auto' }}
        component="div"
      >
        <Grid2
          sx={{
            width: { xs: '100%', sm: '50%', md: '50%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AppPerformanceChart products={products} />
        </Grid2>
      </Grid2>
    </>
  );
};

export default ChartParent;
