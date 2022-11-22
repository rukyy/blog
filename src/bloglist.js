import { Link } from "react-router-dom";

const Bloglist = ({blogs , title, }) => {
    // const blogs=props.blogs
    // const title=props.title

    
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} >
                        <h3>{blog.title}</h3>
                        <p>written by {blog.author}</p>   
                    </Link>
                    
                </div>
            ))}
        </div>
      );
}
 
export default Bloglist;
// const Bloglist = ({blogs , title}) => {
// you can either use the method above by destructuring using curly brakets and paasing the property names direct
// OR 
// const Bloglist = (props) => {
    // const blogs=props.blogs
    // const title=props.title  
// using props and gettint values stored in a variable