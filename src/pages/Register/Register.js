import logo from '../../assets/auto_viao_progresso_logo-removebg-preview.png'
import './register.css'
import imgUser from '../../assets/user.png'
import imgPassword from '../../assets/lock.png'
import { useState } from 'react';
import logo2 from '../../assets/progresso-removebg-preview.png'
import logo3 from '../../assets/logoprogressonome-removebg-preview.png'
import { Link } from 'react-router-dom';





function Register () {

    const [form, setForm] = useState({
        email: '',
        senha: ''
    });

    function handleChangeInput(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleChangeSubmit(e) {
        e.preventDefault();
        console.log(form)
        const { email, senha } = form;
        if (!email || !senha) {
         alert('Preencha email e senha');
            return;
        }
    }

    function handleRegister() {
        console.log('registre-se')
    }

    return (
    <>
    <div className='container-main-register'>
        <div className="container-register">
            <div className="enter-card">  
                <img src={logo3} alt="Logo da empresa" />
            </div>
            <div className='register-card'> 
                <form className='register-form'> 
                    <h1>Crie sua conta</h1>
                    <div className='registerInput'>
                        <label>Nome</label>
                        <input name='nome'/> 
                    </div>
                    <div className='registerInput'>
                        <label>Email</label>
                        <input name='email'/> 
                    </div>
                    <div className='registerInput'>
                        <label>Senha</label>
                        <input name='senha'/> 
                    </div>
                    <div className='registerInput'>
                        <label>Confirmar senha</label>
                        <input name='senha'/> 
                    </div>
                    <button type='submit'>Cadastre-se</button>
                    <Link to= "/login" >Já tem uma conta? <span class="login-link">Login</span></Link>
                </form>
            </div>
        </div>
    </div>
    </>    
    )
}


export default Register;