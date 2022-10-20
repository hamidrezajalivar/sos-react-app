import { useEffect, useState } from 'react';

import Article from './Article';
import { Grid } from '@mui/material';
import { blogList } from './../data';

const Blog = () => {


const [posts,setPosts]=useState([]);
    useEffect(()=>{
      setPosts(blogList)
    },[])
    return ( 
        <>
                    <Grid container spacing={1} style={{ width: "95%", margin: " 30px auto" }} className="grid-articles">
                {posts.map(post => (<Grid item md={3} key={post.id}>
                    <Article post={post} />
                </Grid>)
                )}

         
            </Grid>
        </>
     );
}
 
export default Blog;