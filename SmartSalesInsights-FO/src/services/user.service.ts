import axios from "axios";
import { UserInterface } from '../../../smart-sales-insights-b0/src/user/type/UserInterface'


export const API_URL = 'http://localhost:3000/user'

export const getUser = async (): Promise<UserInterface[]> => {
    const result  = await axios.get(API_URL);
    return result.data
}

export const createUser = async (user: Omit<UserInterface, 'id'>): Promise<UserInterface> =>{
    const result =  await axios.post(API_URL, user);
    return result.data;
} 


export const updateUser = async (id: number, user: Partial<UserInterface>): Promise<UserInterface> => {
    const result = await axios.put(`${API_URL}/${id}`, user);
    return result.data;
}

export const deleteUser = async (id: number) : Promise<UserInterface[]> =>{
    const result  = await axios.delete(`${API_URL}/${id}`);
    return result.data;
}
