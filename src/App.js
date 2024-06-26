import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './blogdetails';
import NotFound from './notfound';

function App() {
  return (
    <Router>
     <div className="App">
       <Navbar />
       <div className="content">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/create'>
            <Create />
          </Route>
          <Route exact path='/blogs/:id'>
            <BlogDetails />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
       </div>
     </div>
    </Router>
  );
}

export default App;
