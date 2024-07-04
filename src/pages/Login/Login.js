import logo from '../../assets/auto_viao_progresso_logo-removebg-preview.png'
import './Login.css'
import imgUser from '../../assets/user.png'
import imgPassword from '../../assets/lock.png'




function Login () {
    return (
        <>
        <div className='container-main'>
        <div className='container-login'>
         <img className = 'logo' src= {logo} />
        <div className='login'> 
         <img className = 'usuario' src= {imgUser} />
         <input placeholder='USUÁRIO' type='text'/>
         </div>
         <div className='senha'> 
          <img className = 'usuario' src= {imgPassword} />
          <input placeholder='SENHA'/>
         </div>
         <button className='botao' > ENTRAR </button>   
        </div>
        </div>
        </>
        
    )
}


export default Login;