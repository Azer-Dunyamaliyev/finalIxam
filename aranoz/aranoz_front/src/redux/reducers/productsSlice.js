import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsThunk = createAsyncThunk('api/products',async () => {
    const response = await axios.get('http://localhost:5500/products')
    return response.data
})

export const postProductsThunk = createAsyncThunk('api/products/post',async (data) => {
    const response = await axios.post('http://localhost:5500/basket/',data)
    return response.data
})

export const deleteProductsThunk = createAsyncThunk('api/products/delete',async (id) => {
    const response = await axios.delete(`http://localhost:5500/products/${id}`)
    return id
})

export const productsSlice = createSlice({
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
        .addCase(getProductsThunk.fulfilled,(state,action) => {
            state.loading = false
            state.products = action.payload
        })
        .addCase(getProductsThunk.pending,(state,action) => {
            state.loading = true
        })
        .addCase(getProductsThunk.rejected,(state,action) => {
            state.loading = false
            state.error = action.error.message
        })

        // POST
        .addCase(postProductsThunk.fulfilled,(state,action) => {
            state.loading = false
        })
        .addCase(postProductsThunk.pending,(state,action) => {
            state.loading = true
        })
        .addCase(postProductsThunk.rejected,(state,action) => {
            state.loading = false
            state.error = action.error.message
        })

        // DELETE
        .addCase(deleteProductsThunk.fulfilled,(state,action) => {
            state.loading = false
            state.products = state.products.filter(item => item._id !== action.payload)
        })
        .addCase(deleteProductsThunk.pending,(state,action) => {
            state.loading = true
        })
        .addCase(deleteProductsThunk.rejected,(state,action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default productsSlice.reducer