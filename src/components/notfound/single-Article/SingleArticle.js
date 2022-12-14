import Rateing from './../../Rateing';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { blogList } from './../../../data';
import styles from './singleArticle.module.css'
import { useParams } from "react-router";

const SingleArticle = () => {
    const { id } = useParams();
    const blog = blogList.find((post) => {
        return post.id === parseInt(id);
    });
    const url = window.location.href;
    return (
        <>
            <div className={styles.singlePost}>
                <img src={`/${blog.image}`} alt={blog.title} />
                <div className={styles.cover}></div>
                <h1 className={styles.title}>{blog.title}</h1>
                <span className={styles.score}><Rateing score={blog.score} /></span>
            </div>
            <h1 style={{ textAlign: "center", marginTop: "70px" }}>{blog.title}</h1>
            <div className={styles.description}>
                {blog.description}
            </div>
            <div style={{ margin:"0px 30px 50px",display: "flex", justifyContent: "space-between",alignItems:"center" }}>
                <div className={styles.category}>
                    <span>دسته بندی : </span>
                    {blog.category}
                </div>
                <div className={styles.views}>
                    <span><RemoveRedEyeIcon/> تعداد بازدید:</span>
                    {blog.views}
                </div>
            </div>


        </>
    );
}

export default SingleArticle;