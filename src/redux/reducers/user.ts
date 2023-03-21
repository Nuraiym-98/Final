import {createSlice} from "@reduxjs/toolkit";
import {useToast} from "@chakra-ui/react";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: ''
    },
    reducers: {
        addUser: (state,action) => {
            state.user = action.payload
        },
        logout: (state,action) => {
            state.user = action.payload
        }
    }
})

export const {addUser,logout} = userSlice.actions
export default userSlice.reducer