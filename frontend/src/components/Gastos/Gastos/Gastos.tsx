import React from "react";
import "./Gastos.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Datos simulados
const gastosFijos = [
  { nombre: "Renta", monto: 500, categoria: "Vivienda" },
  { nombre: "Luz", monto: 80, categoria: "Servicios" },
];

const gastosVariables = [
  { nombre: "Cine", monto: 50, categoria: "Entretenimiento" },
  { nombre: "Comida", monto: 120, categoria: "Alimentos" },
];

const colores = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#a066d4", "#ff5c8a"];

// Agrupar para gráfica
const todosGastos = [...gastosFijos, ...gastosVariables];

const gastosPorCategoria = todosGastos.reduce((acc, gasto) => {
  acc[gasto.categoria] = (acc[gasto.categoria] || 0) + gasto.monto;
  return acc;
}, {} as Record<string, number>);

const dataGrafico = Object.entries(gastosPorCategoria).map(([categoria, monto]) => ({
  name: categoria,
  value: monto,
}));

const totalFijos = gastosFijos.reduce((t, g) => t + g.monto, 0);
const totalVariables = gastosVariables.reduce((t, g) => t + g.monto, 0);
const totalGastos = totalFijos + totalVariables;

const Gastos = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="page-wrapper">
        <Header />
        <main className="page-content">
          <div className="ingresos-container">
            <button className="back-button" onClick={() => navigate("/Home/Home")}>
              ← Regresar al menú
            </button>

            <h1 className="ingresos-title">Gastos</h1>

            <div className="grafico-container">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={dataGrafico}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {dataGrafico.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colores[index % colores.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
              Total de gastos: ${totalGastos.toFixed(2)}
            </h2>

            <div className="doble-panel">
              <div className="panel-column">
                <div className="panel-header">
                  <h3>Clasificación de gastos fijos</h3>
                  <span className="total">Total: ${totalFijos.toFixed(2)}</span>
                </div>
                <ul className="lista-ingresos">
                  {gastosFijos.map((gasto, i) => (
                    <li key={i} className="item-ingreso">
                      <strong>{gasto.nombre}</strong>: ${gasto.monto.toFixed(2)}
                      <div className="categoria">Categoría: {gasto.categoria}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="panel-column">
                <div className="panel-header">
                  <h3>Clasificación de gastos variables</h3>
                  <span className="total">Total: ${totalVariables.toFixed(2)}</span>
                </div>
                <ul className="lista-ingresos">
                  {gastosVariables.map((gasto, i) => (
                    <li key={i} className="item-ingreso">
                      <strong>{gasto.nombre}</strong>: ${gasto.monto.toFixed(2)}
                      <div className="categoria">Categoría: {gasto.categoria}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Gastos;