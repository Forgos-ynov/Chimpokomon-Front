import React, { useState } from "react";
import { Button } from "../../atoms";

const MenuButton = ({ handlerPage, data, icon = <></>, ...props }) => {
    const [colorButton, setColorButton] = useState(false);

    const handlePageChange = () => {
        handlerPage(data);
    };

    return (
        <Button
            onClick={handlePageChange}
            color={colorButton}
            width={"64px"}
            height={"64px"}
            text={props.children}
            icon={icon}
        ></Button>
    );
};

export default MenuButton;