import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <h1 className="display-5 fw-bold">Welcome to OctoFit Tracker</h1>
          <p className="lead text-muted">
            Track workouts, build teams, and compete on a modern fitness leaderboard.
          </p>
          <div className="d-flex gap-3">
            <Link className="btn btn-primary btn-lg" to="/leaderboard">View leaderboard</Link>
            <Link className="btn btn-outline-secondary btn-lg" to="/about">Learn more</Link>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="h4">Today&apos;s focus</h2>
              <ul className="mb-0">
                <li>Log your activity</li>
                <li>Join a team</li>
                <li>Climb the leaderboard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Leaderboard() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Leaderboard</h2>
      <div className="list-group">
        {[
          { name: 'Ada', score: 120 },
          { name: 'Linus', score: 95 },
          { name: 'Grace', score: 88 }
        ].map((entry) => (
          <div className="list-group-item d-flex justify-content-between" key={entry.name}>
            <span>{entry.name}</span>
            <strong>{entry.score} pts</strong>
          </div>
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="container py-5">
      <h2 className="mb-3">About OctoFit</h2>
      <p className="text-muted">
        OctoFit Tracker combines a React frontend, an Express API, and MongoDB-backed data services to support a complete fitness platform experience.
      </p>
    </div>
  )
}

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">OctoFit Tracker</Link>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
            <Link className="nav-link" to="/about">About</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
