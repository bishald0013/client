import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const alertAuthApi = createApi({
    reducerPath: 'alertAuthApi',

    baseQuery: fetchBaseQuery({
        baseUrl: "https://fair-hen-bracelet.cyclic.app/api/alert",
    }),

    endpoints: (builder) => ({
        
        createAlert: builder.mutation({
            query: ({alertData, token}) => ({
                url: '/create/alert',
                method: 'POST',
                body: alertData,
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })
        }),

        getAlerts: builder.query({
            query: (token) => ({
                url: '/get/alert',
                method: 'GET',
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })
        })
    })
})

export const { useCreateAlertMutation, useGetAlertsQuery } = alertAuthApi
