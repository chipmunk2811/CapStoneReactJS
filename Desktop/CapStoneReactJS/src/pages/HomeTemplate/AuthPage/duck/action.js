import * as ActionType from './type';
import api from '../../../../utils/apiUtil';

export const actAuthLogin = (user, navigate) => {
    return (dispatch) => {
        dispatch(actAuthRequest());
        api.post('/QuanLyNguoiDung/DangNhap', user)
            .then((result) => {
                if (result.data.content.maLoaiNguoiDung === "KhachHang") {
                    return Promise.reject({
                        response: {
                            data: {
                                content: "Bạn không có quyền truy cập!",
                            },
                        }
                    })
                };

                dispatch(actAuthSuccess(result.data.content));
                // Save local storage
                localStorage.setItem('User',JSON.stringify(result.data.content))

                // Redirect
                navigate("/now-playing", { replace: true });
            })
            .catch((error) => {
                dispatch(actAuthFail(error));
            });
    };
};


export const actAuthRequest = () => {
    return {
        type: ActionType.AUTH_REQUEST,
    }
};

export const actAuthSuccess = (data) => {
    return {
        type: ActionType.AUTH_SUCCESS,
        payload: data,
    }
};

export const actAuthFail = (error) => {
    return {
        type: ActionType.AUTH_FAIL,
        payload: error,
    }
};