import { configureStore } from '@reduxjs/toolkit';
import authenSlice from '../features/authentication/authenSlice';
import postSlice from '../features/post/postSlice';
export const store = configureStore({
  reducer: {
    post: postSlice,
    authen: authenSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
});
