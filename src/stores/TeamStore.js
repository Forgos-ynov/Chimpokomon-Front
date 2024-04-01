import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {api} from "../config";
import functions from "../functions";

const token = functions.getCookie();

const teamSlice = createSlice({
    name: "team",
    initialState: {
        auths: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            // Partie création de la team
            .addCase(createTeam.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createTeam.fulfilled, (state, action) => {
                const status = action.payload.status;
                state.status = status === 200 ? "succeed" : status === 204 ? "NoTeam" : "error";
                state.auth = action.payload;
            })
            .addCase(createTeam.rejected, (state) => {
                state.status = "failed";
            })
    },
});

const createTeam = createAsyncThunk(
    "team/createTeam",
    async (payload) => {
        const {data} = payload

        const headers = {
            Authorization: `Bearer ${token}`
        };

        const config = {
            url: `${api.url}/api/teams/add`,
            method: "post",
            headers: headers,
            data: data
        };

        try {
            const response = await axios(config);

            if (response.status === 201) {
                let responseData = {};
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

export {teamSlice, createTeam}