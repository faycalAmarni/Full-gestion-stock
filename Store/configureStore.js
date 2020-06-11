// Store/configureStore.js

import { createStore } from 'redux';
import toggleProducts from './Reducers/ProduitReducer'

export default createStore(toggleProducts)
