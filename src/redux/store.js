import { configureStore } from "@reduxjs/toolkit";
import subscriptionReducer from "./slices/subscriptionSlice";

export default configureStore({
  reducer: {
    subscription: subscriptionReducer,
  },
});