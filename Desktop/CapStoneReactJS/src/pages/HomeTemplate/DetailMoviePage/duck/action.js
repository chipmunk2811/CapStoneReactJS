import api from '../../../../utils/apiUtil';
import * as ActionType from './types';

export const actDetailMovie = (id) => {
    
    return (dispatch) => {
        dispatch(actDetailMovieRequest());
        api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
            .then((result) => {
                dispatch(actDetailMovieSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actDetailMovieFail(error))
            })
    };
};

export const actDetailMovieRequest = () => {
    return {
        type: ActionType.DETAILMOVIE_REQUEST,

    }
};

export const actDetailMovieSuccess = (data) => {
    return {
        type: ActionType.DETAILMOVIE_SUCCESS,
        payload: data
    }
};

export const actDetailMovieFail = (error) => {
    return {
        type: ActionType.DETAILMOVIE_FAIL,
        payload: error
    }
};