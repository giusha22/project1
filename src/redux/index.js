import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./silices/UserSlice";
import  storage  from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import { useSelector } from "react-redux";
import { productReducer } from "./silices/ProductSlice";
import { cartReducer } from "./silices/cartSlice";
const persistConfig ={
    key:"root",
    storage,
    whiteList:["user"],
};
const rootReducer = combineReducers ({
    user:UserReducer,
    product:productReducer,
    cart:cartReducer,
});
const persistedReducer= persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({  
        serializableCheck:false,
    }),
});
export const persistor = persistStore(store)

//action crator
export {authenticateUser, logoutUser} from "./silices/UserSlice"
export {
    // async thunks
    saveProduct,
    fetchHomePageProducts,
    fetchCategoryProducts,
    fetchQuertProducts,
    rateProduct,
    //reducer
     setSelectedProduct,

     } from "./silices/ProductSlice"
     
     // cart action creators
     export {addToCart, removeFromCart, clearCart,
    //async thunks
    fetchCart,
    saveCart, 
    
    } from "./silices/cartSlice";



//user hooks 
export const useUserInfo = ()=> useSelector((state)=>state.user.userData);
//product hooks
export const useSelectedProduct = ()=>useSelector((state)=>state.product.selectedProduct);
export const useCategories = ()=>useSelector((state)=>state.product.categories);
export const useHomePageProducts = ()=>useSelector((state)=>state.product.homePageProducts);
export const useCategoryProducts = ()=>useSelector((state)=>state.product.categoryProducts);
export const useSerchResult = ()=>useSelector((state)=>state.product.searchResult)


//cart hooks
export const useCartItems = ()=> useSelector((state) => state.cart.cartItems );