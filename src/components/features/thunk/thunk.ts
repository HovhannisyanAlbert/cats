import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addCateItem, firstCat, getCate, getItemCate } from "../slice/catSlice";
import { dateType } from "./type";

export const getAllCat = createAsyncThunk(
  "get/cat",
  async (_, { dispatch }) => {
    const response = await axios.get("https://api.thecatapi.com/v1/categories");

    dispatch(getCate(response.data));
  }
);

export const getItemCategory = createAsyncThunk(
  "get/category",
  async (data: dateType, { dispatch }) => {
    const { limit, itemId } = data;

    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${itemId}`
    );
 
    dispatch(getItemCate(response.data));
  }
);

 export const addCate = createAsyncThunk(
   "add/cat",
   async (data: dateType, { dispatch }) => {
    const { limit, itemId } = data;
   
     const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${itemId}`
     );

    dispatch(addCateItem(response.data));
   }
 );

export const defaultCat = createAsyncThunk(
  "cate/default",
  async (_, { dispatch }) => {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search?limit=10&page=1"
    );
    dispatch(firstCat(response.data));
  }
);
