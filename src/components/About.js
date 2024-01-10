const About = () => {
     
    return (
        <main className="About_container">
            <h1 className="About_description">About</h1>
            <p>Welcome to BlogPost, a cutting-edge blogging platform crafted with React and powered by Redux Toolkit.</p>
            <h2 className="About_des">Key Features:</h2>
            <ul className="About_lists">
                <li><span className="About_span">Effortless Posting:</span> Share your thoughts in a breeze! BlogPost allows you to create and publish your posts effortlessly. Whether it's a short story or a thought-provoking article, BlogPost makes posting a joy.</li>
                <li><span className="About_span">State Management with Redux Toolkit:</span> BlogPost leverage the power of Redux Toolkit to manage the state of your app efficiently. Enjoy a seamless flow of data, ensuring that your posts are always up-to-date and reflecting your latest changes.</li>
                <li><span className="About_span">Editing Made Simple:</span> With our editing feature, you can easily update and refine your posts. Add new information, correct errors, or enhance your content with just a few clicks.</li>
                <li><span className="About_span">Streamlined Deletion:</span> Sometimes, thoughts change, and that's okay. If you ever feel the need to remove a post, the process is simple and straightforward. Just select the post you want to delete, click on the delete button, and it's done..</li>
            </ul>
        </main>
    )
}

export default About