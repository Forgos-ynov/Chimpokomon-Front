import React, {useState} from "react";
import "./App.css";
import {ThemeProvider} from "styled-components";
import {NightProvider} from "./contexts";
import {Provider} from "react-redux";
import {store} from "./stores";
import {AuthProvider} from "./providers";
// import {FaCarrot, FaLemon, FaPepperHot} from "react-icons/fa";
// import {Menu} from "./components/organisms";
// import {NightModeSwitch} from "./components/molecules";
// import {Heading, Section} from "./components/atoms";
// import ToDoList from "./components/organisms/ToDoList/ToDoList";
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import {Auth, Register} from "./pages";
// import AuthRoute from "./components/AuthRoute";
//
// const menuData = [
//     {
//         icon: <FaPepperHot></FaPepperHot>,
//         text: "Chili",
//         value: "chili",
//     },
//     {
//         icon: <FaCarrot></FaCarrot>,
//         text: "Carrot",
//         value: "carrot",
//     },
//     {
//         icon: <FaLemon></FaLemon>,
//         text: "Lemon",
//         value: "lemon",
//     },
// ];

const day = {
    primary: "white",
    secondary: "#282c34"
};

const night = {
    primary: "#282c34",
    secondary: "white"
};

function App() {
    const [page, setPage] = useState("chili");
    const [isAuth, setIsAuth] = useState(false);
    const [isNightMode, setIsNightMode] = useState(false)

    const invert = () => (isNightMode ? night : day);

    const handlerNightMode = () => {
        setIsNightMode(!isNightMode);
    }

    const renderPage = () => {
        switch (page) {
            case "carrot":
                return <div>Carrot</div>
                break;
            case "lemon":
                return <div>Lemon</div>
                break;
            default:
                return <div>Chili</div>
                break;
        }
    }

    const handler = (pageName) => {
        setPage(pageName);
    }

    const hanlderAuth = (isAuth) => {
        setIsAuth(isAuth);
    }



    return (
        <Provider store={store}>
            <ThemeProvider theme={invert}>
                <NightProvider value={{
                    changeNightMode: () => setIsNightMode(!isNightMode),
                    nightMode: isNightMode
                }}>
                    <AuthProvider>
                        Bonjour
                    </AuthProvider>

                    {/*<NightModeSwitch handler={handlerNightMode}/>*/}
                    {/*<Menu data={menuData} handler={handler} hanlderAuth={hanlderAuth} isAuth={isAuth}/>*/}
                    {/*<Section>*/}
                    {/*    <Heading>Hello h1</Heading>*/}
                    {/*</Section>*/}
                    {/*<ToDoList data={""}/>*/}
                    {/*{renderPage()}*/}
                </NightProvider>
            </ThemeProvider>
        </Provider>
    );
}

export default App;