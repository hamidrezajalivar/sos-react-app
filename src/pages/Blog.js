import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Article from '../components/Article';
import Filter from './../components/Filter';
import { Grid } from '@mui/material';
import { fetchPosts } from './../redux/postSlice';

const Blog = () => {




    const dispatch = useDispatch()
    const postList = useSelector(({ posts: { postList } }) => postList)
  
    useEffect(() => {
      dispatch(fetchPosts())
    }, [dispatch])
   
    return (
        <>
   
         <Filter/> 
            <Grid container spacing={1} style={{ width: "95%", margin: " 30px auto" }} className="grid-articles">
                {postList.map(post => (<Grid item md={3} key={post.id}>
                  
                    <Article post={post} />
                    
                </Grid>)
                )}


            </Grid>
        </>
    );
}

export default Blog;