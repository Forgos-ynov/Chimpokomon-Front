import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const playlistSlice = createSlice({
    name: "playlist",
    initialState: {
        playlists: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPlaylists.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchPlaylists.fulfilled, (state, action) => {
                state.status = "succeed";
                state.playlists = action.payload;
            })
            .addCase(fetchPlaylists.rejected, (state, action) => {
                state.status = "failed";
            });
    },
});

const fetchPlaylists = createAsyncThunk(
    "playlist/fetchPlaylist",
    async (payload) => {
        const config = {
            url: "http://127.0.0.1:8000/api/login_check",
            method: "post",
            data: {
                "username": "admin",
                "password": "password"
            }
        };
        const response = await axios(config)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return response.data;
    }
);

export {playlistSlice, fetchPlaylists}