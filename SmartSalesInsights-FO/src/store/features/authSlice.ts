import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    email: string;
    password: string;
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    email: '',
    password: '',
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ email: string; password: string}> ) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isLoggedIn = true;
        },

        logout: (state) => {
            state.email = '';
            state.password = '';
            state.isLoggedIn = false;
        },

        signup: (state, action: PayloadAction<{email: string; password: string}>) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isLoggedIn = true;
        }
    },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;