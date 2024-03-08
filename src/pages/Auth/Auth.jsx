import React, {useEffect, useState} from "react";
import {Heading, Section} from "../../components/atoms";
import {useDispatch, useSelector} from "react-redux";
import {fetchPlaylists} from "../../stores";

const Auth = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();
    const apiReturn = useSelector((state) => {
        return state.playlists;
    });

    useEffect(() => {
        dispatch(fetchPlaylists());
    }, []);

    useEffect(() => {
        if (apiReturn.status === "succeed") {
            setIsLoaded(true);
        } else if (apiReturn.status === "error") {
            return;
        }
    }, [apiReturn]);
    const handler = () => {
        if(isLoaded) {
            console.log(apiReturn.playlists.token)
            return <span> Ohoh</span>
        }else {
            return <span>Ahah</span>
        }

    }
    return (
        <Section>
            <Heading> {handler()} Login</Heading>
        </Section>
    )
}

export default Auth