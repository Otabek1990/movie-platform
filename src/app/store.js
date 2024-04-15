import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "@/features/modalSlice";
import HeaderReducer from "@/features/headerSlice";
import { categoryApi } from "@/services/categoryApi";
import { genresApi } from "@/services/genresApi";
import { cinemaApi } from "@/services/cinemaApi";

const combinedReducer = {
  modal: ModalReducer,
  header: HeaderReducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [genresApi.reducerPath]: genresApi.reducer,
  [cinemaApi.reducerPath]: cinemaApi.reducer,
};

export default configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoryApi.middleware,
      genresApi.middleware,
      cinemaApi.middleware
    ),
});
