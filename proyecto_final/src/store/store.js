import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { shopApi } from '../services/shop.service'
import { authApi } from '../services/auth.service'

import appReducer from '../features/app/app.slice'
import shopReducer from '../features/shop/shop.slice'
import cartReducer from '../features/cart/cart.slice'
import userReducer from '../features/user/user.slice'
import counterReducer from '../features/counter/counter.slice'

const store = configureStore({
    reducer: {
        appReducer,
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