import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  reactToPost } from '../slice/blogSlice';


const Home = ({filteredPosts}) => {
  const dispatch = useDispatch();

  const sortedPosts = [...filteredPosts].sort((a, b) => b.id - a.id);

  const handleReactToPost = (postId, reactionType) => {
    dispatch(reactToPost({ postId, reactionType }));
  };

    return (
        <main className="home_container">
        { sortedPosts.length > 0 ? <div>
      <ul className='home_list'>
        {sortedPosts.map((post) => (
          <li className='home_lists' key={post.id}>
            <Link to={`/post/${post.id}`} className="home_links"><div className='post_title'>{post.title}</div></Link>
            <Link className='home_links' to={`/post/${post.id}`}>
            <div className='post_content'>{post.content}</div>
            <i className='post_author'>Posted by: {post.username}</i>
            </Link>
            <p className='post_author'>Posted at: {new Date(post.createdAt).toLocaleString()}</p>
            <div>
              <button className='reaction_btn' onClick={() => handleReactToPost(post.id, 'thumbsUp')}>
                👍 {post.reactions && post.reactions.thumbsUp ? post.reactions.thumbsUp : 0}
              </button>

              <button className='reaction_btn' onClick={() => handleReactToPost(post.id, 'heart')}>
              ❤️ {post.reactions && post.reactions.heart ? post.reactions.heart : 0}
              </button>

              <button className='reaction_btn' onClick={() => handleReactToPost(post.id, 'wow')}>
              😮 {post.reactions && post.reactions.wow ? post.reactions.wow : 0}
              </button>

              <button className='reaction_btn' onClick={() => handleReactToPost(post.id, 'laugh')}>
              😂 {post.reactions && post.reactions.laugh ? post.reactions.laugh : 0}
              </button>

            </div>
          </li>
        ))}
      </ul>
      </div>
        : <div className='post_not_found'><p className="home_text">Post not Found, click the Button below to create a new post</p>
        <Link to="/newpost"><button className='post_not_found_btn'>+</button></Link>
        </div>
        }
        </main>
    )
}

export default Home