import React, {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {chimpokodexRandom} from "../../../stores";
import {AuthContext} from "../../../contexts";
import styles from "./ChoiceStarter.module.css"
import {CardChoiceStarter, StatsJauge} from "../../molecules";

const ChoiceStarter = () => {
    const authContext = useContext(AuthContext);
    const [sendApi, setSendApi] = useState(false);
    const dispatch = useDispatch();
    const apiReturn = useSelector((state) => {
        return state.chimpokodex;
    });
    const [aStarters, setAStarters] = useState([]);

    useEffect(() => {
        if (apiReturn.status === "succeed") {
            setAStarters(apiReturn.auth);
        } else if (apiReturn.status === "error") {
            if (apiReturn.auth.code === 401) {
                if (apiReturn.auth.message === "Expired JWT Token") {
                    authContext.setAuth(false);
                }
            }
        }
    }, [apiReturn]);

    useEffect(() => {
        if (!sendApi) {
            dispatch(chimpokodexRandom());
            setSendApi(true)
        }
    }, [sendApi]);

    const handlerChoiceStarter = () => {
        console.log("cgberhi");
    };

    const CardBody = (chimpokodexProps) => {
        const chimpokodex = chimpokodexProps.chimpokodexProps;
        return (
            <div className={styles["card-body"]}>
                <StatsJauge minValue={chimpokodex.minPv} maxValue={chimpokodex.maxPv} title={"Pv"} margin={"12px 0 0 0"}/>
                <StatsJauge minValue={chimpokodex.minAttack} maxValue={chimpokodex.maxAttack} title={"Attaque"} margin={"12px 0"}/>
                <StatsJauge minValue={chimpokodex.minDefense} maxValue={chimpokodex.maxDefense} title={"Defense"} margin={"0 0 12px 0"}/>
            </div>
        );
    }

    return (
        <>
            <div className={styles["starter-choice"]}>
                {aStarters.map((element, index) => (
                    <CardChoiceStarter key={index} element={element} handler={handlerChoiceStarter}>
                        <CardBody chimpokodexProps={element}/>
                    </CardChoiceStarter>
                ))}
            </div>
        </>
    );

}

export default ChoiceStarter;