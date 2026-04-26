function StudentRow({ student, index, onUpdate, onDelete }) {

  const isPassing = student.score >= 40

function handleScoreChange(e) {
    const newScore = Number(e.target.value)
    onUpdate(student.id, newScore)
  }

  return (
    <tr className="student-row">

      
      <td>
        <div className="student-num">{index + 1}</div>
      </td>

      
      <td>
        <span className="student-name">{student.name}</span>
      </td>

      
      <td>
        <input
          type="number"
          className="score-input"
          value={student.score}
          min="0"
          max="100"
          onChange={handleScoreChange}
        />
      </td>

      
      <td>
        {isPassing ? (
          <span className="status-badge pass">✓ Pass</span>
        ) : (
          <span className="status-badge fail">✗ Fail</span>
        )}
      </td>

      <td>
        <button
          className="btn-delete"
          onClick={() => onDelete(student.id)}
          title="Remove student"
        >
          🗑
        </button>
      </td>

    </tr>
  )
}

export default StudentRow