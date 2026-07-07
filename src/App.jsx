import React from 'react'


const data = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Jane Smith'
  },
  {
    id: 3,
    name: 'Mike Johnson'
  }
]


const App = () => {
  return (
    <div>
      <h1>User List</h1>

      <ul>
        {
          data.map(user => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App