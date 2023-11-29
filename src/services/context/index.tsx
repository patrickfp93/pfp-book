import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import aspectReducer from "./slices/aspectSlice";
import { Transition } from "framer-motion";


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    aspect : aspectReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export const TRANSTION_DEFAULT : Transition = {
  duration : 0.4
}


