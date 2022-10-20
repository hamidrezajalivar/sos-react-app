import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Article from './Article';
import { Grid } from '@mui/material';
import { blogList } from './../data';
import { fetchPosts } from './../redux/postSlice';

const Articles = () => {

    const dispatch = useDispatch()
    const postList = useSelector(({ posts: { postList } }) => postList)
  
    useEffect(() => {
      dispatch(fetchPosts())
    }, [dispatch])
  
    return (
        <>
            <Grid container spacing={1} style={{ width: "100%", margin: "auto" }} className="grid-articles">
                {postList.slice(0,4).map(post => (<Grid item md={3} key={post.id}>
                    <Article post={post} />
                </Grid>)
                )}

         
            </Grid>

        </>
    );
}

export default Articles;