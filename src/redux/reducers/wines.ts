import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {winesType} from "../../models/models";


export const wineSlice = createApi({
    reducerPath: "wines",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080'
    }),
    endpoints: build => ({
        getWines: build.query<Array<winesType>,any>({
            query: () => ({
                url: '/wines',
                 // params:{
                 //    q: search
                 // }
            })
        })
    })
})


export const {useGetWinesQuery} = wineSlice