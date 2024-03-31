import React from "react";
import {MenuButton, NightModeSwitch} from "../../molecules";
import {Button} from "../../atoms";
import styles from "./Menu.module.css"

const Menu = ({data, handlerPage, handlerAuth, handlerNightMode}) => {
    const handlerLogout = () => {
        handlerAuth("");
        handlerPage("logout");
    }

    return (
        <div className={styles["menu"]}>
            {data.map((x, i) => {
                let {text, value} = x;
                return (
                    <>
                        <MenuButton key={i} handlerPage={handlerPage} data={value}>
                            {text}
                        </MenuButton>
                    </>
                )
            })}
            <Button onClick={handlerLogout} text={"Logout"} width={"64px"} height={"64px"}/>
            <NightModeSwitch handler={handlerNightMode}/>
        </div>
    );
};

export default Menu;