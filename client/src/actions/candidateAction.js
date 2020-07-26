import {GET_CANDIDATES,ADD_CANDIDATES,DELETE_CANDIDATES,CANDIDATES_LOADING,CANDIDATE_DETAIL,PREVIEW_CANDIDATES} from './types'
import axios from 'axios'
export const getCandidates = () => (dispatch) => {
    dispatch(setCandidatesLoading());
    axios
      .get('/candidates')
        .then(res =>
          dispatch({
            type: GET_CANDIDATES,
            payload: res.data
          }),
        )
      
  };
export const previewCandidates = () => (dispatch) => {
    dispatch(setCandidatesLoading());
    axios
      .get('/candidates')
        .then(res =>
          dispatch({
            type: PREVIEW_CANDIDATES,
            payload: res.data.slice(0,10)
          }),
        )
      
  };
export const candidateDetail = (id) => (dispatch) => {
    dispatch(setCandidatesLoading());
    axios
      .get('/candidate/'+id)
        .then(res =>
          dispatch({
            type: CANDIDATE_DETAIL,
            payload:res.data
          }),
        )
      
  };
  
  export const addCandidate = (candidate) => (
    dispatch
  ) => {
    axios
      .post('/candidate', candidate)
      .then(res =>
        dispatch({
          type: ADD_CANDIDATES,
          payload: res.data
        })
      )
     
  };
  
  export const deleteCandidate = (id) => (
    dispatch
  ) => {
    axios
      .delete(`/candidate/${id}`)
      .then(res =>
        dispatch({
          type: DELETE_CANDIDATES,
          payload: id
        })
      )
     
  };
  
  export const setCandidatesLoading = () => {
    return {
      type: CANDIDATES_LOADING
    };
  };