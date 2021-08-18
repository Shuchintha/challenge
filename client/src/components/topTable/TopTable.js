import React from 'react'
import './TopTable.css'

function TopTable({ users }) {
  return (
    <div className='containerTop'>
      <h2>All Users</h2>
      <p>Users and their age</p>
      <table className='containerTop--table'>
        <thead>
          <tr>
            <th>Username</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TopTable
