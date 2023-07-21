import Cart from "../../data/cart.json"
import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartData: Cart,
    },
    reducers: {

    }
})

export default cartSlice.reducer
// export const {  } = cartSlice.actions