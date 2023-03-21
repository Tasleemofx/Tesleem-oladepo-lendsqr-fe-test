import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import t

export const lendsqrApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        // Api Baseurl
        baseUrl: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/'}),
        endpoints: (builder) =>({
            // Get all users
            getAllUsers: builder.query({
                query: () => `users`,
            }),

            // Get single product using product id
            getSingleUser: builder.query({
                query: (productId) => `users/${productId}`
            })
        })
})

export const { useGetAllUsersQuery, useGetSingleUserQuery } = lendsqrApi;