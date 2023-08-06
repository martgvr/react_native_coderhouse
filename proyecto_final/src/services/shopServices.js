import { DB_URL } from "../database/firebaseConfig"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({ baseUrl: DB_URL }),
    endpoints: (builder) => ({
        getProducts: builder.query({ query: () => `products.json` }),
        getCategories: builder.query({ query: () => `categories.json` }),

        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
            
            transformResponse: (response) => {
                const productsTransformed = Object.values(response)
                return productsTransformed
            }
        }),
        getProductById: builder.query({
            query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
            
            transformResponse: (response) => {
                const productTransformed = Object.values(response).pop()
                return (productTransformed)
            }
        }),
        postCart: builder.mutation({
            query: (order) => ({
                url: `orders.json`,
                method: `POST`,
                body: order
            })
        }),
        getProfileImage: builder.query({
            query: (localID) => `profileImages/${localID}.json`,
        }),
        postProfileImage: builder.mutation({
            query: ({image, localID}) => ({
                url: `profileImages/${localID}.json`,
                method: "PUT",
                body: {
                    image: image
                },
            }),
        }),
    })
})

export const { 
    useGetCategoriesQuery, 
    useGetProductsQuery, 
    useGetProductsByCategoryQuery, 
    useGetProductByIdQuery, 
    usePostCartMutation,     
    useGetProfileImageQuery,
    usePostProfileImageMutation,
} = shopApi