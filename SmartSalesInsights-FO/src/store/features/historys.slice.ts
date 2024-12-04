import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { History } from "../../types/History";
import { addNewHistory, deleteExistingHistory, fetchHistorys, updateExistingHistory } from "./historysThunks";



const initialState: History[] = []

const historysSlice = createSlice({
    name: 'historys',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        // Fetch historys
        builder.addCase(fetchHistorys.fulfilled, (state, action: PayloadAction<History[]>) => {
          return action.payload;
        });
    
        // Add new History
        builder.addCase(addNewHistory.fulfilled, (state, action: PayloadAction<History>) => {
          state.push(action.payload);
        });
    
        // Update History
        builder.addCase(updateExistingHistory.fulfilled, (state, action: PayloadAction<History>) => {
          return state.map((user) =>
            user.id === action.payload.id
              ? { ...user, ...action.payload }
              : user
          );
        });
    
        // Delete History
        builder.addCase(deleteExistingHistory.fulfilled, (state, action: PayloadAction<History[]>) => {
          return action.payload;
        });
      },
})


export default historysSlice.reducer;