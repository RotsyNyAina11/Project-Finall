import axios from "axios";
import { HistoryInterface } from '../../../smart-sales-insights-b0/src/history/type/HistoryInterface'


export const API_URL = 'http://localhost:3000/history'

export const getHistory = async (): Promise<HistoryInterface[]> => {
    const result  = await axios.get(API_URL);
    return result.data
}

export const createHistory = async (history: Omit<HistoryInterface, 'id'>): Promise<HistoryInterface> =>{
    const result =  await axios.post(API_URL, history);
    return result.data;
} 


export const updateHistory = async (id: number, history: Partial<HistoryInterface>): Promise<HistoryInterface> => {
    const result = await axios.put(`${API_URL}/${id}`, history);
    return result.data;
}

export const deleteHistory = async (id: number) : Promise<HistoryInterface[]> =>{
    const result  = await axios.delete(`${API_URL}/${id}`);
    return result.data;
}
