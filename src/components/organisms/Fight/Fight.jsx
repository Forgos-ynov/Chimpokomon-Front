import React from "react";
import {Card} from "../../atoms";
import {api} from "../../../config";
import styles from "./Fight.module.css"

const Fight = ({chimpokomon, ...props}) => {

    return (
        <>
            <div className={styles["fight-container"]}>
                <div className={styles["fight-element"]}>
                    <Card urlImage={`${api.urlPicture}/${chimpokomon.chimpokomon.picture.realPath}`}
                          title={chimpokomon.chimpokomon.name}>
                        <div style={{height: "16px"}}></div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Fight