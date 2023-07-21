import { configureStore } from "@reduxjs/toolkit"

import cartReducer from '../features/counter/cartSlice'
import shopReducer from '../features/counter/shopSlice'
import orderReducer from '../features/counter/orderSlice'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
    reducer: {
        cartReducer,
        shopReducer,
        orderReducer,
        counterReducer,
    }
})