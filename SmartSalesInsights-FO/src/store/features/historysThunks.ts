import { createAsyncThunk } from "@reduxjs/toolkit";
import { History } from "../../types/History";
import { getHistory, createHistory, updateHistory, deleteHistory} from "../../services/history.service";


//Reccuperation de tous les produits

export const fetchHistorys = createAsyncThunk(
    'users/fetchHistorys',
    async () => {
        const users = await getHistory();
        return users;
    }
);


export const addNewHistory = createAsyncThunk(
    'historys/addNewHistory',
    async (history: Omit<History, 'id'>) => {
        const newHistory = await createHistory(history);
        return newHistory;
    }
);


export const updateExistingHistory = createAsyncThunk(
    'historys/uptadeExistingHistory',
    async ({id, history}: {id: number; history: Partial<History> }) => {
        const updatedHistory = await updateHistory(id, history);
        console.log('Produit mis à jour depuis l\'API:', updatedHistory);
        return updatedHistory;
    }
);


export const deleteExistingHistory = createAsyncThunk(
    'historys/deleteExistingHistory',
    async (id: number) => {
        const remainingHistorys = await deleteHistory(id);
        return remainingHistorys;
    }
)
