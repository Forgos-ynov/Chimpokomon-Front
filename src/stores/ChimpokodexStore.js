import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {api} from "../config";
import functions from "../functions";

const token = functions.getCookie();

const chimpokodexSlice = createSlice({
    name: "chimpokodex",
    initialState: {
        auths: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            // Partie récupération des chimpokodex aléatoirement
            .addCase(chimpokodexRandom.pending, (state) => {
                state.status = "loading";
            })
            .addCase(chimpokodexRandom.fulfilled, (state, action) => {
                state.status = action.payload.status === 200 ? "succeed" : "error";
                state.auth = action.payload;
            })
            .addCase(chimpokodexRandom.rejected, (state) => {
                state.status = "failed";
            })
    },
});

const chimpokodexRandom = createAsyncThunk(
    "chimpokodex/chimpokodexRandom",
    async () => {
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const config = {
            url: `${api.url}/api/chimpokodex/random`,
            method: "get",
            headers: headers
        };

        try {
            const response = await axios(config);

            if (response.status === 200) {
                let responseData = response.data;
                responseData.status = response.status;
                return responseData;
            } else {
                return response.data;
            }
        } catch (error) {
            return error.response.data;
        }
    }
);

export {chimpokodexSlice, chimpokodexRandom}