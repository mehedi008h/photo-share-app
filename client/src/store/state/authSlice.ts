import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    success: boolean | null;
    token: string | null;
    user: {} | null;
}

const initialState: AuthState = {
    success: null,
    token: null,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (
            state,
            action: PayloadAction<{ success: boolean; token: string; user: {} }>
        ) => {
            state.success = action.payload.success;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        defaultState: (state) => {
            state = initialState;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUser, defaultState } = authSlice.actions;

export default authSlice.reducer;
