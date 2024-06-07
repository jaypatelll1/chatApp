import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userToken: null,
  userInfo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserToken(state, action) {
      state.userToken = action.payload;
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserToken, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
