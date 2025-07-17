
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IUser } from './type';

interface AuthState {
  user: IUser | null;
  token: string | null;
  loading: boolean;
}

const userFromStorage = localStorage.getItem('user');
const tokenFromStorage = localStorage.getItem('token');

const initialState: AuthState = {
  user: userFromStorage ? JSON.parse(userFromStorage) : null,
  token: tokenFromStorage ?? null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<{ user: IUser; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;

      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', action.payload.token);
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.loading = false;

      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
