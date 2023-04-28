import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserAPI = createAsyncThunk('users/getUserAPI', async () => {
    return fetch('https://randomuser.me/api/?page=page&results=20').then(res => {
        return res.json()
    })
})

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: {},
        loading: 'idle',
    },
    reducers: {},
    extraReducers: {
        [getUserAPI.pending]: (state, action) => {
            state.loading = 'pending'
        },
        [getUserAPI.fulfilled]: (state, action) => {
            state.loading = 'ready';
            state.data = action.payload.results
        },
        [getUserAPI.rejected]: (state, action) => {
            state.loading = 'reject'
        },
    }
})

export default userSlice.reducer;