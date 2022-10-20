import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { blogList } from './../data';

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const response = await blogList
  const data = await response

  return data
})

const initialState = {
  postList: [],
  fetchingPosts: false,
  errorMessage: null
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.postList = action.payload
      state.fetchingPosts = false
    }
  
  }
})

export default postSlice.reducer
