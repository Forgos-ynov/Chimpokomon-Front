import { configureStore } from "@reduxjs/toolkit";
import {authSlice, login, register} from "./AuthStore";
import {userSlice, userTeam} from "./UserStore";
import {chimpokodexSlice, chimpokodexRandom} from "./ChimpokodexStore"
import {teamSlice, createTeam} from "./TeamStore";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
        chimpokodex: chimpokodexSlice.reducer,
        team: teamSlice.reducer,
    },
});

export {store, login, register, userTeam, chimpokodexRandom, createTeam}