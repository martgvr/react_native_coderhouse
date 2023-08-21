import { createSlice } from "@reduxjs/toolkit"

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        darkMode: 'false',

        warningCode: '',
        warningTitle: '',
        warningStatus: false,
        warningDescription: '',

    },
    reducers: {
        setDarkMode: (state, action) => {
            state.darkMode = action.payload
        },
        setWarning: (state, action) => {
            const { warningCode, warningTitle, warningStatus, warningDescription } = action.payload

            state.warningCode = warningCode
            state.warningTitle = warningTitle
            state.warningStatus = warningStatus
            state.warningDescription = warningDescription
        },
    }
})

export default appSlice.reducer
export const { setDarkMode, setWarning } = appSlice.actions