import { configureStore } from "@reduxjs/toolkit";
import { constants } from "../assets/constants";
import beersSlice from "./features/beersSlice";

export const store = configureStore({
    reducer: {
        [constants.beers]: beersSlice,
    },
});
