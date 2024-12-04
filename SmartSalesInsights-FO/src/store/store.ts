import { configureStore } from "@reduxjs/toolkit";
import authReducer  from  "./features/authSlice"
import productReducer from "./features/products.slice"
import userReducer from "./features/users.slice"
import historyReducer from "./features/historys.slice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        users: userReducer,
        historys: historyReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;