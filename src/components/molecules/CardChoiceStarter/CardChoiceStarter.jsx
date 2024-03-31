import React from "react";
import {Card} from "../../atoms";
import {api} from "../../../config";

const CardChoiceStarter = ({children, handler, ...props}) => {
    return (
        <>
            <Card urlImage={`${api.urlPicture}/${props.element.picture.realPath}`} margin={"8px"}
                  title={props.element.name} handler={handler}>
                {children}
            </Card>
        </>
    );
}

export default CardChoiceStarter;