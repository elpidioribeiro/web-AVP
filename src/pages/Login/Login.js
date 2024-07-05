import logo from '../../assets/auto_viao_progresso_logo-removebg-preview.png'
import './Login.css'
import imgUser from '../../assets/user.png'
import imgPassword from '../../assets/lock.png'
import { useState } from 'react';
import logo2 from '../../assets/logo progresso.png'
import {Link, useNavigate} from 'react-router-dom';
 



function Login () {

    const navigate = useNavigate();
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
        navigate('/register');
    }

    return (
        <>
        <div className='container-main'>
        <form className='container-login'onSubmit={handleChangeSubmit}>
         <img className = 'logo' src= {logo} />
        <div className='login'> 
         <img className = 'usuario' src= {imgUser} />
         <input placeholder='USUÁRIO' name='email' type='text' onChange={(e) => { handleChangeInput(e) }}/>
         </div>
         <div className='senha'> 
          <img className = 'usuario' src= {imgPassword} />
          <input placeholder='SENHA' name='senha' onChange={(e) => { handleChangeInput(e) }}/>
         </div>
         <button className='botao' type='submit' > ENTRAR </button>  
         <button className='botao2' type='button' onClick={handleRegister} > REGISTRE-SE </button>   
        </form>
        </div>
        </>    
    )
}


export default Login;