import axios from 'axios'
import { GET_ITEMS, GET_USERS, GET_ITEMS_BY_AGE } from '../constants/constants'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const getItems = () => async dispatch => {
  const { data } = await axios.get('http://localhost:3000/items', config)
  dispatch({
    type: GET_ITEMS,
    payload: data,
  })
}

export const getUsers = () => async dispatch => {
  const { data } = await axios.get('http://localhost:3000/users', config)
  dispatch({
    type: GET_USERS,
    payload: data,
  })
}

export const getItemsByAge = itemSelected => async dispatch => {
  const { data } = await axios.get(
    `http://localhost:3000/users/age/${itemSelected}`,
    config
  )
  dispatch({
    type: GET_ITEMS_BY_AGE,
    payload: data,
  })
}
