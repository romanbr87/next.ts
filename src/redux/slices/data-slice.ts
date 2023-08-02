import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getPost, serverURL } from "@/lib/api";
import type { RootState } from "../";

type State = {
  total: number;
  cat: { name: string; totNum: number }[];
};

type Data = {
  data: State;
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await getPost<Data>(serverURL("/"));
  return response;
});

interface DataState {
  status: "loading" | "error" | "ready";
  error?: string;
}

const initialState: DataState = {
  status: "loading",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // Define any additional reducers if needed
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchData.pending, (state: DataState) => {
      state.status = "loading";
      state.error = undefined;
    });

    builder.addCase(fetchData.rejected, (state: DataState, action: any) => {
      state.status = "error";
      state.error = action.error.message || "An error occurred.";
    });

    builder.addCase(fetchData.fulfilled, (state: DataState, action: any) => {
      state.status = "ready";
      state.error = undefined;
      // Assuming the payload is an object with properties to merge into the state
      Object.assign(state, action.payload);
    });
  },
});

export default dataSlice.reducer;

// Define a selector function to access data from the Redux store
export const selectData = (state: RootState) => state.data;
