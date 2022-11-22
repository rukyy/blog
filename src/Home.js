import Bloglist from "./bloglist";
import useFetch from "./usefetch";

const Home = () => {
    const {data:blogs, ispending,error}=useFetch( 'http://localhost:4001/blogs')
    console.log(blogs)
    return ( 
        <div className="Home">
            {ispending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <Bloglist blogs={blogs} title={'All Blogs'} />}
        </div>
     );
}
export default Home;



// const Home = () => {
//     const handleclick=()=> {
//         alert('hello')
//     }
//     const handleclickagain=(name, e)=>{
//         console.log('hello '+name, e )
//     }
//     return ( 
//         <div className="Home">
//             <h2>Homepage</h2>
//             <button onClick={handleclick}>click me</button>
//             {/* the value in the onclick space below(()=>{}) is what is called an anonymous function
//             and it is used to run a function that has arguments in other not to use the brackets that
//             invokes the function immediately ps. the {} for the dynamic values are kept */}
//             <button onClick={(e)=>{handleclickagain('ruky',)}}>click me again</button>
//         </div>
//      );
// }
// export default Home;