import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: null,
        updatedAt: "",
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
            } else {
                state.items.push(action.payload)
            }

            state.total = state.items.reduce((acc, currentItem) => acc += currentItem.price * currentItem.quantity, 0)
            state.updatedAt = new Date().toLocaleString()
        },
        removeCartItem: (state, action) => {
            const itemFound = state.items.find(item => item.id == action.payload.id)
            const itemPosition = state.items.indexOf(itemFound)
            state.items.splice(itemPosition, 1)
        },
        clearCart: (state, action) => {
            console.log('OK');
            state.items = []
        }
    }
})

export default cartSlice.reducer
export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions