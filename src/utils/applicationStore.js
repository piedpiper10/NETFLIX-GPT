import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
const applicationStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default applicationStore;
