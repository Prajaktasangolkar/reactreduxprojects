import {createSlice} from '@reduxjs/toolkit'

const initialState=[]

export const productSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            state.push(action.payload)
        },
       removeProduct:(state,action)=>{
          return state.filter((item)=>item.id!==action.payload)
       }
    
    }
})

export const {addProduct,removeProduct} =productSlice.actions;

export default productSlice.reducer