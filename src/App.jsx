import { useState } from 'react'
import Header         from './components/Header'
import StudentTable   from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'

const initialStudents = [
  { id: 1, name: 'RIYA YADAV',  score: 88 },
  { id: 2, name: 'Vedangi Sharma', score: 35 },
  { id: 3, name: 'Rohan Mishra',  score: 72 },
  { id: 4, name: 'Sneha Verma',  score: 15 },
  { id: 5, name: 'Karan Singh',  score: 55 },
]

function App() {

  const [students, setStudents] = useState(initialStudents)
  const [nextId,   setNextId]   = useState(6)

  const [isDark, setIsDark] = useState(true)

  function toggleTheme() {
    const newDark = !isDark
    setIsDark(newDark)

    if (newDark) {
      document.body.classList.add('dark') 
    } else {
      document.body.classList.remove('dark') 
    }
  }


  function handleAddStudent(newStudent) {
    setStudents([...students, { id: nextId, ...newStudent }])
    setNextId(nextId + 1)
  }

  function handleUpdateScore(id, newScore) {
    setStudents(students.map((s) =>
      s.id === id ? { ...s, score: newScore } : s
    ))
  }

  function handleDeleteStudent(id) {
    setStudents(students.filter((s) => s.id !== id))
  }

  const total   = students.length
  const passing = students.filter((s) => s.score >= 40).length
  const failing = total - passing
  const avg     = total > 0
    ? Math.round(students.reduce((sum, s) => sum + s.score, 0) / total)
    : 0

  return (
    <div className="app-wrapper">

      <div className="top-bar">
        <Header />

        <button className="theme-toggle" onClick={toggleTheme}>
          <span className="toggle-icon">{isDark ? '☀️' : '🌙'}</span>
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div className="stats-bar">
        <div className="stat-card">
          <span className="stat-number accent">{total}</span>
          <span className="stat-label">Total Students</span>
        </div>
        <div className="stat-card">
          <span className="stat-number green">{passing}</span>
          <span className="stat-label">Passing</span>
        </div>
        <div className="stat-card">
          <span className="stat-number red">{failing}</span>
          <span className="stat-label">Failing</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{avg}</span>
          <span className="stat-label">Avg Score</span>
        </div>
      </div>

      <AddStudentForm onAdd={handleAddStudent} />

      <p className="table-label">Student List</p>
      <StudentTable
        students={students}
        onUpdate={handleUpdateScore}
        onDelete={handleDeleteStudent}
      />

    </div>
  )
}

export default App