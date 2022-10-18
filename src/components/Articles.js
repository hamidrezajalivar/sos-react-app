import Article from './Article';
import { Grid } from '@mui/material';

const Articles = () => {


    return (
        <>
            <Grid container spacing={1} style={{width:"100%",margin:"auto"}} className="grid-articles">
                <Grid item md={3}>
                    <Article/>
                </Grid>
                <Grid item md={3}>
                     <Article/>
                </Grid>
                <Grid item md={3}>
                     <Article/>
                </Grid>
                <Grid item md={3}>
                    <Article />
                </Grid>
            </Grid>

        </>
    );
}

export default Articles;