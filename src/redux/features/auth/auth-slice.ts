import { createSlice } from "@reduxjs/toolkit";
interface AuthState {
  user: User | null;
  token: string | null;
}
interface User {
  id: string;
  username: string;
}
const initialState: AuthState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: { auth: AuthState }) =>
  state.auth.user;

export const selectCurrentToken = (state: { auth: AuthState }) =>
  state.auth.token;
