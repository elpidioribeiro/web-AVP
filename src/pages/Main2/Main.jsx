import './Main.css'
import Sidebar from "../../Components/Sidebar/Sidebar2";
import historico from "../../assets/png histórico.png"
import biavp from "../../assets/iconeBI.png"
import { useState } from "react";

function Main () {
    
    const [statePage, setStatePage] = useState(-1);
    const src1 = "https://app.powerbi.com/view?r=eyJrIjoiMTI2ZTc3YzYtMTU3Mi00MGZmLTlhMzktMjg2ZWVkZGEwYzExIiwidCI6ImQ4ZDVjZTk1LWJjM2UtNDNkMS1iOWJhLTgzNDdlODdhOGE1YyJ9"
    const src2 = "https://app.powerbi.com/view?r=eyJrIjoiMzRhYzMxNzgtYzhiMi00OGViLTlkMzctMjMxZDI2N2RhNmFjIiwidCI6ImQ4ZDVjZTk1LWJjM2UtNDNkMS1iOWJhLTgzNDdlODdhOGE1YyJ9"
    
    function handleChangePage() {
        let statePageAtual = statePage*(-1)
        console.log(statePageAtual)
        setStatePage(statePageAtual);
    }
   

    return (<div className="Main"> 
        <Sidebar/>
        <div className = "powerBi">
        <img alt = "" className={"logoHistorico"} src= {statePage === 1? biavp : historico} onClick={() => handleChangePage()} />    
        <iframe className= "BI" title="PAINEL GERENCIAL2" width="800" height="373.5" src={statePage === 1 ? src2 : src1} frameborder="0" allowFullScreen="true"></iframe>
        </div>
        </div>)
}



export default Main;