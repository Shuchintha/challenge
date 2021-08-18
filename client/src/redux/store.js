import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducers/reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  ItemsReducer: {
    users: [],
    items: [],
    agedemographic: [],
  },
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
