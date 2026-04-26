import { useState } from 'react'

function AddStudentForm({ onAdd }) {


  const [name, setName]   = useState('')
  const [score, setScore] = useState('')
  const [error, setError] = useState('')


  function handleSubmit(e) {
    e.preventDefault()  

    
    if (name.trim() === '') {
      setError('Please enter the student name.')
      return
    }
    if (score === '' || score < 0 || score > 100) {
      setError('Please enter a score between 0 and 100.')
      return
    }

    
    onAdd({
      name: name.trim(),
      score: Number(score),
    })

    
    setName('')
    setScore('')
    setError('')
  }

  return (
    <section className="form-section">
      <h2>Add New Student</h2>

    
      <div className="form-grid">

    
        <div className="form-field">
          <label htmlFor="student-name">Student Name</label>
          <input
            id="student-name"
            type="text"
            className="form-input"
            placeholder="e.g. Priya Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

    
        <div className="form-field">
          <label htmlFor="student-score">Score (0–100)</label>
          <input
            id="student-score"
            type="number"
            className="form-input"
            placeholder="e.g. 78"
            value={score}
            min="0"
            max="100"
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

    
        <button className="btn-add" onClick={handleSubmit}>
          + Add Student
        </button>

      </div>

    {error && <p className="form-error">⚠ {error}</p>}

    </section>
  )
}

export default AddStudentForm