import {RegisterInputs} from "../../molecules";
import React, {useContext, useEffect, useState} from "react";
import styles from "./Register.module.css";
import {Button} from "../../atoms";
import {useDispatch, useSelector} from "react-redux";
import {AuthContext} from "../../../contexts";
import {register} from "../../../stores";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const [error, setError] = useState("");
    const authContext = useContext(AuthContext);
    const dispatch = useDispatch();
    const apiReturn = useSelector((state) => {
        return state.auth;
    });

    useEffect(() => {
        if (apiReturn.status === "succeed") {
            authContext.setAuth(apiReturn.auth.token);
        } else if (apiReturn.status === "error") {
            setError(apiReturn.auth.message)
        }
    }, [apiReturn, authContext]);

    useEffect(() => {
        if (password !== passwordVerify) {
            setError("Les mots de passe doivent être identiques.");
        } else {
            setError("");
        }
    }, [password, passwordVerify]);

    const handlerRegister = () => {
        if (username.trim() !== "" && password.trim() !== "" && passwordVerify.trim() !== ""
            && password === passwordVerify) {
            dispatch(register({"username": username, "password": password}));
        }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handlePasswordVerify = (e) => {
        setPasswordVerify(e.target.value);
    };

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    return (
        <>
            <RegisterInputs passwordValue={password} onChangePassword={handlePassword}
                            usernameValue={username} onChangeUsername={handleUsername}
                            passwordVerifyValue={passwordVerify} onChangePasswordVerify={handlePasswordVerify}/>
            <div className={styles["register-error"]}>
                {error}
                <Button text={"Inscription"} onClick={handlerRegister} className={styles["register-button"]}/>
            </div>
        </>
    )
}

export default Register;