import React, { useState }  from "react";
import AddProductForm from "./AddProductForm";
//import ProductList from "./ProductList";
import { Product } from "../../types/Product";
import PageHeader from "../PageHeader";
import  PeopleOutlineTwoToneIcon  from "@mui/icons-material/PeopleOutlineTwoTone";
import ProductList from "./ProductList";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

const ProductParent: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState<boolean>(false);

   const handleSelectProductForUpdate = (product: Product) => {
    setSelectedProduct(product);
    setIsAddingProduct(true); // Assurez-vous que l'état d'ajout est désactivé
  }; 
   const clearSelectedProduct = () => {
    setSelectedProduct(null);
    setIsAddingProduct(false); // Désactive le formulaire d'ajout également
  }; 

  const handleOpenAddProduct = () => {
    setSelectedProduct(null); // On s'assure qu'aucun utilisateur n'est sélectionné
    setIsAddingProduct(true); // Ouvre le popup
  };

  const handleCloseDialog = () => {
    setIsAddingProduct(false); // Ferme le popup
  }
  /*  const handleAddProductClick = () => {
    setIsAddingProduct(true); // Affiche le formulaire pour l'ajout
    setSelectedProduct(null); // Réinitialise la sélection
  };  */

  return (
    <>
      <PageHeader title="Product Section"  icon={< PeopleOutlineTwoToneIcon/>}/>
       {/* Bouton Add User */}
       <Button variant="contained" color="secondary" onClick={handleOpenAddProduct} sx={{margin:"10px 0px"}}>
        Add Product
      </Button>

      {/* Modal pour le formulaire */}
      <Dialog open={isAddingProduct} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>{selectedProduct ? "Edit Product" : "Add Product"}</DialogTitle>
        <DialogContent>
          <AddProductForm productToUpdate={selectedProduct} clearSelectedProduct={clearSelectedProduct} />
        </DialogContent>
      </Dialog>

      <ProductList onUpdateProduct={handleSelectProductForUpdate}/>
    </>
  );
};

export default ProductParent;

{/* <button onClick={handleAddProductClick}>Add Product</button> {Bouton d'ajout}
<ProductList onUpdateProduct={handleSelectProductForUpdate} />
{(isAddingProduct || selectedProduct) && (
  <AddProductForm
    productToUpdate={selectedProduct || undefined}
    clearSelectedProduct={clearSelectedProduct}
  />
)} */}