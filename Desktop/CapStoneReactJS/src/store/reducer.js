import { combineReducers } from "redux";
import topMovieReducer from '../pages/HomeTemplate/HomePage/duck/reducer';
import detailReducer from '../pages/HomeTemplate/DetailMoviePage/duck/reducer';
import authLoginReducer from '../pages/HomeTemplate/AuthPage/duck/reducer';
const rootReducer = combineReducers({
    topMovieReducer,
    detailReducer,
    authLoginReducer,
});

export default rootReducer;