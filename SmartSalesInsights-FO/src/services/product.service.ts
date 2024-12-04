import axios from "axios";
import { ProductInterface } from '../../../smart-sales-insights-b0/src/product/types/ProductInterface'


export const API_URL = 'http://localhost:3000/product'

export const getProduct = async (): Promise<ProductInterface[]> => {
    const result  = await axios.get(API_URL);
    return result.data
}

export const createProduct = async (product: Omit<ProductInterface, 'id'>): Promise<ProductInterface> =>{
    const result =  await axios.post(API_URL, product);
    return result.data;
} 


export const updateProduct = async (id: number, product: Partial<ProductInterface>): Promise<ProductInterface> => {
    const result = await axios.put(`${API_URL}/${id}`, product);
    return result.data;
}

export const deleteProduct = async (id: number) : Promise<ProductInterface[]> =>{
    const result  = await axios.delete(`${API_URL}/${id}`);
    return result.data;
}
