import { Link } from 'react-router-dom';

const BlogList = ({ blogs, handleEdit }) => {

  const handleEdit2 = (e) => {
    console.log(e)
    handleEdit(e)
  }

  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author.name}</p> <br></br>
            <Link to='/edit' style={{
              backgroundColor: '#ec8106',
              color: '#fff',
              border: '0',
              padding: '8px',
              borderRadius: '8px',
              cursor: 'pointer'
            }} onClick={() => handleEdit2(blog)}>  Edit </Link>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;