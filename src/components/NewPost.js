import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {  addPost } from "../slice/blogSlice"
import { useState } from 'react';

const NewPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        title: '',
        content: '',
      });
    
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (formData.username && formData.title && formData.content) {
          dispatch(addPost(formData));
          navigate("/")
    
          setFormData({
            username: '',
            title: '',
            content: '',
          });

        } else {
          // Handle form validation or display an error message
          console.error('All fields are required.');
        }
      };
    
     
    return (
        
    <div className='newpost_container'>
    <h2 className='newpost_description' >Create a New Post</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Name
      </label>
        <input
          className='new_post_input'
          id='name'
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      <br />
      <label htmlFor='title'>
      Title
      </label>
        <input
          className='new_post_input'
          id='title'
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      <br />
      <label htmlFor='content'>
        Content
      </label>
        <textarea
          className='new_post_input new_post_textarea'
          id='content'
          name="content"
          value={formData.content}
          onChange={handleInputChange}
        />
      <br />
      <button className='new_post_btn'  type="submit">Create Post</button>
    </form>
  </div>
    )
}

export default NewPost