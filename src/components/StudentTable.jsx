import StudentRow from './StudentRow'

function StudentTable({ students, onUpdate, onDelete }) {
  return (
    <div className="table-container">
      <table>

      
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Score / 100</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="5">
                <div className="empty-state">
                  <div className="empty-icon">📭</div>
                  <p>No students yet. Add one below!</p>
                </div>
              </td>
            </tr>
          ) : (
            students.map((student, index) => (
              <StudentRow
                key={student.id} 
                student={student}
                index={index}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>

      </table>
    </div>
  )
}

export default StudentTable