import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../Redux'
import applyConfigSettings from '../Config'
import './App.scss'
// import routes and pass them into <Router/>
import Routers from './routers'
// Apply config overrides
applyConfigSettings()
// create our store
const store = createStore()

const App = () => (
  <Provider store={store}>
    <div className='site-wrapper'>
      <Routers />
    </div>
  </Provider>
)

export default App
