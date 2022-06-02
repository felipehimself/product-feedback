import { createSlice } from '@reduxjs/toolkit';
import { IData } from '../../interfaces/DataInterface';
import data from '../../utils/data';

const initialState: IData[] = data;

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: { data: initialState },
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getData } = dataSlice.actions;

export default dataSlice.reducer;
