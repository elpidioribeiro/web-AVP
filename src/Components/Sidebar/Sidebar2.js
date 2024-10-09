import React from 'react';
import './Sidebar.css'; // Importa o CSS
import logo from '../../assets/auto_viao_progresso_logo-removebg-preview.png'; // Importa o logo
import { clear } from '../../utils/storage';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate

// Ícones em SVG
const HistoryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
    <path d="M11 5v6l4 2"></path>
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"></circle>
  </svg>
);

const LogoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
    <path d="M10 17l5-5-5-5v4H3v2h7v4z"></path>
    <path d="M20 12c0-4.4-3.6-8-8-8-2.4 0-4.6 1.1-6.2 2.8l1.5 1.5C8.6 7.5 10.3 6 12 6c3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.7 0-3.4-0.6-4.7-1.7l-1.5 1.5c1.6 1.7 3.8 2.8 6.2 2.8 4.4 0 8-3.6 8-8z"></path>
  </svg>
);

const Sidebar = () => {
  const navigate = useNavigate(); // Hook useNavigate

  const quit = () => {
    clear();
    navigate('/login'); // Use navigate para redirecionar
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="sidebar-content">
        <button className="sidebar-item" onClick={quit}>
          <LogoutIcon />
          <span>SAIR</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
