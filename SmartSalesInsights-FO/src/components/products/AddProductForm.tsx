import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { AppDispatch} from "../../store/store";
import { addNewProduct, updateExistingProduct } from "../../store/features/productsThunks"; 
import { Product } from "../../types/Product";
import { Box, Button, FormControl, Grid2, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import RestoreIcon from '@mui/icons-material/Restore';

interface AddProductFormProps {
    productToUpdate?: Product | null;
    clearSelectedProduct: () => void ;
  }
  
  const AddProductForm: React.FC<AddProductFormProps> = ({
    productToUpdate,
    clearSelectedProduct,
  }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [product, setProduct] = useState<Product>(
      productToUpdate || { id: 0, name: "", price: "", categorie: "" }
    );
  
     useEffect(() => {
      if (productToUpdate) {
        setProduct(productToUpdate);
      }
    }, [productToUpdate]); 
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (productToUpdate) {
        dispatch(updateExistingProduct({ id: product.id, product }));
      } else {
        dispatch(addNewProduct(product));
      }
      clearSelectedProduct();
    };

    const handleReset = (e: React.FormEvent) => {
      e.preventDefault();
      setProduct({ id: 0, name: "", price: "", categorie: "" })
    }
  
    return (
      <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
        paddingBottom:"20px"
      }}
    >
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "secondary.main" }}
      >
        {productToUpdate ? "Update Product" : "Add New Product"}
      </Typography>
      <Grid2 container spacing={2} sx={{ display: "flex", flexWrap: "nowrap", justifyContent: "space-between" }}>
        {/* Name Field */}
        <Grid2  sx={{
                      width: { xs: "100%", sm: "50%", md: "33.33%" }, // Même logique pour ce champ
                    }}
          >
          <TextField
            fullWidth
            variant="outlined"
            label="Product Name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            color="secondary"
            InputProps={{
              style: { color: "gray" }, // Texte gris
            }}
          />
        </Grid2 >
        {/* Price Field */}
        <Grid2  sx={{
                    width: { xs: "100%", sm: "50%", md: "33.33%" }, // Même logique pour ce champ
                  }}
          >
          <TextField
            fullWidth
            variant="outlined"
            label="Price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            color="secondary"
            type="number"
            InputProps={{
              style: { color: "gray" }, // Texte gris
            }}
          />
        </Grid2>
        {/* Categorie Field */}
        <Grid2 
             sx={{
              width: { xs: "100%", sm: "50%", md: "33.33%" }, // Même logique pour ce champ
            }}
        >
          <FormControl fullWidth>
            <InputLabel color="secondary">Category</InputLabel>
            <Select
              value={product.categorie}
              onChange={(e) =>
                setProduct({ ...product, categorie: e.target.value })
              }
              color="secondary"
              sx={{
                color:"gray"
              }}
            >
              <MenuItem value="Vetement" sx={{color:"gray"}} >Vetement</MenuItem>
              <MenuItem value="Chaussure" sx={{color:"gray"}}>Chaussure</MenuItem>
              <MenuItem value="Casquette" sx={{color:"gray"}}>Casquette</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
      <Grid2 
        container 
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginTop: 2,
        }}
      >
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          startIcon={<SaveAltIcon />}
        >
          {productToUpdate ? "Update" : "Save"}
        </Button>
        <Button
          type="button"
          variant="outlined"
          color="secondary"
          startIcon={<RestoreIcon />}
          onClick={handleReset}
        >
          Reset
        </Button>
      </Grid2>
    </Box>
    );
  };
 /*  <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Product name :</label>
          <input
            type="text"
            name="name"
            id="name"
            value={product.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="price">Product price</label>
          <input
            type="text"
            name="price"
            id="price"
            value={product.price}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="categorie">Product categorie</label>
          <input
            type="text"
            name="categorie"
            id="categorie"
            value={product.categorie}
            onChange={handleChange}
          />
          <br />
          <button type="submit">{productToUpdate ? "Update" : "Save"}</button>
          {productToUpdate && (
            <button type="button" onClick={clearSelectedProduct}>
              Cancel
            </button>
          )}
        </form>
      </div> */
  export default AddProductForm;
  