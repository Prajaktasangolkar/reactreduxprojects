import {configureStore} from '@reduxjs/toolkit'
import productSlice from '../features/todo/productSlice'

export const store=configureStore({
    reducer:{
        cart:productSlice
    }
})