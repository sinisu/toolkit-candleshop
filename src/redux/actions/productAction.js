// import { productActions } from "../reducers/productSlice";

// // function getProducts (searchQuery) {
// //     return async(dispatch) => {
// //         let url = `https://my-json-server.typicode.com/sinisu/shop-project/product/?q=${searchQuery}`;
// //         let response = await fetch(url);
// //         let data = await response.json();
// //         // dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}})
// //         dispatch(productActions.getAllProducts({data}))
// //     };
// // }

// function getProductDetail (id) {
//     return async(dispatch) => {
//         let url = `https://my-json-server.typicode.com/sinisu/shop-project/product/${id}`;
//         let response = await fetch(url);
//         let data = await response.json();
//         // dispatch({type:"GET_PRODUCT_INFO",payload:{data}})
//         dispatch(productActions.getProductDetail({data}))
//     };
// }

// export const productAction={getProductDetail};