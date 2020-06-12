const initialState = {
          isSignout: true,
          actuelUser: [],
        }

function logReducer(state = initialState, action) {

  let nextState
  switch (action.type) {

    case 'SIGN_IN':

        nextState = {
          ...state,
          isSignout: false,
          actuelUser : action.value,
        }
        return nextState || state

    case 'SIGN_OUT':

        nextState = {
          ...state,
          isSignout: true,
          actuelUser: [],
        }
        return nextState || state

    default:
        return state
  }
}

export default logReducer
