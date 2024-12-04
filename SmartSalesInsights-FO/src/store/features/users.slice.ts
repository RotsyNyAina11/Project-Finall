import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/User";
import { addNewUser, deleteExistingUser, fetchUsers, updateExistingUser } from "./usersThunks";



const initialState: User[] = []

const productsSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        // Fetch products
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
          return action.payload;
        });
    
        // Add new User
        builder.addCase(addNewUser.fulfilled, (state, action: PayloadAction<User>) => {
          state.push(action.payload);
        });
    
        // Update User
        builder.addCase(updateExistingUser.fulfilled, (state, action: PayloadAction<User>) => {
          return state.map((user) =>
            user.id === action.payload.id
              ? { ...user, ...action.payload }
              : user
          );
        });
    
        // Delete User
        builder.addCase(deleteExistingUser.fulfilled, (state, action: PayloadAction<User[]>) => {
          return action.payload;
        });
      },
})


export default productsSlice.reducer;