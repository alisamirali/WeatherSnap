import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import weatherSlice from "./weatherSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const pReducer = persistReducer(persistConfig, weatherSlice);

const store = configureStore({
  reducer: {
    weather: pReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false, // Disable the immutableCheck middleware
    }),
});

export default store;

export const persister = persistStore(store);
