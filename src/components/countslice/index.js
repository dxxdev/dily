import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrment: (fuck) => {
      console.log('salom');
    },
    deincrment: (state) => {
      state.value -= 1;
    },
    incrementByAmout: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrment, deincrment, incrementByAmout } = counterSlice.actions;
export default counterSlice.reducer;
