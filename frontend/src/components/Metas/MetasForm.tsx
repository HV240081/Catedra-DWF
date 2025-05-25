export {};import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Ingresos/IngresosForm.css"; // Reutiliza estilos
import Header from "../components/Header";
import Footer from "../components/Footer";
import IngresoImg from "../img/Ingreso.jpg"; // Puedes reemplazarla por una imagen de metas si tienes una

const MetasForm: React.FC = () => {
  const navigate = useNavigate();

  const [nombreMeta, setNombreMeta] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [montoAhorro, setMontoAhorro] = useState("");

  const hoy = new Date().toISOString().split("T")[0]; // formato yyyy-mm-dd para input tipo date

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombreMeta.trim() || !fechaInicio || !fechaFin || !montoAhorro.trim()) {
      alert("Por favor complete todos los campos.");
      return;
    }

    if (fechaInicio < hoy || fechaFin < fechaInicio) {
      alert("Las fechas seleccionadas no son válidas.");
      return;
    }

    const monto = parseFloat(montoAhorro);
    if (isNaN(monto) || monto <= 0 || !/^\d+(\.\d{1,2})?$/.test(montoAhorro)) {
      alert("Ingrese un monto válido (positivo, con hasta dos decimales).");
      return;
    }

    navigate("/Metas");
  };

  return (
    <div className="page-wrapper">
      <Header />
      <main className="page-content">
        <div className="ingresos-container">
          <button className="back-button" onClick={() => navigate("/Home/Home")}>
            ← Regresar al menú
          </button>

          <div className="ingresos-content">
            <img src={IngresoImg} alt="Ciudad metas" className="ingresos-img" />

            <form className="ingresos-form" onSubmit={handleSubmit}>
              <h2>Crear Meta de Ahorro</h2>

              <label>
                Nombre de la meta:
                <input
                  type="text"
                  value={nombreMeta}
                  onChange={(e) => setNombreMeta(e.target.value)}
                  placeholder="Ej. Viaje, Laptop, etc."
                />
              </label>

              <label>
                ¿Cuándo quiere iniciar?
                <input
                  type="date"
                  value={fechaInicio}
                  min={hoy}
                  onChange={(e) => setFechaInicio(e.target.value)}
                />
              </label>

              <label>
                ¿Cuándo quiere finalizar?
                <input
                  type="date"
                  value={fechaFin}
                  min={fechaInicio || hoy}
                  onChange={(e) => setFechaFin(e.target.value)}
                />
              </label>

              <label>
                ¿Cuánto quiere ahorrar?
                <input
                  type="text"
                  value={montoAhorro}
                  onChange={(e) => setMontoAhorro(e.target.value)}
                  placeholder="$0.00"
                />
              </label>

              <button type="submit" className="ingresar-btn">
                Guardar Meta
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MetasForm;
