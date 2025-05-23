import React from "react";
import "./TipsAhorro.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tips from '../img/Tips.png';

const TipsAhorro = () => {
  const navigate = useNavigate();

  const tips = [
    {
      title: "Evita compras innecesarias",
      content:
        "Antes de comprar algo, pregúntate si realmente lo necesitas. Muchas veces hacemos compras impulsivas que afectan nuestro presupuesto.",
    },
    {
      title: "Ahorra una parte fija de tu ingreso",
      content:
        "Establece un porcentaje de tu ingreso mensual para ahorrar automáticamente. Idealmente, un 10% o más.",
    },
    {
      title: "Haz una lista antes de ir al supermercado",
      content:
        "Planifica tus compras. Ir con una lista evita que compres cosas de más o que olvides lo esencial.",
    },
    {
      title: "Cancela suscripciones innecesarias",
      content:
        "Revisa tus suscripciones activas como plataformas de streaming, apps, revistas, etc. Cancela las que no uses regularmente.",
    },
  ];

return (
  <>
    <Header />
    <div className="tips-container">
      <header className="tips-header">
        <span className="back" onClick={() => navigate("/Home/Home")}>
          ← Regresar al menú
        </span>
        <h1 className="tips-title">Tips de ahorro</h1>
      </header>

      <div className="tips-list">
        {tips.map((tip, index) => (
          <div className="tip-card" key={index}>
            <div className="tip-header">
              <h2>Tips</h2>
              <img src={Tips} alt="icono tip" className="tip-icon" />
            </div>
            <p>{tip.content}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
);
};

export default TipsAhorro;