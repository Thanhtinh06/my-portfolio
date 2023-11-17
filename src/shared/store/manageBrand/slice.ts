import { createSlice } from "@reduxjs/toolkit";
import { manageBrands } from "./thunkAction";

type InitialState = {
  brandList?: [];
};

const initialState: InitialState = {
  brandList: [],
};

export const { reducer: manageBrandReducer, actions: manageBrandActions } =
  createSlice({
    name: "manageBrand",
    initialState,
    reducers: {},
    // extraReducers(builder) {
    //   builder.addCase(manageBrands.fulfilled, (state, action) => {
    //     state.brandList = action.payload;
    //   });
    // },
  });
