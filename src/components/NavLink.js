// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router-dom'

export default React.createClass({
  render () {
    return <Link {...this.props} activeClassName='active' />
  }
})
