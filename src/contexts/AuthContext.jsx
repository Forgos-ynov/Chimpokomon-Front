import React, {createContext} from "react";

const AuthContext = createContext({"token": ""});

const AuthProvider = ({value, ...props}) => {
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}