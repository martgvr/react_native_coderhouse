import { createSlice } from "@reduxjs/toolkit"

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        darkMode: 'false'
    },
    reducers: {
        setDarkMode: (state, action) => {
            state.darkMode = action.payload
        }
    }
})

export default appSlice.reducer
export const { setDarkMode } = appSlice.actions