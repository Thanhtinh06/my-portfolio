import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { manageBrandReducer } from "./manageBrand/slice";

export const store = configureStore({
  reducer: {
    manageBrands: manageBrandReducer,
  },
});
