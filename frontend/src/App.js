import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { useState } from 'react';
import BlogEdit from './BlogEdit';



function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [blogId, setBlogId] = useState("")

  function turnOnDarkMode() {
    setDarkMode(!darkMode)
  }

  const handleEdit = (e) => {
    setBlogId(e)
    console.log(blogId)
  }

  return (
    <Router>
      <div className={darkMode ? "App-dark" : "App"}>
        <Navbar darktest={turnOnDarkMode} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home handleEdit={handleEdit} />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/edit">
              <BlogEdit blogId={blogId} />
            </Route>
            <Route path={'*'}>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;