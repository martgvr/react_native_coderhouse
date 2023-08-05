import { createSlice } from "@reduxjs/toolkit";

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
        },
        signOut: (state) => {
            state.email = ''
            state.idToken = ''
        }
    }
})

export const { setUser, signOut } = userSlice.actions

export default userSlice.reducer