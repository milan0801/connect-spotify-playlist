import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// search using search keyword
export const searchKeyword = createAsyncThunk(
  'search/searchKeyword',
  async (keyword) => {
    const access_token = localStorage.getItem('access_token');
    const params = new URLSearchParams();
    params.append('q', keyword);
    params.append('type', 'track');
    params.append('limit', '10');
    const result = await fetch(`https://api.spotify.com/v1/search?${params.toString()}`,{method: "GET", headers: { Authorization: `Bearer ${access_token}`}});

    const results = await result.json();
    return results;
  }
);

export const searchResultsSlice = createSlice({
  name: 'search',
  initialState: {
    searchResults: {},
    isLoadingResults: false,
    failedToLoadResults: false
  },
  reducers: {
    clearResults: (state) => {
      state.searchResults = {};
    }
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

export const searchResults = (state) => state.search.searchResults;
export const isLoadingResults = (state) => state.search.isLoadingResults;

export const { clearResults } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;