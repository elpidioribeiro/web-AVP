import logo from '../../assets/auto_viao_progresso_logo-removebg-preview.png'
import './Login.css'
import imgUser from '../../assets/user.png'
import imgPassword from '../../assets/lock.png'
import { useState } from 'react';





function Login () {

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
         <button className='botao' > ENTRAR </button>   
        </form>
        </div>
        </>
        
    )
}


export default Login;