import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


let initialState = {
    productList:[],
    singleProduct:[],
    productOption:[],
    isLoading:false,
    error:null,
}

export const getProducts = createAsyncThunk('product/fetchAll',async(searchQuery,thunkAPI)=>{
    try {
        let url = `https://my-json-server.typicode.com/sinisu/shop-project/product/?q=${searchQuery}`;
        let response = await fetch(url);
        return await response.json(); 
    } catch(error){
        thunkAPI.rejectWithValue(error.message);
    }    
})

export const getProductDetails = createAsyncThunk('product/detail',async(id,thunkAPI)=>{
    try {
        let url = `https://my-json-server.typicode.com/sinisu/shop-project/product/${id}`;
        let response = await fetch(url);
        return await response.json();
    } catch(error) {
        thunkAPI.rejectWithValue(error.message);
    }
})


// function productReducer (state = initialState,action) {
//     let {type,payload} = action
//     switch (type) {
//         case "GET_PRODUCT_SUCCESS" :
//             return{...state,productList:payload.data};
//         case "GET_PRODUCT_INFO" :
//             return{...state,singleProduct:payload.data,productOption:payload.data.size}
//         default :
//             return {...state};
//     }
// }

// export default productReducer;

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        getSingleProduct(state,action) {
            state.singleProduct = action.payload.data;
            state.productOption = action.payload.data.size;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.isLoading = false
            state.productList = action.payload;
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.isLoading = false
            state.error=action.payload
        })
        .addCase(getProductDetails.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getProductDetails.fulfilled,(state,action)=>{
            state.isLoading = false
            state.singleProduct=action.payload
            state.productOption=action.payload.size
        })
        .addCase(getProductDetails.rejected,(state,action)=>{
            state.isLoading = false
            state.error=action.payload
        })
    }
})

// export const productActions = productSlice.actions
export default productSlice.reducer;