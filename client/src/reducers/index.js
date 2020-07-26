import { combineReducers } from "redux";
import candidateReducer from './candidateReducer'
import candidatePreview from './candidatePreview'
import candidateDetail from './candidateDetail'
export default combineReducers({
  previewCandidates:candidatePreview,
  candidates:candidateReducer,
  candidate:candidateDetail
  
})