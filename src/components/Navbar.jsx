import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import "./Navbar.css"

function Navbar() {
  const { user, signInWithGoogle, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async () => {
    await signInWithGoogle()
    navigate("/app")
  }

  const handleLogout = async () => {
    await logout()
    navigate("/")
  }

  return (
    <nav className="navbar">
      <div className="navbar__brand">Mutation Tracker</div>
      <div className="navbar__links">
        <Link to="/">Landing</Link>
        <Link to="/app">App</Link>
      </div>
      <div className="navbar__actions">
        {user ? (
          <>
            <span className="navbar__user">{user.displayName}</span>
            <button className="btn ghost" onClick={handleLogout}>
              Sign out
            </button>
          </>
        ) : (
          <button className="btn primary" onClick={handleLogin}>
            Sign in
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
