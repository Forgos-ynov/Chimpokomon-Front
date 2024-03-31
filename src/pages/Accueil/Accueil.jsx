import React, {useContext, useEffect, useState} from "react";
import {ChoiceStarter, Menu} from "../../components/organisms";
import {useDispatch, useSelector} from "react-redux";
import {userTeam} from "../../stores";
import {AuthContext} from "../../contexts";

const Accueil = ({handlerPage, handlerAuth, handlerNightMode}) => {
    const menu = [];
    const authContext = useContext(AuthContext);
    const [sendApi, setSendApi] = useState(false);
    const dispatch = useDispatch();
    const apiReturn = useSelector((state) => {
        return state.user;
    });
    const [displayer, setDisplayer] = useState("")

    useEffect(() => {
        if (apiReturn.status === "succeed") {
            console.log("team result:", apiReturn)
        } else if (apiReturn.status === "NoTeam") {
            setDisplayer("NoTeam");
        } else if (apiReturn.status === "error") {
            if (apiReturn.auth.code === 401)
            {
                if (apiReturn.auth.message === "Expired JWT Token")
                {
                    authContext.setAuth(false);
                }
            }
        }
    }, [apiReturn]);

    useEffect(() => {
        if (!sendApi) {
            dispatch(userTeam());
            setSendApi(true)
        }
    }, [sendApi]);

    const handlerDisplayer = () => {
        switch (displayer) {
            default:
            case "NoTeam":
                return <ChoiceStarter/>
                break;
        }
    }

    return (
        <>
            <Menu handlerAuth={handlerAuth} data={menu} handlerPage={handlerPage} handlerNightMode={handlerNightMode}/>
            {handlerDisplayer()}
        </>
    );
}

export default Accueil;