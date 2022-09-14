import { useState , useContext} from "react";
import { useHistory } from "react-router-dom";


const BlogEdit = ({blogId}) => {

    const id = blogId.id;


    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const [ author, setAuthor ] = useState (blogId.author)
    const [ body, setBody ] = useState (blogId.body)
    const [ title, setTitle ] = useState (blogId.title)


    const updatedBlog = { id, author, body, title }



    const handleSubmit = () => {
        
        setIsPending(true)
        
        fetch(`http://localhost:8000/blogs/${id}`,{
        method:'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedBlog)})
          .then(res => res.json())
          .then(()=> { })
          setIsPending(false)
          history.push(`blogs/${id}`)        
    }


    return (
          <>

    <div className="create">
      <h2>Blog Edit form </h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text" 
        required 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}/>

        <label>Blog body:</label>
        <textarea required 
        value={body}
        onChange={(e)=>setBody(e.target.value)}/>

        <label>Blog author:</label>
        <input type='text' required 
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}/>

        <button>{isPending ? "Saving.." : 'Save'}</button>
        
      </form>

    </div>
    
    </>
    )


}


export default BlogEdit;