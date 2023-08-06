import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "User",
    initialState: {
        email: '',
        idToken: '',
        localID: '',
        profileImage: '',
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
        },
        saveImage: (state, action) => {
            state.profileImage = action.payload
        }
    }
})

export const { setUser, signOut, saveImage } = userSlice.actions

export default userSlice.reducer