import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { selectBlogPosts } from "../slice/blogSlice"
import { editPost } from "../slice/blogSlice";
import { useState } from "react";

const EditPost = () => {

    const blogPosts = useSelector(selectBlogPosts);
    const {id} = useParams()
    const dispatch = useDispatch()
    const post = blogPosts.find(post => (post.id).toString() === id)
    const navigate = useNavigate()

    const [editPostData, setEditPostData] = useState({
        postId: post.id,
        title: post.title,
        content: post.content,
      });

    const handleEditPost = () => {
        if (editPostData.postId !== null) {
          dispatch(editPost({
            postId: editPostData.postId,
            updatedTitle: {title: editPostData.title},
            updatedPost: { content: editPostData.content },
          }));

          navigate("/")

          setEditPostData({
            postId: null,
            title: post.title,
            content: post.content
          });
        }
      };

    return (
        <main className='newpost_container'>
          <h2 className='newpost_description' >Edit Post</h2>
            <label>
        Title:
        <input
          className='new_post_input'
          type="text"
          name="title"
          value={editPostData.title}
          onChange={(e) => setEditPostData({ ...editPostData, title: e.target.value })}
        />
      </label>
      <br />
      <label>
        Content:
        <textarea
          className='new_post_input new_post_textarea'
          name="content"
          value={editPostData.content}
          onChange={(e) => setEditPostData({ ...editPostData, content: e.target.value })}
        />
      </label>
      <br />
      <button className='new_post_btn' onClick={handleEditPost}>Edit Post</button>
        </main>
    )
}

export default EditPost