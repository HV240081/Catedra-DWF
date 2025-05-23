import React from "react";
import "./Ingresos.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Datos simulados (reemplaza con datos reales si estás usando backend)
const ingresos = [
  { nombre: "Salario Abril", monto: 1200, categoria: "Salario" },
  { nombre: "Mesada Mayo", monto: 200, categoria: "Mesada" },
  { nombre: "Renta", monto: 400, categoria: "Alquileres" },
];

const colores = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#a066d4", "#ff5c8a"];

// Calcular totales por categoría
const ingresosPorCategoria = ingresos.reduce((acc, ingreso) => {
  acc[ingreso.categoria] = (acc[ingreso.categoria] || 0) + ingreso.monto;
  return acc;
}, {} as Record<string, number>);

const dataGrafico = Object.entries(ingresosPorCategoria).map(([categoria, monto]) => ({
  name: categoria,
  value: monto,
}));

const totalIngresos = ingresos.reduce((total, ingreso) => total + ingreso.monto, 0);

const Ingresos = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="ingresos-container">
        <span className="back" onClick={() => navigate("/Home/Home")}>
          ← Regresar al menú
        </span>

        <h1 className="ingresos-title">Ingreso</h1>

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

        <div className="panel-clasificacion">
          <div className="panel-header">
            <h2>Clasificación de ingreso</h2>
            <span className="total">Total: ${totalIngresos.toFixed(2)}</span>
          </div>
          <ul className="lista-ingresos">
            {ingresos.map((ingreso, index) => (
              <li key={index} className="item-ingreso">
                <strong>{ingreso.nombre}</strong>: ${ingreso.monto.toFixed(2)}
                <div className="categoria">Categoría: {ingreso.categoria}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ingresos;