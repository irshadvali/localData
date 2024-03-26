import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import TutorialDataService from "../services/TutorialService";

interface Tutorial {
  id: number;
  title: string;
  description: string;
}

const initialState: Tutorial[] = [];

export const createTutorial = createAsyncThunk(
  "tutorials/create",
  async ({ title, description }: { title: string; description: string }) => {
    const res = await TutorialDataService.create({ title, description });
    return res.data;
  }
);

export const retrieveTutorials = createAsyncThunk(
  "tutorials/retrieveAll",
  async () => {
    const res = await TutorialDataService.getAll();
    return res.data;
  }
);

export const updateTutorial = createAsyncThunk(
  "tutorials/update",
  async ({ id, data }: { id: number; data: Tutorial }) => {
    const res = await TutorialDataService.update(id, data);
    return res.data;
  }
);

export const deleteTutorial = createAsyncThunk(
  "tutorials/delete",
  async ({ id }: { id: number }) => {
    await TutorialDataService.remove(id);
    return { id };
  }
);

export const deleteAllTutorials = createAsyncThunk(
  "tutorials/deleteAll",
  async () => {
    const res = await TutorialDataService.removeAll();
    return res.data;
  }
);

export const findTutorialsByTitle = createAsyncThunk(
  "tutorials/findByTitle",
  async ({ title }: { title: string }) => {
    const res = await TutorialDataService.findByTitle(title);
    return res.data;
  }
);

const tutorialSlice = createSlice({
  name: "tutorial",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTutorial.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(retrieveTutorials.fulfilled, (state, action) => {
        return [...action.payload];
      })
      .addCase(updateTutorial.fulfilled, (state, action) => {
        const index = state.findIndex((tutorial) => tutorial.id === action.payload.id);
        if (index !== -1) {
          state[index] = {
            ...state[index],
            ...action.payload,
          };
        }
      })
      .addCase(deleteTutorial.fulfilled, (state, action) => {
        const index = state.findIndex(({ id }) => id === action.payload.id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      })
      .addCase(deleteAllTutorials.fulfilled, (state, action) => {
        return [];
      })
      .addCase(findTutorialsByTitle.fulfilled, (state, action) => {
        return [...action.payload];
      });
  },
});

export default tutorialSlice.reducer;
