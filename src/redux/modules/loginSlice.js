import { createSlice } from "@reduxjs/toolkit";

const accessToken = sessionStorage.getItem("accesstoken");
const initialState = {
  isLogin: !!accessToken,
};

const isLoginSlice = createSlice({
  name: "isLogin",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLogin = true;
    },
    logOff: (state) => {
      state.isLogin = false;
      sessionStorage.removeItem("accesstoken");
    },
  },
});

export const { logIn, logOff } = isLoginSlice.actions;
export default isLoginSlice.reducer;
