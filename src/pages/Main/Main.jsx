import './Main.css'
import Sidebar from "../../Components/Sidebar/Sidebar2";
import historico from "../../assets/png histórico.png"

function Main () {
    return (<div className="Main"> 
    <Sidebar/>
    <div className = "powerBi">
    <img src= {historico} />    
    <iframe className= "BI" title="PAINEL GERENCIAL2" width="800" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMTI2ZTc3YzYtMTU3Mi00MGZmLTlhMzktMjg2ZWVkZGEwYzExIiwidCI6ImQ4ZDVjZTk1LWJjM2UtNDNkMS1iOWJhLTgzNDdlODdhOGE1YyJ9" frameborder="0" allowFullScreen="true"></iframe>
    </div>
    </div>)
}



export default Main;