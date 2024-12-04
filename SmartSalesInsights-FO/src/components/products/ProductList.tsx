import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchProducts, deleteExistingProduct } from "../../store/features/productsThunks";
import { Product } from "../../types/Product";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

/* interface ProductListProps{
    products: Product[];
    const products: Product[] = useSelector((state: RootState) => state.product)
    }
    */
   
   
   interface ProductListProps {
       onUpdateProduct: (product: Product) => void;
    }
    
    const ProductList: React.FC<ProductListProps> = ({ onUpdateProduct }) => {
        const dispatch: AppDispatch = useDispatch();
        const products = useSelector((state: RootState) => state.products);

    useEffect(()=>{
        dispatch(fetchProducts());
    }, [dispatch])
  
    const handleDeleteProduct = (id: number) => {
      dispatch(deleteExistingProduct(id));
    };
  
    return (
      <TableContainer component={Paper}>
        <Table>
          {/* En-tête de la table */}
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{color:"gray"}}>Name</TableCell>
              <TableCell align="left" sx={{color:"gray"}}>Price</TableCell>
              <TableCell align="left" sx={{color:"gray"}}>Category</TableCell>
              <TableCell align="center" sx={{color:"gray"}}>Actions</TableCell>
            </TableRow>
          </TableHead>
  
          {/* Corps de la table */}
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell sx={{color:"gray"}}>{product.name}</TableCell>
                <TableCell sx={{color:"gray"}}>{product.price} Ar</TableCell>
                <TableCell sx={{color:"gray"}}>{product.categorie}</TableCell>
                <TableCell align="center" sx={{color:"gray"}}>
                  {/* Boutons d'action */}
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={<EditIcon/>}
                    onClick={() => onUpdateProduct(product)}
                    sx={{ marginRight: "8px" }}
                  >
                    EDIT
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    startIcon={<DeleteIcon/>}
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default ProductList;
  