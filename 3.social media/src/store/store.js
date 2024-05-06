import {configureStore} from '@reduxjs/toolkit'
import { postSlice } from "../context/PostContext";

export const store=configureStore({
    reducer:{
        post:postSlice.reducer
    }
})


