import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import analyticsReducer from './analyticsSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    analytics: analyticsReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
