import { shopApi } from '../services/shopServices'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import shopReducer from '../features/shop/shopSlice'
import cartReducer from '../features/cart/cartSlice'
import orderReducer from '../features/order/orderSlice'
import counterReducer from '../features/counter/counterSlice'

const store = configureStore({
    reducer: {
        cartReducer,
        shopReducer,
        orderReducer,
        counterReducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch)

export default store