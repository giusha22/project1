import { createSlice,configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState: {
        value: 0,
    },
    reducers:{

    }
})
export const store =configureStore({
    reducer:{
        
    }
})