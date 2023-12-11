import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import profileSlice from "./slices/profileSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: combineReducers({
    auth: authSlice,
    profile: profileSlice,
    user: userSlice,
  }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
