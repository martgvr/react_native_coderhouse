import { createSlice } from "@reduxjs/toolkit"

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        darkMode: 'false',
        warningCode: '',
        warningTitle: '',
        warningStatus: false,
        warningDescription: '',
        alertType: '',
        alertMessage: '',
        alertStatus: false,
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
        setAlert: (state, action) => {
            const { alertType, alertStatus, alertMessage } = action.payload
            state.alertType = alertType
            state.alertStatus = alertStatus
            state.alertMessage = alertMessage
        }
    }
})

export default appSlice.reducer
export const { setDarkMode, setWarning, setAlert } = appSlice.actions