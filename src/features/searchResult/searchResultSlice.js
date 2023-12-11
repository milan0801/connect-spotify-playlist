import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// search using search keyword
export const searchKeyword = createAsyncThunk(
  'search/searchKeyword',
  async (keyword) => {
    if (!keyword) {
      alert('Please input the search keyword!');
      return;
    }
    const access_token = localStorage.getItem('access_token');
    const params = new URLSearchParams();
    params.append("q", keyword);
    params.append("type", "track");
    params.append("limit", "10");
    const result = await fetch(`https://api.spotify.com/v1/search?${params.toString()}`,{method: "GET", headers: { Authorization: `Bearer ${access_token}`}});

    const results = await result.json();
    return results;
  }
);

export const searchResultSlice = createSlice({
  name: 'search',
  initialState: {
    searchResults: {},
    isLoadingResults: false,
    failedToLoadResults: false
  },
  extraReducers: (builder) => {
    builder.addCase(searchKeyword.pending, (state) => {
      state.isLoadingResults = true;
      state.failedToLoadResults = false;
    }).addCase(searchKeyword.fulfilled, (state, action) => {
      state.isLoadingResults = false;
      state.failedToLoadResults = false;
      state.searchResults = action.payload;
    }).addCase(searchKeyword.rejected, (state) => {
      state.isLoadingResults = false;
      state.failedToLoadResults = true;
    })
  }
});

export const searchResult = (state) => state.search.searchResult;
export const isLoadingResults = (state) => state.search.isLoadingResults;

export default searchResultSlice.reducer;