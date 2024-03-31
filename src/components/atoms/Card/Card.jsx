import React from "react";
import {styled} from "styled-components";
import styles from "./Card.module.css";

const CardContainer = styled.div`
    cursor: ${(props) => props.cursor ?? "pointer"};
    margin: ${(props) => props.margin ?? ""};
    width: ${(props) => props.width ?? "200px"};
    border: ${(props) => props.border ?? "1px solid black"};
    border-radius: ${(props) => props.borderRadius ?? "8px"};
    background-color: ${(props) => props.backgroundColor ?? (props.theme.secondary ?? "white")};
    color: ${(props) => props.color ?? (props.theme.primary ?? "white")};
`;

const CardTitle = styled.div`
    font-weight: ${(props) => props.cardTitle?.fontWeight ?? "500"};
    font-size: ${(props) => props.cardTitle?.fontSize ?? "16px"};
    text-align: ${(props) => props.cardTitle?.textAlign ?? "center"};
    margin: ${(props) => props.cardTitle?.margin ?? "4px"};
    background-color: ${(props) => props.backgroundColor ?? props.theme.secondary};
    color: ${(props) => props.color ?? props.theme.primary};
`;


const Card = ({urlImage, title, children, handler, ...props}) => {
    return (
        <CardContainer className={styles["card-container"]} {...props} onClick={handler}>
            <CardTitle>{title}</CardTitle>
            <div className={styles["card-image"]} style={{backgroundImage: `url("${urlImage}")`}}/>
            <div>
                {children}
            </div>
        </CardContainer>
    );
};

export default Card;