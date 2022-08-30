import { createSlice } from "@reduxjs/toolkit";

const pinnedRecipesSlice = createSlice({
  name: "pinnedRecipes",
  initialState: [],
  reducers: {
    pinRecipe: (state, action) => {
      return [...state, action.payload];
    },
    removeRecipe: (state, action) => {},
  },
});

// selectors
export const pinnedRecipes = (state) => state.pinnedRecipes;

// actions
export const { pinRecipe, removeRecipe } = pinnedRecipesSlice.actions;

export default pinnedRecipesSlice.reducer;
