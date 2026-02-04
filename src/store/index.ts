import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import userReducer from './slices/userSlice';
import battleReducer from './slices/battleSlice';
import challengeReducer from './slices/challengeSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    battle: battleReducer,
    challenge: challengeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types for socket connections
        ignoredActions: ['battle/setSocket'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.socket'],
        // Ignore these paths in the state
        ignoredPaths: ['battle.socket'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks for better TypeScript support
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
