import Orders from "../../data/orders.json"
import { createSlice } from "@reduxjs/toolkit"

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orderData: Orders,
    },
    reducers: {

    }
})

export default orderSlice.reducer
// export const {  } = orderSlice.actions