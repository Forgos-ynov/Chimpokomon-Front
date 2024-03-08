import { createSlice, configureStore } from "@reduxjs/toolkit";
import {playlistSlice, fetchPlaylists} from "./AuthStore";

// const initialTodoState = [
//     {
//         id: 0,
//         textInputValue: "Se calcifier la glande pinéale",
//         checkBoxValue: true,
//     },
//     {
//         id: 1,
//         textInputValue: "Se calcifier la glande pinéale",
//         checkBoxValue: false,
//     },
//     {
//         id: 2,
//         textInputValue: "Apprtendre le nolm des fleurs",
//         checkBoxValue: false,
//     },
// ];
//
// const todoSlice = createSlice({
//     name: "todo",
//     initialState: initialTodoState,
//     reducers: {
//         addTask: (state, action) => {
//             const newTodoTask = {
//                 id: Date.now(),
//                 textInputValue: action.payload,
//                 checkBoxValue: false,
//             };
//             state.push(newTodoTask);
//         },
//         toggleTask: (state, action) => {
//             const task = state.find((t) => {
//                 return t.id === action.payload
//             });
//             task.checkBoxValue = !task.checkBoxValue;
//         },
//         deleteTask: (state, action) => {
//           return state.filter((t) => t.id !== action.payload);
//         },
//     },
// });

const store = configureStore({
    reducer: {
        // todo: todoSlice.reducer,
        playlists: playlistSlice.reducer,
    },
});

export {store, fetchPlaylists}

// export const { addTask, toggleTask, deleteTask } = todoSlice.actions;