import * as React from 'react';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonEffect from './ButtonEffect';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const Article = () => {
    return (
        <>
        {/* <Link to={`/articles/article/${article.id}`} className='articleItem'> */}
        <Link to="/" className='articleItem'>
            <Card sx={{ p: 2, m:1, border: 1, borderColor: '#0F5098', borderRadius: '16px' }} >
                <CardMedia
                    style={{ borderRadius: '16px' }}
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="images/articles/Media.png"
                />
                <CardContent sx={{ p: 1 }}>
                    <Typography gutterBottom style={{ fontSize: '16px', fontWeight: "bold" }} component="div">
                        راهنمای دریافت معرفی‌نامه
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', color: '' }}>
                        <AccessTimeIcon />
                        <Typography gutterBottom style={{ fontSize: '14px' }} component="div">
                            5 دقیقه
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و...
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>

                    <ButtonEffect />
                </CardActions>
            </Card>
            </Link>
        </>
    );
}

export default Article;