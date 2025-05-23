import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IngresosForm.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IngresoImg from "../img/Ingreso.jpg";

const IngresosForm: React.FC = () => {
  const navigate = useNavigate();

  const [nombreGasto, setNombreGasto] = useState("");
  const [totalIngreso, setTotalIngreso] = useState("");
  const [usarCategoriaManual, setUsarCategoriaManual] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [categoriaManual, setCategoriaManual] = useState("");

  const categorias = [
    "Salario",
    "Mesada",
    "Pensión",
    "Remesa",
    "Cheque",
    "Alquileres"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !nombreGasto.trim() ||
      !totalIngreso.trim() ||
      (!usarCategoriaManual && !categoriaSeleccionada) ||
      (usarCategoriaManual && !categoriaManual.trim())
    ) {
      alert("Por favor complete todos los campos requeridos.");
      return;
    }

    const monto = parseFloat(totalIngreso);
    if (isNaN(monto) || monto <= 0 || !/^\d+(\.\d{1,2})?$/.test(totalIngreso)) {
      alert("Ingrese un monto válido (positivo, con hasta dos decimales).");
      return;
    }

    navigate("/Ingresos");
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
            <img src={IngresoImg} alt="Ciudad ingresos" className="ingresos-img" />

            <form className="ingresos-form" onSubmit={handleSubmit}>
              <h2>Ingresos</h2>

              <label>
                Ingrese el nombre del gasto:
                <input
                  type="text"
                  value={nombreGasto}
                  onChange={(e) => setNombreGasto(e.target.value)}
                  placeholder="nombre"
                />
              </label>

              <label>
                Ingresa su total de ingreso:
                <input
                  type="text"
                  value={totalIngreso}
                  onChange={(e) => setTotalIngreso(e.target.value)}
                  placeholder="$total"
                />
              </label>

              <label>Clasificación de ingreso</label>
              {!usarCategoriaManual ? (
                <select
                  value={categoriaSeleccionada}
                  onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                >
                  <option value="">Seleccione una categoría ---</option>
                  {categorias.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  value={categoriaManual}
                  onChange={(e) => setCategoriaManual(e.target.value)}
                  placeholder="nombre"
                />
              )}

              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={usarCategoriaManual}
                  onChange={() => {
                    setUsarCategoriaManual(!usarCategoriaManual);
                    setCategoriaManual("");
                    setCategoriaSeleccionada("");
                  }}
                />
                Usar nombre de la categoría
              </label>

              <button type="submit" className="ingresar-btn">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IngresosForm;