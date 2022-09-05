import { createSlice } from "@reduxjs/toolkit";

export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: {
    value: "Starter",
  },
  reducers: {
    setSubscription: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSubscription } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
