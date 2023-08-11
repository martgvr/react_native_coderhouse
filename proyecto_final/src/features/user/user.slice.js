import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "User",
    initialState: {
        email: '',
        idToken: '',
        localID: '',
        profileImage: '',
        location: {
            latitude: "",
            longitude: "",
            address: ""
        },
    },
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email
            state.idToken = action.payload.idToken
            state.localID = action.payload.localID
            state.profileImage = action.payload.profileImage
        },
        signOut: (state) => {
            state.email = ''
            state.idToken = ''
            state.localID = ''
            state.profileImage = ''
            state.location.address = ''
            state.location.latitude = ''
            state.location.longitude = ''
        },
        saveImage: (state, action) => {
            state.profileImage = action.payload
        },
        setUserLocation: (state, action) => {
            state.location = action.payload
        }
    }
})

export default userSlice.reducer
export const { setUser, signOut, saveImage, setUserLocation } = userSlice.actions