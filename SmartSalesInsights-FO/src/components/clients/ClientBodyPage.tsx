import React, { useState } from "react";
import Grid2 from "@mui/material/Grid2";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Product } from "../../types/Product";
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ClientBodyPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  /* const products: Product[] = [
    { id: 0, name: "T-shirt 1", categorie: "Vêtement", price: "10000" },
    { id: 1, name: "T-shirt 2", categorie: "Vêtement", price: "20000" },
    { id: 2, name: "T-shirt 3", categorie: "Vêtement", price: "30000" },
    { id: 3, name: "Pantalon 1", categorie: "Vêtement", price: "40000" },
    { id: 4, name: "Pantalon 2", categorie: "Vêtement", price: "50000" },
    { id: 5, name: "Chaussure 1", categorie: "Chaussure", price: "60000" },
    { id: 6, name: "Chaussure 2", categorie: "Chaussure", price: "70000" },
    { id: 7, name: "Pantalon 1", categorie: "Vêtement", price: "40000" },
    { id: 8, name: "Pantalon 2", categorie: "Vêtement", price: "50000" },
    { id: 9, name: "Chaussure 1", categorie: "Chaussure", price: "60000" },
    { id: 10, name: "Chaussure 2", categorie: "Chaussure", price: "70000" },
    { id: 11, name: "T-shirt 1", categorie: "Vêtement", price: "10000" },
    { id: 12, name: "T-shirt 2", categorie: "Vêtement", price: "20000" },
    { id: 13, name: "T-shirt 3", categorie: "Vêtement", price: "30000" },
    { id: 14, name: "Pantalon 1", categorie: "Vêtement", price: "40000" },
    { id: 15, name: "Pantalon 2", categorie: "Vêtement", price: "50000" },
    { id: 16, name: "Chaussure 1", categorie: "Chaussure", price: "60000" },
    { id: 17, name: "Chaussure 2", categorie: "Chaussure", price: "70000" },
    { id: 18, name: "Pantalon 1", categorie: "Vêtement", price: "40000" },
    { id: 19, name: "Pantalon 2", categorie: "Vêtement", price: "50000" },
    { id: 20, name: "Chaussure 1", categorie: "Chaussure", price: "60000" },
    { id: 21, name: "Chaussure 2", categorie: "Chaussure", price: "70000" },
  ]; */

  const products = useSelector((state: RootState) => state.products);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const sendCommand = () => {

    alert(cart.length);
    setCart([])
    cart.map((product)=> console.log(product));

  }

  return (
    <div style={{ padding: "100px 0px 0px 40px", position: "relative" }}>
      <Grid2 container sx={{ rowGap: "10px", columnGap: "0px" }}>
        {products.map((product) => (
          <Grid2
            key={product.id}
            sx={{
              width: { xs: "100%", sm: "50%", md: "25%" },
            }}
          >
            <Card sx={{ maxWidth: "90%" }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "black" }}>
                  {product.name}
                </Typography>
                <Typography >{product.categorie}</Typography>
                <Typography variant="body2">{product.price} Ar</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => addToCart(product)}
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {/* Floating Cart Button */}
      <Fab
        color="secondary"
        aria-label="cart"
        onClick={toggleCart}
        sx={{
            position: "fixed", // Position fixe pour survoler les produits
            bottom: "20px",   // Distance du bas de l'écran
            right: "20px",    // Distance du côté droit de l'écran
            zIndex: 1000,     // Priorité pour rester au-dessus des autres éléments
            boxShadow: 3      // Optionnel : ajoute une ombre pour le rendre plus visible
        }}
        >
        <ShoppingCartIcon />
        </Fab>

      {/* Cart Dialog */}
      <Dialog open={isCartOpen} onClose={toggleCart}>
        <DialogTitle color="secondary">Panier</DialogTitle>
        <DialogContent>
          <List>
            {cart.length === 0 ? (
              <Typography variant="body1" sx={{color:"gray"}}>Votre panier est vide.</Typography>
            ) : (
              cart.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText>
                    <Typography variant="body1" sx={{ color: "gray" }}>
                    {item.name + " " + item.categorie + " " + `${item.price} Ar`}<Button><CloseIcon/></Button>
                    </Typography>
                </ListItemText>
                  
                </ListItem>
              ))
            )}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={sendCommand} color="secondary">
            Validate
          </Button>
          <Button onClick={toggleCart} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ClientBodyPage;
