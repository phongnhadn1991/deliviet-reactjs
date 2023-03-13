import { configureStore } from '@reduxjs/toolkit';
import authenSlice from '../features/authentication/authenSlice';
import postSlice from '../features/post/postSlice';
export const store = configureStore({
  reducer: {
    post: postSlice,
    authen: authenSlice
  },
});
