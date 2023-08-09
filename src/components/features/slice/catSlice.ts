import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "./type";

const initialState: initialStateType = {
  cat: [],
  itemCat: [],
  defaultCats:[],
 
};

const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    getCate: (state, action) => {
      if (action.payload) {
        state.cat = action.payload;
      }
    },
    getItemCate: (state, action) => {
       state.defaultCats = []
    
      if (action.payload) {
        state.itemCat = action.payload;
      }
    },
    addCateItem: (state, action) => {
      if (action.payload) {
        state.itemCat.push(...action.payload);
      }
    },
    firstCat: (state, action) => {
      if (action.payload) {
        state.defaultCats = action.payload;
      }
    },
  
  },
});
export const { getCate, getItemCate, addCateItem, firstCat } = catSlice.actions;
export const catSliceReducer = catSlice.reducer;
