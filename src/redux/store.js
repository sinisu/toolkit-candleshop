// import { applyMiddleware, createStore } from "redux";
// import rootReducer from "./reducers";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import authenticateReducer from "./reducers/authenticateReducer";

// let store = createStore(
//     rootReducer, 
//     composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
    reducer:{
        auth : authenticateReducer,
        product : productSlice,
    }
})

export default store;