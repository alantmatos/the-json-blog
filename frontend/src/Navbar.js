import { Link } from 'react-router-dom'
import { useState } from 'react'


const Navbar = ({darktest}) => {

    const [darkMode,SetDarkMode] = useState(true);

    const handleClick = () => {
        SetDarkMode(!darkMode)
        //console.log(darkMode)
        darktest()
    }

    return (
        <nav className="navbar">
            <h1> The Json Blog  </h1>
            <button onClick={handleClick}  className='btn'>{ darkMode ? '🔆' : '🌜'}</button>
            <div className="links"> 
                <Link to='/'> Home</Link>
                <Link to='/create' style={{
                    color:'white',
                    backgroundColor:'#ec8106',
                    borderRadius:'8px'
                }}> New Blog</Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar;