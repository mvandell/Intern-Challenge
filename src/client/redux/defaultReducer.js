const initialState = {
    counter: 0,
    message: '',
  };
  
  function defaultReducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          counter: state.counter + 1,
        };
  
      case 'DECREMENT':
        return {
          ...state,
          counter: state.counter - 1,
        };
  
      case 'SET_MESSAGE':
        return {
          ...state,
          message: action.payload,
        };
  
      default:
        return state;
    }
  }
  
  export default defaultReducer;