import React from "react";
import {Auth} from "../pages";

const AuthProvider = ({children}) => {
    const isAuth = false;

    return (isAuth ? <div>{children}</div> : <Auth/>)
}

export default AuthProvider;