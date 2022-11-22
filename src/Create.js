import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {

    const [title, setTitle]=useState('')
    const [Body, setBody]=useState('')
    const [author, setAuthor]=useState('Ruky')
    const [ispending, setIspending]=useState(false)
    const history=useHistory()

    const handlesubmit=(e)=>{
        setIspending(true)
        e.preventDefault()
        const blog={title, Body,author}
        fetch( "http://localhost:8000/blogs",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            setIspending(false);
            history.push('/')})
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form
            onSubmit={handlesubmit}>
                <label>Blog Title:</label>
                <input 
                type='text'
                required
                placeholder="Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                required
                placeholder="Body"
                value={Body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="Ruky">Ruky</option>
                </select>
                {!ispending && <button>Add Blog</button>}
                {ispending && <button>Adding blog...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
     );
}
 
export default Create;