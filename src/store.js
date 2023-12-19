import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from './components/features/searchResults/searchResultsSlice';
import playlistReducer from './components/features/playlist/playlistSlice';

export default configureStore({
    reducer: {
      search: searchResultsReducer,
      playlist: playlistReducer
    },
});