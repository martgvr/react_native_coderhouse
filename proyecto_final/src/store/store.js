import { configureStore } from "@reduxjs/toolkit"

import shopReducer from '../features/counter/shopSlice'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
    reducer: {
        shopReducer,
        counterReducer
    }
})