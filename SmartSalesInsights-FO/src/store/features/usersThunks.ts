import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../types/User";
import { getUser, createUser, updateUser, deleteUser} from "../../services/user.service";


//Reccuperation de tous les produits

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const users = await getUser();
        return users;
    }
);


export const addNewUser = createAsyncThunk(
    'users/addNewUser',
    async (user: Omit<User, 'id'>) => {
        const newUser = await createUser(user);
        return newUser;
    }
);


export const updateExistingUser = createAsyncThunk(
    'users/uptadeExistingUser',
    async ({id, user}: {id: number; user: Partial<User> }) => {
        const updatedUser = await updateUser(id, user);
        console.log('Produit mis à jour depuis l\'API:', updatedUser);
        return updatedUser;
    }
);


export const deleteExistingUser = createAsyncThunk(
    'users/deleteExistingUser',
    async (id: number) => {
        const remainingUsers = await deleteUser(id);
        return remainingUsers;
    }
)
