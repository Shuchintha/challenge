import React from 'react'
import './BottomTable.css'

function BottomTable({ ageData, items, handleItemSelect, itemSelected }) {
  return (
    <div className='containerBottom'>
      <h2>Age Demographic of Users with {itemSelected}</h2>
      <select
        name='items'
        id='items'
        className='containerBottom--select'
        value='Item'
        onChange={handleItemSelect}
      >
        <option key='item' value='item'>
          Item
        </option>
        {items.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <table className='containerBottom--table'>
        <thead>
          <tr>
            <th>Age</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {ageData.map(data => (
            <tr key={data.age}>
              <td>{data.age}</td>
              <td>{data.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BottomTable
