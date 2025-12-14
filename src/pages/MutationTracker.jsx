import "./MutationTracker.css"
import { useAuth } from "../contexts/AuthContext"

const MutationTracker = () => {
  const { user } = useAuth()
  const displayName = user?.displayName || "breeder"

  return (
    <main className="tracker">
      <header className="tracker__header">
        <p className="eyebrow">Welcome, {displayName}</p>
        <h1>Mutation Tracker</h1>
        <p className="subtitle">
          The logged-in home base for recording breeding batches, mutation rolls, and next
          steps. Firestore collections will store your lines so you can collaborate.
        </p>
      </header>

      <section className="tracker__grid">
        <article className="tracker__card">
          <h3>Upcoming work</h3>
          <p>Connect Firestore collections for creatures, parents, and mutation attempts.</p>
        </article>
        <article className="tracker__card">
          <h3>Session info</h3>
          <p>You are authenticated with your Google account. More providers soon.</p>
        </article>
        <article className="tracker__card">
          <h3>Navigation</h3>
          <p>Use the navbar to switch between the landing page and this secured app area.</p>
        </article>
      </section>
    </main>
  )
}

export default MutationTracker