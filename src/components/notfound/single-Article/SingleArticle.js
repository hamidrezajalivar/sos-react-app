import { blogList } from './../../../data';
import styles from './singleArticle.module.css'
import { useParams } from "react-router";

const SingleArticle = () => {
    const { id } = useParams();
    const blog = blogList.find((post) => {
        return post.id === parseInt(id);
    });
    const url=window.location.href;
    return ( 
        <>
            <div className={styles.singlePost}>
                <img src={`/${blog.image}`} alt={blog.title}/>
                <div className=''></div>
            </div>
        </>
     );
}
 
export default SingleArticle;