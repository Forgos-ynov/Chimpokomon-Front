import React, {useContext, useEffect, useState} from "react";
import {Button, Heading} from "../../components/atoms";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../stores";
import {AuthContext} from "../../contexts";
import {LoginInputs} from "../../components/molecules";
import styles from "./Auth.module.css"


const Auth = () => {
    const dispatch = useDispatch();
    const apiReturn = useSelector((state) => {
        return state.auth;
    });
    const authContext = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [sendForm, setSendForm] = useState(false);
    const [error, setError] = useState("");
    const [isLoginPage, setIsLoginPage] = useState(true)

    useEffect(() => {
        if (username.trim() !== "" && password.trim() !== "") {
            dispatch(login({"username": username, "password": password}));
        }

    }, [dispatch, sendForm]);

    useEffect(() => {
        if (apiReturn.status === "succeed") {
            authContext.setAuth(apiReturn.auth.token);
        } else if (apiReturn.status === "error") {
            setError(apiReturn.auth.message)
        }
    }, [apiReturn, authContext, error]);

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handlerLogin = () => {
        setSendForm(!sendForm);
    }

    return (
        <div>
            <Heading className={styles["title"]}>
                <span onClick={() => {setIsLoginPage(true)}}>Connexion</span>
                <span> | </span>
                <span onClick={() => {setIsLoginPage(false)}}>Inscription</span>
            </Heading>
            {isLoginPage ? (
                <>
                    <LoginInputs onChangeUsername={handleUsername} usernameValue={username}
                                 onChangePassword={handlePassword} passwordValue={password}/>
                    <div className={styles["login-error"]}>
                        {error}
                        <Button text={"Connexion"} onClick={handlerLogin} className={styles["login-button"]}/>
                    </div>
                </>
            ) : (
                <>

                </>
            )}
        </div>
    )
}

export default Auth