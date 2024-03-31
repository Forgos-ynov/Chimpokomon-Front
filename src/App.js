import React, {useContext, useState} from "react";
import "./App.css";
import {ThemeProvider} from "styled-components";
import {AuthContext, AuthProvider, NightProvider} from "./contexts";
import {Provider} from "react-redux";
import {store} from "./stores";
import {day, night, theme} from "./config";
import functions from "./functions";
import {Accueil, Auth} from "./pages";

function App() {
    const [page, setPage] = useState("chili");
    const authContext = useContext(AuthContext);
    const [isAuth, setIsAuth] = useState(authContext);
    const [isNightMode, setIsNightMode] = useState(false)

    const invert = () => {
        return {...theme, ...(isNightMode ? day : night)};
    };

    const handlerAuth = (token) => {
        if (typeof token === "string" && token.trim() !== "")
        {
            setIsAuth(true);
            functions.setCookie(token, 10);
        } else
        {
            setIsAuth(false);
            functions.deleteCookie()
        }
    }

    const handlerNightMode = () => {
        setIsNightMode(!isNightMode);
    }

    const renderPage = () => {
        switch (page) {
            default:
            case "accueil":
                return <Accueil handlerPage={handlerPage} handlerAuth={handlerAuth} handlerNightMode={handlerNightMode}/>
                break;

            case "logout":
                return <Auth/>
                break;
        }
    }

    const handlerPage = (pageName) => {
        setPage(pageName);
    }

    return (
        <Provider store={store}>
            <ThemeProvider theme={invert}>
                <NightProvider value={{
                    changeNightMode: () => setIsNightMode(!isNightMode),
                    nightMode: isNightMode
                }}>
                    <AuthProvider value={{
                        isAuth: isAuth,
                        setAuth: (auth) => handlerAuth(auth)
                    }}>
                        {renderPage()}
                    </AuthProvider>
                </NightProvider>
            </ThemeProvider>
        </Provider>
    );
}

export default App;