import { createSlice } from '@reduxjs/toolkit';

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      return [...state, action.payload];
    },
    deleteSong: (state, action) => {
      return state.filter(song => song.id !== action.payload)
    },
    clearSong: () => {
      return [];
    }
  }
});

export const selectSongs = (state) => state.playlist;
export const { addSong, deleteSong, clearSong } = playlistSlice.actions;

export default playlistSlice.reducer;