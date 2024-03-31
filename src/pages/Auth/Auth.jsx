import React, {useState} from "react";
import {Heading} from "../../components/atoms";
import styles from "./Auth.module.css"
import {Login, Register} from "../../components/organisms";

const Auth = () => {
    const [isLoginPage, setIsLoginPage] = useState(true)

    return (
        <div>
            <Heading className={styles["title"]}>
                <span onClick={() => {setIsLoginPage(true)}}
                    style={{textDecoration: isLoginPage ? "underline" : "none"}}>Connexion</span>
                <span> | </span>
                <span onClick={() => {setIsLoginPage(false)}}
                      style={{textDecoration: isLoginPage ? "none" : "underline"}}>Inscription</span>
            </Heading>
            {isLoginPage
                ? (<Login/>)
                : (<Register/>)
            }
        </div>
    )
}

export default Auth