import { configureStore } from '@reduxjs/toolkit';
import authenSlice from '../features/authentication/authenSlice';
import loadingSlice from '../features/loading/loadingSlice';
import postSlice from '../features/post/postSlice';
export const store = configureStore({
  reducer: {
    post: postSlice,
    authen: authenSlice,
    loading: loadingSlice
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
