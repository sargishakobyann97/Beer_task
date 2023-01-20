import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { constants } from "../../assets/constants";

const initialState = {
    loading: false,
    page: 1,
    beersList: [],
};

export const getBeerAsync = createAsyncThunk(`${constants.beers}/getBeerAsync`, async (arg) => {
    if (arg.beerName === "") return [];
    const response = await axios.get(constants.API_URL + `?beer_name=${arg.beerName}&page=${arg.page}&per_page=10`);

    if (response.data) {
        return {
            data: response.data,
            page: arg.page,
        };
    }
    throw new Error("Error message)");
});

const beersSlice = createSlice({
    name: constants.beers,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBeerAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBeerAsync.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload?.data?.length) {
                    state.page = action.payload?.page || 1;
                }
                state.beersList = action.payload?.data || [];
            })
            .addCase(getBeerAsync.rejected, (state, action) => {
                state.loading = false;
                state.page = 1;
                state.beersList = [];
            });
    },
});

export const {} = beersSlice.actions;
export default beersSlice.reducer;
