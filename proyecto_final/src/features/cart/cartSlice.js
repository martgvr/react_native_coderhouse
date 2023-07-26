import Cart from "../../data/cart.json"
import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartData: Cart,
        user: "Hardcoder user",
        updatedAt: "",
        total: null,
        items: []
    },
    reducers: {
        addCartItem: (state, action) => {
            const productExists = state.items.some(item => item.id === action.payload.id)

            if (productExists) {
                state.items = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
            } else state.items.push(action.payload)

            state.total = state.items.reduce(
                (acc, currentItem) => acc += currentItem.price * currentItem.quantity,
                0
            )

            state.updatedAt = new Date().toLocaleString()
        },
        removeCartItem: (state,action) => {
            //Logic to remove item
        }
    }
})

export default cartSlice.reducer
export const { addItem, removeItem } = cartSlice.actions