import { configureStore } from '@reduxjs/toolkit';
import searchResultReducer from './features/searchResult/searchResultSlice';

export default configureStore({
    reducer: {
      search: searchResultReducer
    },
});