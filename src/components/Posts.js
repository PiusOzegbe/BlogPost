import { useParams, useNavigate, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectBlogPosts } from "../slice/blogSlice"
import { deletePost } from "../slice/blogSlice"

const Post = () => {
    const blogPosts = useSelector(selectBlogPosts);
    const {id} = useParams()
    const dispatch = useDispatch()
    const post = blogPosts.find(post => (post.id).toString() === id)
    const navigate = useNavigate()

    const handleDeletePost = (postId) => {
        dispatch(deletePost(postId));
        navigate("/")
      };
     
    return (
        <main className="Posts_contianer">
            <article className="Posts_article">
                {post &&
                    <>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <button className="Posts_btn" onClick={() => handleDeletePost(post.id)}>Delete</button>
                    <Link className="edit_btn_link" to={`/post/${post.id}/editpost`}><button className="Posts_btn edit_btn">EditPost</button></Link>
                    </>
                }
                {!post &&
                    <p>Post not Found</p>
                }
            </article>
        </main>
    )
}

export default Post