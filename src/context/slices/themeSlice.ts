import { SliceCaseReducers, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export type AppThemeState = "light" | "dark" | "high-contrast";

// Define the initial state using that type
export const initialState: AppThemeState = 'light';

export const themeSlice = createSlice<AppThemeState, SliceCaseReducers<AppThemeState>, "theme">({
  name: 'theme',
  initialState : initialState,
  reducers: {
    toggleTheme: (state) => {
      switch (state) {
        case "light":
          return "dark";
        case "dark":
          return "high-contrast";
        case "high-contrast":
          return "light";
      }
    }
}
});

export const { toggleTheme } = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme

export default themeSlice.reducer


