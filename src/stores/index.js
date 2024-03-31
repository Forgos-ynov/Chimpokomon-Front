import { configureStore } from "@reduxjs/toolkit";
import {authSlice, login, register} from "./AuthStore";
import {userSlice, userTeam} from "./UserStore";
import {chimpokodexSlice, chimpokodexRandom} from "./ChimpokodexStore"

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
        chimpokodex: chimpokodexSlice.reducer,
    },
});

export {store, login, register, userTeam, chimpokodexRandom}