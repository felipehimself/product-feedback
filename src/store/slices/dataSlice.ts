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

    incrementVote: (state, action) => {
      state.data = state.data.map((suggestion) => {
        if (suggestion.id === action.payload) {
          return { ...suggestion, votes: suggestion.votes + 1 };
        }

        return suggestion;
      });
    },
  },
});

export const { getData, incrementVote } = dataSlice.actions;

export default dataSlice.reducer;
