import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 1
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            if (state.value > 1) {
                state.value -= 1
            }
        },
        incrementByAmount: (state, action) => {
            state.value += Number(action.payload)
        },
        resetAmount: state => {
            state.value = 1
        }
    }
})

export default counterSlice.reducer
export const { increment, decrement, incrementByAmount, resetAmount } = counterSlice.actions