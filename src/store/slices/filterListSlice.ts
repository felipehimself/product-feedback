import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: { termToFilter: 'all' },
  reducers: {
    changeTerm: (state, action) => {
      state.termToFilter = action.payload;
    },
  },
});

export const { changeTerm } = filterSlice.actions;

export default filterSlice.reducer;
