import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
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
