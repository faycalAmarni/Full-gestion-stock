import { combineReducers } from 'redux'
import toggleProducts from './ProduitReducer'
import logReducer from './logIn'


export default combineReducers({
  toggleProducts,
  logReducer
})
