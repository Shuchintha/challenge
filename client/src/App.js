import React, { useEffect, useState } from 'react'
import './App.css'
import { getItems, getUsers, getItemsByAge } from './redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import TopTable from './components/topTable/TopTable'
import BottomTable from './components/bottomTable/BottomTable'

const App = () => {
  const [itemSelected, setItemSelected] = useState('')
  const dispatch = useDispatch()
  const items = useSelector(state => state.ItemsReducer.items)
  const users = useSelector(state => state.ItemsReducer.users)
  const ageData = useSelector(state => state.ItemsReducer.agedemographic)

  const handleItemSelect = e => {
    setItemSelected(e.target.value)
    dispatch(getItemsByAge(e.target.value))
  }

  useEffect(() => {
    dispatch(getItems())
    dispatch(getUsers())
  }, [dispatch])

  return (
    <section className='container'>
      <TopTable users={users} />
      <BottomTable
        ageData={ageData}
        items={items}
        itemSelected={itemSelected}
        handleItemSelect={handleItemSelect}
      />
    </section>
  )
}

export default App
