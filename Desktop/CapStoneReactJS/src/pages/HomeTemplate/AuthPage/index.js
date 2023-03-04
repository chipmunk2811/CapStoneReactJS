import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actAuthLogin } from './duck/action';
import Loader from '../../../components/Loader';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector((state) => state.authLoginReducer.error);
    const loading = useSelector((state) => state.authLoginReducer.loading);

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const user = {
            taiKhoan: username,
            matKhau: password,
        };
        dispatch(actAuthLogin(user, navigate))
    };



    const renderNoti = () => {
        return error && <div className='alert alert-danger'>{error.response.data.content}</div>
    };

    if (localStorage.getItem('User')) return <Navigate replace to='/now-playing' />
    if (loading) return <Loader />

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mx-auto'>

                    <form onSubmit={handleLogin}>
                        <h3>Login</h3>
                        {renderNoti()}
                        <div className='form-group'>
                            <label>
                                Username:
                            </label>
                            <input placeholder='duyvo' className='form-control' type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>
                                Password:
                            </label>
                            <input placeholder='123456' className='form-control' type="password" value={password} onChange={(event) => setPassword(event.target.value)} />

                        </div>

                        <button type="submit" className='btn btn-success'>Login</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;
