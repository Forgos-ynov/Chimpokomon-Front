import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {api} from "../config";
import functions from "../functions";

const token = functions.getCookie();

const userSlice = createSlice({
    name: "user",
    initialState: {
        auths: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            // Partie récupération de la team
            .addCase(userTeam.pending, (state) => {
                state.status = "loading";
            })
            .addCase(userTeam.fulfilled, (state, action) => {
                const status = action.payload.status;
                state.status = status === 200 ? "succeed" : status === 204 ? "NoTeam" : "error";
                state.auth = action.payload;
            })
            .addCase(userTeam.rejected, (state) => {
                state.status = "failed";
            })
    },
});

const userTeam = createAsyncThunk(
    "user/userTeam",
    async () => {
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const config = {
            url: `${api.url}/api/users/team`,
            method: "get",
            headers: headers
        };

        try {
            const response = await axios(config);

            if (response.status === 200 || response.status === 204) {
                let responseData = typeof response.data === 'object' && response.data !== null ? response.data : {};
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

export {userSlice, userTeam}