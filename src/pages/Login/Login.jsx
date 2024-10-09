import React, { useState } from 'react';
import logo from '../../assets/logoprogressonome-removebg-preview.png';
import './Login.css';
import imgUser from '../../assets/user.png';
import imgPassword from '../../assets/lock.png';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import openEye from '../../assets/show-password.svg';
import closeEye from '../../assets/hide-password.svg';
import { setItem } from '../../utils/storage';

function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        senha: ''
    });
    const [stateEye, setStateEye] = useState(-1);
    const [errorMessage, setErrorMessage] = useState('');

    function handleChangeInput(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleChangeSubmit(e) {
        e.preventDefault();
        const { email, senha } = form;
        if (!email || !senha) {
            setErrorMessage('Preencha email e senha');
            return;
        }
        try {
            await loginUser(email, senha);
            navigate('/main');
        } catch (error) {
            // Error handling moved to loginUser function
        }
    }

    async function loginUser(email, senha) {
        try {
            const response = await api.post('/login', {
                email,
                password: senha
            });

            await api.post('/logAcess', {
                email
            });
            setItem('token', response.data.token);
        } catch (error) {
            setErrorMessage(error.response ? error.response.data.message : 'Erro desconhecido');
            throw error; // Rethrow error to be caught in handleChangeSubmit
        }
    }

    function handleRegister() {
        navigate('/register');
    }

    function handleChangeEye() {
        setStateEye(prevState => -prevState);
    }

    return (
        <div className='container-main'>
            <form className='container-login' onSubmit={handleChangeSubmit}>
                <img className='logo' src={logo} alt="Logo" />
                <div className='login'>
                    <img className='usuario' src={imgUser} alt="Usuário" />
                    <input placeholder='USUÁRIO' name='email' type='text' onChange={handleChangeInput} />
                </div>
                <div className='senha'>
                    <img className='eyePassword' src={stateEye < 0 ? closeEye : openEye} onClick={handleChangeEye} tabIndex="0" alt="Toggle password visibility" />
                    <img className='usuario' src={imgPassword} alt="Senha" />
                    <input placeholder='SENHA' name='senha' onChange={handleChangeInput} type={stateEye > 0 ? "text" : "password"} />
                </div>
                {errorMessage && (
                    <div className='spanError'>
                        <span className="error-message">{errorMessage}</span>
                    </div>
                )}
                <button className='botao' type='submit'>ENTRAR</button>
                <button className='botao2' type='button' onClick={handleRegister}>REGISTRE-SE</button>
            </form>
        </div>
    );
}

export default Login;
