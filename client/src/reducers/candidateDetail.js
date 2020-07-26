import {CANDIDATES_LOADING,CANDIDATE_DETAIL} from '../actions/types'

const initialState = {
    candidate:'',
    loading:false
}

export default function(state= initialState, action) {
    switch (action.type) {
     
      case CANDIDATE_DETAIL:
        return {
          ...state,
          candidate:action.payload,
          loading: false
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