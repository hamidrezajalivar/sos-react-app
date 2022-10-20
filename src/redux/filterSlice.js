import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { blogList } from './../data';

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const response = await blogList
  const data = await response

  return data
})
const initialState = {
  value: [],
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {

    searchFilter:(state,action)=>{
        
        const value=action.payload.target.value;
        console.log("value",value)
        // if(value === ""){
        //    return fetchPosts;
        // }
        // else{
        //     const filteredProducts=state.filter(post=>post.title.toLowerCase().includes(value.toLowerCase()));
        //     return filteredProducts;
        // }  
    }
  },
})

// Action creators are generated for each case reducer function
export const {searchFilter } = filterSlice.actions

export default filterSlice.reducer