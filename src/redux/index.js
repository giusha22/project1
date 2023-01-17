import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./silices/UserSlice";

export const store = configureStore({
    reducer:{
        user:UserReducer,
    },
});
//action crator
export {authenticateUser} from "./silices/UserSlice"