import {configureStore} from "@reduxjs/toolkit";
import user from "./reducers/user";
import {wineSlice} from "./reducers/wines";

const store = configureStore({
    reducer: {
        user: user,
        [wineSlice.reducerPath]: wineSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(wineSlice.middleware)
})

export default store