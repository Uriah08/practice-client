import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
    }),
    tagTypes: [],
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: (userData) => ({
              url: "/api/login",
              method: "POST",
              body: userData,
              headers: {
                "Content-Type": "application/json",
              },
            }),
        }),
    })
})

export const {

} = api