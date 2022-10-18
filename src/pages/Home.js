import Articles from "../components/Articles";
import  Container  from '@mui/material/Container';
import { Link } from 'react-router-dom';
import  Typography  from '@mui/material/Box';

const Home = () => {
    return (
        <>
  <Container maxWidth={100} style={{marginTop:"70px"}}>
          <div className="headContent">
          <Typography sx={{ fontSize: 24 }}>
          مقاله‌ها
          </Typography>

            <Link to="">نمایش همه</Link>
          </div>

           <Articles/>
           </Container>
         </>
    );
}

export default Home;