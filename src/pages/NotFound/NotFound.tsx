import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {userType} from "../../models/models";

export const NotFound = () => {

    const {user}: any = useSelector<userType>(store => store.user)

    if(user.length === 0){
        return <Navigate to='/login'/>
    }

    return (
        <Navigate to='/'/>
    )
}