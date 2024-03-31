import React from "react";
import {styled} from "styled-components";
import styles from "./Button.module.css"

const StyledButton = styled.button`
    width: ${(props) => (props.width ? props.width : "")};
    height: ${(props) => (props.height ? props.height : "")};
    background: ${(props) => (props.background ? props.background : props.theme.secondary)};
    color: ${(props) => (props.color ? props.color : props.theme.primary)};
`;

const Button = ({icon = <></>, text = "", ...props}) => {
    return (
        <StyledButton {...props} className={styles["button"]}
                      style={{fontSize: text === "" && icon !== undefined ? "24px" : "16px"}}>
            {icon}
            {text}
        </StyledButton>
    );
};

export default Button;