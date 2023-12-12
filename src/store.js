import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from './features/searchResults/searchResultsSlice';
import playlistReducer from './features/playlist/playlistSlice';

export default configureStore({
    reducer: {
      search: searchResultsReducer,
      playlist: playlistReducer
    },
});