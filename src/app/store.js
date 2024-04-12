import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "../features/modalSlice"
import HeaderReducer from "../features/headerSlice"

export const store = configureStore({
  reducer: {
    modal:ModalReducer,
    header:HeaderReducer
  },
});
