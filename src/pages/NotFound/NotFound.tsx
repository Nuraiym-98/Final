import React from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {userType} from "../../App";


export const NotFound = () => {

    const navigate = useNavigate()

    const {user}: any = useSelector<userType>(store => store.user)

    if(user === '') {
        return <Navigate to='/login'/>
    }

    return (
        <Navigate to='/'/>
    )
}