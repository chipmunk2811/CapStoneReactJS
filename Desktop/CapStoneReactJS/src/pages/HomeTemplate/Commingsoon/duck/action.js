import api from '../../../../utils/apiUtil';
import * as ActionType from './types';

export const actTopMovie = () => {

    return (dispatch) => {
        dispatch(actTopMovieRequest());
        api.get(`QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=1&soPhanTuTrenTrang=10`)
            .then((result) => {
                dispatch(actTopMovieSuccess(result.data.content.items))
            })
            .catch((error) => {
                dispatch(actTopMovieFail(error))
            })
    };
};

export const actTopMovieRequest = () => {
    return {
        type: ActionType.TOPMOVIE_REQUEST,

    }
};

export const actTopMovieSuccess = (data) => {
    return {
        type: ActionType.TOPMOVIE_SUCCESS,
        payload: data
    }
};

export const actTopMovieFail = (error) => {
    return {
        type: ActionType.TOPMOVIE_FAIL,
        payload: error
    }
};