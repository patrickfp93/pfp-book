import { SliceCaseReducers, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";


export type AppAspectState = "expand" | "collapse";
// Define the initial state using that type
const initialState: AppAspectState = 'expand';

export const aspectSlice = createSlice<AppAspectState, SliceCaseReducers<AppAspectState>, "aspect">({
  name: 'aspect',
  initialState: initialState,
  reducers: {
    toggleAspect: (state) => {
      switch (state) {
        case "expand":
          return "collapse";
        case "collapse":
          return "expand";
      }
    }
  }
});

export const { toggleAspect } = aspectSlice.actions;
export const selectAspect = (state: RootState) => state.aspect;
export default aspectSlice.reducer;
