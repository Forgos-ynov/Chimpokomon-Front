import React, {createContext} from "react";
import {Auth} from "../pages";
import functions from "../functions";

const AuthContext = createContext(!!functions.getCookie());

const AuthProvider = ({value, ...props}) => {
    return (
        <AuthContext.Provider value={value}>
            {value.isAuth ? props.children : <Auth/>}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}