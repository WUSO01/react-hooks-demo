import React, { useState, useMemo } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Index } from './pages'
import { About } from './pages/about'
import { UserContext } from './components/UserContext'

export default function AppRouter() {
  const [user, setUser] = useState(null)
  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div>
          <UserContext.Provider value={value} >
            <Route path='/' exact component={Index} />
            <Route path='/about' component={About} />
          </UserContext.Provider>
        </div>
      </nav>
    </Router>
  )
}
