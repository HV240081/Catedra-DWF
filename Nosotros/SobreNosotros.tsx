import React from "react";
import "./SobreNosotros.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";



const cardImages = [
  'logo.png', 'logo.png', 'logo.png',
  'logo.png', 'logo.png', 'logo.png',
  
];

const SobreNosotros = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="sn-container">
        <header className="sn-header">
          <span className="back" onClick={() => navigate("/Home/Home")}>
            ← Regresar al menú
          </span>
         
        </header>



        <section className="about-section">
        
         <h1 className="sn-title">Sobre Nosotros</h1>
        <p className="section-text">
         Somos una plataforma dedicada a facilitar el ahorro inteligente y responsable. 
              Nuestra misión es ayudar a las personas a gestionar sus finanzas personales 
              de manera efectiva, ofreciendo herramientas accesibles e innovadoras.
            </p>

      </section>

      <div className="card-grid">
        {cardImages.map((img, index) => (
          <div className="card" key={index}>
            <img src={`/img/${img}`} alt={`Imagen ${index}`} className="card-image" />
            <div className="card-name">Nombre</div>
          </div>
        ))}
      </div>






      </div>
      <br />
      <br />
      <br />
    
      <Footer />
    </>
  );
};

export default SobreNosotros;