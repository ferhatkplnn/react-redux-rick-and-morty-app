import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getCharacterDetail,
  getCharacters,
  getMoreCharacters,
} from "../services/apiServices";

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  getCharacters
);

export const fetchMoreCharacters = createAsyncThunk(
  "characters/getMoreCharacters",
  getMoreCharacters
);

export const fetchCharacterDetail = createAsyncThunk(
  "characters/getCharacterDetail",
  getCharacterDetail
);

const initialState = {
  items: [],
  status: "idle",
  error: null,
  character: {
    detail: null,
    status: "idle",
    error: null,
  },
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    clearCharacterDetail: (state) => {
      state.character.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });

    builder
      .addCase(fetchMoreCharacters.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchMoreCharacters.fulfilled, (state, action) => {
        state.items = {
          info: action.payload.info,
          results: [...state.items.results, ...action.payload.results],
        };
        state.status = "succeeded";
      })
      .addCase(fetchMoreCharacters.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });

    builder
      .addCase(fetchCharacterDetail.pending, (state) => {
        state.character.status = "loading";
      })
      .addCase(fetchCharacterDetail.fulfilled, (state, action) => {
        state.character.detail = action.payload;
        state.character.status = "succeeded";
      })
      .addCase(fetchCharacterDetail.rejected, (state, action) => {
        state.character.error = action.error.message;
        state.character.status = "failed";
      });
  },
});

export const { clearCharacterDetail } = charactersSlice.actions;
export default charactersSlice.reducer;
