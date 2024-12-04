import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";
import { addNewProduct, deleteExistingProduct, fetchProducts, updateExistingProduct } from "./productsThunks";



const initialState: Product[] = []

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
       /*  addProduct : (state, action: PayloadAction<Product>) =>{
            return [...state, action.payload];
        },
        updateProduct : (state, action: PayloadAction<Product>) =>{
            return state.map( product => product.id === action.payload.id? {...product, name: action.payload.name, price: action.payload.price, categorie: action.payload.categorie}: product);
        },
        delProduct : (state, action: PayloadAction<Product>) => {
            return state.filter( product => product.id !== action.payload.id)
        } */
    },
    extraReducers: (builder) => {
        // Fetch products
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
          return action.payload;
        });
    
        // Add new product
        builder.addCase(addNewProduct.fulfilled, (state, action: PayloadAction<Product>) => {
          state.push(action.payload);
        });
    
        // Update product
        builder.addCase(updateExistingProduct.fulfilled, (state, action: PayloadAction<Product>) => {
          console.log('Action payload:', action.payload); // Produit mis à jour
          console.log('State avant modification:', state); 
          return state.map((product) =>
            product.id === action.payload.id
              ? { ...product, ...action.payload }
              : product
          );
        });
    
        // Delete product
        builder.addCase(deleteExistingProduct.fulfilled, (state, action: PayloadAction<Product[]>) => {
          return action.payload;
        });
      },
})



//export const { addProduct, updateProduct, delProduct } = productsSlice.actions

export default productsSlice.reducer;