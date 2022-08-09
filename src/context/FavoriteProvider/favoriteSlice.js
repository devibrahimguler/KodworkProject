import { createSlice } from "@reduxjs/toolkit";
import AsyncStore from "@react-native-async-storage/async-storage";

const favoriteSlice = createSlice({
    name: "favorite",

    initialState: {
        favoriteJobs: [],
    },

    reducers: {
        add_list: (state, action) => {
            const { item } = action.payload;
            for (let i = 0; i < state.favoriteJobs.length; i++) {
                if (state.favoriteJobs[i].id == item.id) {
                    return { ...state };
                }
            }
            const newList = [...state.favoriteJobs, item];
            AsyncStore.setItem("@FAVORİTE", JSON.stringify(newList));
            return { ...state, favoriteJobs: newList }
        },

        remove_list: (state, action) => {
            const { id } = action.payload;
            const newList = state.favoriteJobs.filter((item) => item.id !== id);
            AsyncStore.setItem("@FAVORİTE", JSON.stringify(newList));
            return { ...state, favoriteJobs: newList }
        },
    },
});

export const { add_list, remove_list } = favoriteSlice.actions;

export default favoriteSlice.reducer;