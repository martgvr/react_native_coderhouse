import { createSlice } from '@reduxjs/toolkit'

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        idSelected: '',
        categorySelected: '',
        productsSelected: [],
        allProducts: [],
        allCategories: [],
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.productsSelected = state.allProducts.filter(product => product.category === action.payload)
            state.categorySelected = action.payload
        },
        setIdSelected: (state, action) => {
            state.idSelected = action.payload
        },
    }
})

export default shopSlice.reducer
export const { setCategorySelected, setIdSelected } = shopSlice.actions