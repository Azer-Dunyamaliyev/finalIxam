import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAdminThunk = createAsyncThunk('api/products',async () => {
    const response = await axios.get('http://localhost:5500/products')
    return response.data
})

export const postAdminThunk = createAsyncThunk('api/products/post',async (data) => {
    const response = await axios.post('http://localhost:5500/products',data)
    return response.data
})

export const deleteAdminThunk = createAsyncThunk('api/products/delete',async (id) => {
    const response = await axios.delete(`http://localhost:5500/products/${id}`)
    return id
})

export const adminSlice = createSlice({
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
        .addCase(getAdminThunk.fulfilled,(state,action) => {
            state.loading = false
            state.products = action.payload
        })
        .addCase(getAdminThunk.pending,(state,action) => {
            state.loading = true
        })
        .addCase(getAdminThunk.rejected,(state,action) => {
            state.loading = false
            state.error = action.error.message
        })

         // POST
         .addCase(postAdminThunk.fulfilled,(state,action) => {
            state.loading = false
            state.products.push(action.payload)
        })
        .addCase(postAdminThunk.pending,(state,action) => {
            state.loading = true
        })
        .addCase(postAdminThunk.rejected,(state,action) => {
            state.loading = false
            state.error = action.error.message
        })

        // DELETE
        .addCase(deleteAdminThunk.fulfilled,(state,action) => {
            state.loading = false
            state.products = state.products.filter(item => item._id !== action.payload)
        })
        .addCase(deleteAdminThunk.pending,(state,action) => {
            state.loading = true
        })
        .addCase(deleteAdminThunk.rejected,(state,action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default adminSlice.reducer