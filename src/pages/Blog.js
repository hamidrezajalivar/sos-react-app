import { useEffect, useState } from 'react';

import Article from '../components/Article';
import Filter from './../components/Filter';
import { Grid } from '@mui/material';
import { blogList } from '../data';
import { useProduct } from '../components/contexts/UserContext';

const Blog = () => {
    const posts=useProduct();
    const [selectedId,setSelectedId]=useState(null)
    // const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     setPosts(blogList)
    // }, [])
    const selectCommentHandler=(id)=>{
   
        setSelectedId(id)
    }
    
    return (
        <>
        
         <Filter/>
            <Grid container spacing={1} style={{ width: "95%", margin: " 30px auto" }} className="grid-articles">
                {posts.map(post => (<Grid item md={3} key={post.id}>
                  
                    <Article post={post} onClick={()=>selectCommentHandler(post.id)} />
                    
                </Grid>)
                )}


            </Grid>
        </>
    );
}

export default Blog;