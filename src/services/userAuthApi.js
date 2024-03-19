import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const userAuthApi = createApi({
    reducerPath: 'userAuthApi',

    baseQuery: fetchBaseQuery({
        baseUrl: "https://fair-hen-bracelet.cyclic.app/api/user",
        // baseUrl: "http://localhost:5001/api/user",
    }),

    endpoints: (builder) => ({
        
        registerUser: builder.mutation({
            query: (credentials) => ({
                url: '/signup',
                method: 'POST',
                body: credentials,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),

        loginUser: builder.mutation({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),

        resetPassword: builder.mutation({
            query: (credentials) => ({
                url: '/reset/password/link',
                method: 'PATCH',
                body: credentials,
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        }),

        setNewPassword: builder.mutation({
            query: ({credentials, id}) => ({
                url: `/set/password/${id}`,
                method: 'PATCH',
                body: credentials,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),

        logInAdmin: builder.mutation({
            query: (data) => ({
                url: '/login/admin',
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),

        getAllAlerts: builder.query({
            query: () => ({
                url: '/getAlerts',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })

    })
})

export const { useRegisterUserMutation, useLoginUserMutation, useResetPasswordMutation, useSetNewPasswordMutation, useLogInAdminMutation, useGetAllAlertsQuery } = userAuthApi
