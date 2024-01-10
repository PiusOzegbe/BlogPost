import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Post from "./components/Posts"
import About from "./components/About"
import NewPost from "./components/NewPost"
import Missing from "./components/Missing"
import EditPost from "./components/EditPost"
import { useSelector } from 'react-redux'
import { selectBlogPosts } from "./slice/blogSlice"
import { useState } from "react"

function App() {
    const blogPosts = useSelector(selectBlogPosts);
    const [searchQuery, setSearchQuery] = useState('');


    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return (
        <div className="App">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} filteredPosts={filteredPosts}/>
        <Routes>
        <Route path="/" element={<Home filteredPosts={filteredPosts} />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/editpost" element={<EditPost />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
        </div>
    )
}

export default App