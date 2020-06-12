const initialState = { isSignout: true, }

function logReducer(state = initialState, action) {

  let nextState
  switch (action.type) {

    case 'SIGN_IN':

        nextState = {
          ...state,
          isSignout: false,
        }
        return nextState || state

    case 'SIGN_OUT':

        nextState = {
          ...state,
          isSignout: true,
        }
        return nextState || state

    default:
        return state
  }
}

export default logReducer
