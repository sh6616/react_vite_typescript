import { useState } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  const handleLoginSuccess = (username: string) => {
    setIsLoggedIn(true)
    setCurrentUser(username)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser('')
  }

  return (
    <>
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Dashboard currentUser={currentUser} onLogout={handleLogout} />
      )}
    </>
  )
}

export default App