import {GET_CANDIDATES,ADD_CANDIDATES,DELETE_CANDIDATES,CANDIDATES_LOADING,PREVIEW_CANDIDATES} from '../actions/types'

const initialState = {
    candidates:[],
    loading:false
}

export default function(state= initialState, action) {
    switch (action.type) {
      case GET_CANDIDATES:
        return {
          ...state,
          candidates: action.payload,
          loading: false
        };
      
      case DELETE_CANDIDATES:
        return {
          ...state,
          candidates: state.candidates.filter(candidate => candidate._id !== action.payload)
        };
      case ADD_CANDIDATES:
        return {
          ...state,
          candidates: [action.payload, ...state.candidates]
        };
      case CANDIDATES_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }