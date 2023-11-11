import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAuthApi } from "../services/userAuthApi";
import { alertAuthApi } from "../services/alertAuthApi";

export const store = configureStore({
    reducer: {
        [userAuthApi.reducerPath]: userAuthApi.reducer,
        [alertAuthApi.reducerPath]: alertAuthApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAuthApi.middleware, alertAuthApi.middleware)
})

setupListeners(store.dispatch)