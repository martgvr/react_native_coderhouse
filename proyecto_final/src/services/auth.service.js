import { API_KEY } from "../database/firebase.config"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://identitytoolkit.googleapis.com/v1` }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (auth) => ({
                url: `accounts:signUp?key=${API_KEY}`,
                method: `POST`,
                body: auth
            }),
        }),
        signIn: builder.mutation({
            query: (auth) => ({
                url: `accounts:signInWithPassword?key=${API_KEY}`,
                method: `POST`,
                body: auth
            }),
        }),
    })
})

export const { useSignInMutation, useSignUpMutation } = authApi