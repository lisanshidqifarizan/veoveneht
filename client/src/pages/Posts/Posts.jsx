import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import data from "../../data.js";
import Sidebar from '../../components/Sidebar.jsx';

const Posts = () => {
    const { postUrl } = useParams();
    const post = data.flatMap(user => user.post).find(post => post.link === `/${postUrl}`);
    const author = data.find(user => user.post.includes(post))?.name;

    fetch('')

    return (
        <>
        <Helmet title={`${post.title} | VEO Veneht`} />
            <div className="post">
                <p className="post-title">{post.title}</p>
                <img src={post.img} href alt={post.title}/>
                <p>By {author}</p>
                <p>{post.desc}</p>
            </div>
            <Sidebar/>
        </>
    );
};

export default Posts;   