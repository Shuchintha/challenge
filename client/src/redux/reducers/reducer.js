import { GET_ITEMS, GET_USERS, GET_ITEMS_BY_AGE } from '../constants/constants'
import { combineReducers } from 'redux'

const ItemsReducer = (
  state = { users: [], items: [], agedemographic: [] },
  action
) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      }
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case GET_ITEMS_BY_AGE:
      return {
        ...state,
        agedemographic: action.payload,
      }
    default:
      return state
  }
}

export const reducer = combineReducers({
  ItemsReducer,
})
