import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { shopApi } from '../services/shopServices'
import { authApi } from '../services/authServices'

import shopReducer from '../features/shop/shopSlice'
import cartReducer from '../features/cart/cartSlice'
import userReducer from '../features/user/userSlice'
import counterReducer from '../features/counter/counterSlice'

const store = configureStore({
    reducer: {
        cartReducer,
        shopReducer,
        userReducer,
        counterReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch)

export default store