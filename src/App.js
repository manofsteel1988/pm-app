import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Dashboard from './pages/dashboard/Dashboard';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Project from './pages/project/Project';
import Create from './pages/create/Create';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/projects/:id">
              <Project />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App
