import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : "products",
    initialState : {
        isError:false,
        isLoading:false,
        products:[]
    },
    reducers :{},
    extraReducers : (builder)=>{
        builder
        .addCase(getProducts.pending , (state,action)=>{
           state.isLoading=true
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
           state.isLoading=false
           state.products = action.payload
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
    })

    }

});
export const getProducts = createAsyncThunk("fetch/product",async(api)=>{
          const res = await fetch(api)
          const data = await res.json()
          return data
})

export default productSlice.reducer
