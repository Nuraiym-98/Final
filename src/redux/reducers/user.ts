import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type formType = {
    agree: boolean,
    confirm: string,
    email: string,
    gender: string,
    name: string,
    password: string,
    phone: string,
    surname: string
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: [],
        filter: {},
        error: '',
        status: ''
    },
    reducers: {
        addUser: (state,action) => {
            state.data = action.payload
        }
    },
    extraReducers: {},
})

export const {addUser} = userSlice.actions
export default userSlice.reducer