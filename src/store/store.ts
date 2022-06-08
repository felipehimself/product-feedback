import { configureStore } from '@reduxjs/toolkit';

import dataSlice from './slices/dataSlice';
import filterListSlice from './slices/filterListSlice';
const store = configureStore({
  reducer: {
    data: dataSlice,
    filterTerm: filterListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
