import './register.css'
import { useState } from 'react';
import logo3 from '../../assets/logoprogressonome-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import showPassword from '../../assets/show-password.svg'
import hidePassword from '../../assets/hide-password.svg'


function Register () {
    const navigate = useNavigate(); // Hook para navegação
    const [stateEye, setStateEye] = useState(1);
    const [stateEyeConfirm, setStateEyeConfirm] = useState(1);
    const [form, setForm] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });
    

    function handleChangeInput(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleChangeSubmit(e) {
        e.preventDefault();
        const { email, senha, nome, confirmarSenha } = form;
        if (!email || !senha || !confirmarSenha || !nome) {
         alert('Preencha todos os campos');
            return;
        }
        if(senha != confirmarSenha) {
            alert('Digite as senhas iguais');
            return;
        }
        try {
            const response = await api.post ('/user', {
                email,
                name : nome,
                password : senha
            })

            navigate('/'); // Redireciona para a página inicial após sucesso
        
        }
        
        catch (error) {
            console.log(error); // Adicione esta linha para inspecionar o erro
            alert(error.response ? error.response.data.message : 'Erro desconhecido');
       }

    }

    function handleChangeEye () {
        let newState = stateEye*(-1);
        setStateEye(newState);
    }

    function handleChangeEyeConfirm () {
        let newState = stateEyeConfirm*(-1);
        setStateEyeConfirm(newState);
    }



    return (
    <>
    <div className='container-main-register'>
        <div className="container-register">
            <div className="enter-card">  
                <img src={logo3} alt="Logo da empresa" />
            </div>
            <div className='register-card'> 
                <h1>Crie sua conta</h1>
                <form className='register-form' onSubmit={handleChangeSubmit}> 
                    <div className='registerInput'>
                        <label>Nome</label>
                        <input name='nome' onChange={handleChangeInput}/> 
                    </div>
                    <div className='registerInput'>
                        <label>Email Corporativo</label>
                        <input name='email' onChange={handleChangeInput}/> 
                    </div>
                    <div className='registerInput'>
                        <img src= {stateEye < 0? showPassword : hidePassword } className='eye' onClick={handleChangeEye}/>
                        <label>Senha</label>
                        <input name='senha' onChange={handleChangeInput} type = {stateEye > 0? 'password': 'text'}/> 
                    </div>
                    <div className='registerInput'>
                        <img src= {stateEyeConfirm < 0? showPassword : hidePassword } className='eye' onClick={handleChangeEyeConfirm}/>
                        <label>Confirmar senha</label>
                        <input name='confirmarSenha'onChange={handleChangeInput} type = {stateEyeConfirm > 0? 'password': 'text'}/> 
                    </div>
                    <button className='btn-register' type='submit'>Cadastre-se</button>
                    <Link to= "/login" >Já tem uma conta? <span class="login-link">Login</span></Link>
                </form>
            </div>
        </div>
    </div>
    </>    
    )
}


export default Register;