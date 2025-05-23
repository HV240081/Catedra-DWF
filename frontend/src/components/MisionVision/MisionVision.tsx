import React from "react";
import "./MisionVisionValores.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MisionVisionValores = () => {
  const navigate = useNavigate();

  const contenido = [
    { title: "Misión", text: "Facilitar el ahorro eficiente y accesible para todos, brindando herramientas digitales intuitivas." },
    { title: "Visión", text: "Ser la plataforma líder en gestión de ahorros, promoviendo la educación financiera y la estabilidad económica." },
    { title: "Valores", text: "Transparencia, compromiso, accesibilidad e innovación para mejorar la vida de nuestros usuarios." },
  ];

  return (
    <>
      <Header />
      <div className="mv-container">
        <header className="mv-header">
          <span className="back" onClick={() => navigate("/Home/Home")}>
            ← Regresar al menú
          </span>
          <h1 className="mv-title">Misión, Visión y Valores</h1>
        </header>

        <div className="mv-content">
          {contenido.map((item, index) => (
            <div className="mv-card" key={index}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MisionVisionValores;