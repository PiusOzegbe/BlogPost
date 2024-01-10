import { createSlice } from '@reduxjs/toolkit';

const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

const initialState = {
  posts: savedPosts,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addPost: (state, action) => {
      const { username, title, content } = action.payload;
      const newPost = {
        id: state.posts.length + 1,
        username,
        title,
        content,
        reactions: {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          laugh: 0,
        },
        createdAt: new Date().toISOString(),
      };
      state.posts.push(newPost);
      localStorage.setItem('blogPosts', JSON.stringify(state.posts));
    },
    deletePost: (state, action) => {
      const postId = action.payload;
      state.posts = state.posts.filter(post => post.id !== postId);
      localStorage.setItem('blogPosts', JSON.stringify(state.posts));
    },
    editPost: (state, action) => {
      const { postId, updatedTitle, updatedPost } = action.payload;
      const index = state.posts.findIndex(post => post.id === postId);
      if (index !== -1) {
        state.posts[index] = { ...state.posts[index], ...updatedTitle, ...updatedPost };
        localStorage.setItem('blogPosts', JSON.stringify(state.posts));
      }
    },
    reactToPost: (state, action) => {
      const { postId, reactionType } = action.payload;
      const postIndex = state.posts.findIndex(post => post.id === postId);
    
      if (postIndex !== -1) {
        const newState = { ...state };
        newState.posts = [...state.posts];
        newState.posts[postIndex] = { ...state.posts[postIndex] };
        newState.posts[postIndex].reactions = { ...(state.posts[postIndex].reactions || {}) };
    
        if (newState.posts[postIndex].reactions.hasOwnProperty(reactionType)) {
          newState.posts[postIndex].reactions[reactionType] += 1;
          localStorage.setItem('blogPosts', JSON.stringify(newState.posts));
          return newState;
        }
      }
    
      // Return the current state if something goes wrong
      return state;
    },
  },
});

export const { addPost, deletePost, editPost, reactToPost } = blogSlice.actions;
export const selectBlogPosts = (state) => state.blog.posts;

export default blogSlice.reducer;
