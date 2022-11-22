import { Link } from "react-router-dom";

const Navbar = () => {
    const style = {color:'white',backgroundColor:'red',borderRadius:'8px'}
    return (  
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create" style={style}>New blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;