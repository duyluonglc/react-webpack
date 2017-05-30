import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from '../containers/App'
import Home from '../pages/Home'
import About from '../pages/About'
import Repos from '../pages/Repos'
import Topic from '../pages/Topic'

const Routers = () => (
  <Router>
    <div>
      <App />
      <Route path='/about' component={About} />
      <Route path='/repos' component={Repos} />
      <Route path='/topic' component={Topic} />
    </div>
  </Router>
)

export default Routers
