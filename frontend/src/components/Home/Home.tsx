import React from "react";
import "./Bienvenida.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import fondo from "../img/FondoInicio.jpeg";

const SpringterCash = () => {
  const navigate = useNavigate();

  return (
    <>
    <Header />
    

      <header className="header">
        <div className="logo">
          <img src={fondo} alt="SpringterCash Logo" />
          <h1>SpringterCash</h1>
        </div>
        
      </header>



      <main className="main-content">
        <div className="overlay">
          <h2>¡Hola bienvenido!</h2>
          <p>
            SpringterCash es una plataforma de <strong>organización de finanzas</strong>, en la cual podrás gestionar tus <strong>ingresos</strong> como tus <strong>gastos</strong>, tanto los <strong>variables</strong> como los <strong>fijos</strong>. Además, te permitirá crear <strong>metas de ahorro</strong> con una dinámica de <strong>rachas</strong> para que te motives a seguir ahorrando y, de esta manera, logres una mejor <strong>organización</strong>.
          </p>
        </div>
      </main>
      <nav className="navigation">
        <ul>
          <li onClick={() => navigate("/inicio")}>Inicio</li>
          <li onClick={() => navigate("/inicio-rapido")}>Inicio rápido</li>
          <li onClick={() => navigate("/tablero")}>Tablero</li>
        </ul>
      </nav>
    <Footer />
       </>
  );
};

export default SpringterCash;