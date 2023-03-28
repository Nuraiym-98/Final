import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {winesType} from "../../models/models";


export const wineSlice  = createApi({
    reducerPath: "wines",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080'
    }),
    endpoints: build => ({
        getWines: build.query <Array<winesType> | undefined,void>({
            query: () => ({
                url: '/wines'
            })
        }),
        aboutWines: build.query<Array<winesType> | undefined, number | null>({
            query: (id: number) => ({
                url: `/wines?id=${id}`
            })
        })
    })
})


export const {useGetWinesQuery,useAboutWinesQuery} = wineSlice