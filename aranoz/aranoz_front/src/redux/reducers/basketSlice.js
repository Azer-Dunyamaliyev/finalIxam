import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBasketThunk = createAsyncThunk('api/basket',async () => {
    const response = await axios.get('http://localhost:5500/basket')
    return response.data
})

export const deleteBasketThunk = createAsyncThunk('api/basket/delete',async (id) => {
    const response = await axios.delete(`http://localhost:5500/basket/${id}`)
    return id
})

export const basketSlice = createSlice({
    name: 'products',
    initialState: {
        products:[],
        loading: false,
        error: null
    },
    reducers:{},
    extraReducers: builder => {
        builder

        // GET
        .addCase(getBasketThunk.fulfilled,(state,action) => {
            state.loading = false
            state.products = action.payload
        })
        .addCase(getBasketThunk.pending,(state,action) => {
            state.loading = true
        })
        .addCase(getBasketThunk.rejected,(state,action) => {
            state.loading = false
            state.error = action.error.message
        })

        // DELETE
        .addCase(deleteBasketThunk.fulfilled,(state,action) => {
            state.loading = false
            state.products = state.products.filter(item => item._id !== action.payload)
        })
        .addCase(deleteBasketThunk.pending,(state,action) => {
            state.loading = true
        })
        .addCase(deleteBasketThunk.rejected,(state,action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default basketSlice.reducer