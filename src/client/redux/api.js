import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const backendURL = "/";

const api = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({
        baseUrl: backendURL,
    }),

    endpoints: (builder) => ({
        //GET ALL
        getAll: builder.query({
            query: () => ({
                url: "/api/data",
                method: "GET",
            })
        }),
    })
})

export default api;

export const {
    useGetAllQuery
} = api