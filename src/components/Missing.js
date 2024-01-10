import { Link } from "react-router-dom"

const Missing = () => {
     
    return (
        <main className="missing_container">
            <h1>Sorry, Page not Found</h1>
            <Link to="/"><button className='new_post_btn missing_btn'>Back to HomePage</button></Link>
        </main>
    )
}

export default Missing