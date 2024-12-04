  import React from "react";
  import { Container, Box, CssBaseline } from "@mui/material";
  import SideMenu from "./SideMenu";
  import Header from "./Header";
  import ProductParent from "./products/ProductParent";
  import { Route,  Routes } from "react-router-dom";
  import UserParent from "./users/UserParent";
  import HistoryParent from "./history/HistoryParent";
  import ChartParent from "./charts/ChartParent";


  const Dashboard: React.FC = () => {
    return (
      <>
        <SideMenu />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "260px", // Ajoute l'espace nécessaire à gauche pour SideMenu
            height: "100vh", // Assure que le contenu prend toute la hauteur
          }}
        >
          <Header />
          <Container
            sx={{
              flexGrow: 1,
              backgroundColor: "#f4f5fd", // Le fond blanc du contenu
              paddingTop: "20px", // Ajouter du padding si nécessaire
              overflow: "hidden"
            }}
          >
            

              <Routes>
                  <Route path="dashboard" element={<ChartParent/>}></Route>
                  <Route path="products" element={<ProductParent/>}></Route>
                  <Route path="users" element={<UserParent/>}></Route>
                  <Route path="history" element={<HistoryParent/>}></Route>
              </Routes>

        
          </Container>
        </Box>
        <CssBaseline />
      </>
    );
  };

  export default Dashboard;
