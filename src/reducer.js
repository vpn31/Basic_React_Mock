import { combineReducers } from "redux";
const initialState = {
    user: null
  };

const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':

        return {
          ...state,
          user: action.payload
        };
      default:
        return state;
    }
  };

const rootReducer = combineReducers({
    user:Reducer
})

export default rootReducer;