import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";
import { getProduct, createProduct, updateProduct, deleteProduct} from "../../services/product.service";


//Reccuperation de tous les produits

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const products = await getProduct();
        return products;
    }
);


export const addNewProduct = createAsyncThunk(
    'products/addNewProduct',
    async (product: Omit<Product, 'id'>) => {
        const newProduct = await createProduct(product);
        return newProduct;
    }
);


export const updateExistingProduct = createAsyncThunk(
    'products/uptadeExistingProduct',
    async ({id, product}: {id: number; product: Partial<Product> }) => {
        const updatedProduct = await updateProduct(id, product);
        console.log('Produit mis à jour depuis l\'API:', updatedProduct);
        return updatedProduct;
    }
);


export const deleteExistingProduct = createAsyncThunk(
    'products/deleteExistingProduct',
    async (id: number) => {
        const remainingProducts = await deleteProduct(id);
        return remainingProducts;
    }
)
