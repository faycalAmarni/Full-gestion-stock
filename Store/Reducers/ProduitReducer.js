const initialState = { reduxProduits: []  }

function toggleProducts(state = initialState, action) {

  let nextState
  switch (action.type) {

    case 'FIRST_INNSERT':

        nextState = {
          ...state,
          reduxProduits: action.value
        }
        return nextState || state

    case 'ADD_PRODUCT':

        nextState = {
          ...state,
          reduxProduits: [...state.reduxProduits, action.value]
        }
        return nextState || state

    case 'DELETE_PRODUCT':

        nextState = {
          ...state,
          reduxProduits: state.reduxProduits.filter((item) => item.id !==  action.value.id)
        }
        return nextState || state

    case 'UPDATE_PRODUCT':

        const rest = state.reduxProduits.filter((item) => item.id !==  action.value.id)
        nextState = {
          ...state,
          reduxProduits: [...rest, action.value]
        }
        return nextState || state



    default:
        return state
  }
}

export default toggleProducts
