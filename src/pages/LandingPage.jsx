import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import "./LandingPage.css"

const LandingPage = () => {
  const { user, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate("/app", { replace: true })
    }
  }, [user, navigate])

  const handleFeaturesScroll = () => {
    const target = document.getElementById("features")
    if (target) target.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="landing">
      <section className="landing__hero">
        <p className="eyebrow">Ark breeding companion</p>
        <h1>Mutation Tracker</h1>
        <p className="subtitle">
          Track lineage, monitor mutation rolls, and keep your breeding data in sync
          with Firestore so your whole tribe stays aligned.
        </p>
        <div className="cta-group">
          <button className="btn primary" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
          <button className="btn ghost" onClick={handleFeaturesScroll}>
            See how it works
          </button>
        </div>
        <p className="helper">
          More providers are coming soon. You can start with Google now.
        </p>
      </section>

      <section className="landing__panel" id="features">
        <h2>Your data, organized.</h2>
        <ul className="feature-list">
          <li>Plan breeding batches and mutation targets in one place.</li>
          <li>Keep tribe members synced via Firestore collections.</li>
          <li>Move between devices with the same login session.</li>
        </ul>
      </section>
    </main>
  )
}

export default LandingPage
