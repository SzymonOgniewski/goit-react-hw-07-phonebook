import { createSlice } from '@reduxjs/toolkit';

const filterInitState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducers: {
    changeFilterAction: {
      reducer(state, action) {
        const { filter } = action.payload;
        return (state = filter);
      },
      prepare(filter) {
        return { payload: { filter } };
      },
    },
  },
});

export const { changeFilterAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
