import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  snackId : 0,
  lat: "",
  lng : "",
};

const snackSilce = createSlice({
  name: "snack",
  initialState,
  reducers: {
    fetchSnack: (state, action) => {
      state = [...state,action]
    },
    deleteSnack: (snackId) => {

    },
  },
});

export const { fetchSnack, deleteSnack } = snackSilce.actions;
export default snackSilce.reducer;
