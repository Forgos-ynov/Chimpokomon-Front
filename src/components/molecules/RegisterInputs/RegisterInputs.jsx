import React from "react";
import {InputText} from "../../atoms";
import styles from "./RegsiterInputs.module.css";

const LoginInputs = ({
                         onChangePassword, passwordValue,
                         onChangePasswordVerify, passwordVerifyValue,
                         onChangeUsername, usernameValue
                     }) => {
    return (
        <div className={styles["register-inputs"]}>
            <InputText onChange={onChangeUsername} value={usernameValue} placeholder={"Username"}/>
            <div className={styles["register-passwords"]}>
                <InputText onChange={onChangePassword} value={passwordValue} placeholder={"Mot de passe"}
                           type={"password"}/>
                <InputText onChange={onChangePasswordVerify} value={passwordVerifyValue}
                           placeholder={"Confirmation du mot de passe"} type={"password"}/>
            </div>
        </div>
    )
}

export default LoginInputs;