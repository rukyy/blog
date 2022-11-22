import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Not Found</h2> 
            <p>sorry the page your looking for not available</p> 
            <Link to="/">Back to home page</Link>
        </div> 
     );
}
 
export default NotFound;