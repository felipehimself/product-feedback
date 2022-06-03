import { createSlice } from '@reduxjs/toolkit';

const dropDownSlice = createSlice({
  name: 'dropDownSlice',
  initialState: { dropItemSelected: 'most upvotes', isOpen: false },
  reducers: {
    changeDropDownItem: (state, action) => {
      state.dropItemSelected = action.payload;
      state.isOpen = false;
    },

    toggleDropDown: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { changeDropDownItem, toggleDropDown } = dropDownSlice.actions;

export default dropDownSlice.reducer;
