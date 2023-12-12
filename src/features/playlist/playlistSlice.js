import { createSlice } from '@reduxjs/toolkit';

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    songs: []
  },
  reducers: {
    addSong: (state, action) => {
        state.songs.push(action.payload);
    }
  }
});

export const selectSongs = (state) => state.playlist.songs;
export const { addSong } = playlistSlice.actions;

export default playlistSlice.reducer;