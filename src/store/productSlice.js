
import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:'productSlice',
    initialState:{
        products:[],
        cart:[]
    },

    reducers:{
        productsLao: (puranaData,nayaData) => {
            puranaData.products = nayaData.payload
        },
        cartKiproductLao: (puranaData,nayaData) => {
            puranaData.cart.push(nayaData.payload)
        },
        DelkaroProducts: (puranaData,nayaData) => {
            puranaData.cart.splice(nayaData.payload,1)
        }
    }
})

export const {DelkaroProducts,cartKiproductLao,productsLao} = productSlice.actions
