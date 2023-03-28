import {configureStore} from "@reduxjs/toolkit";
import user from "./reducers/user";
import {wineSlice} from "./reducers/wines";
import {setupListeners} from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        user: user,
        [wineSlice.reducerPath]: wineSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(wineSlice.middleware)
})

export default store

setupListeners(store.dispatch)

