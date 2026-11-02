import { useState } from "react";
import FormularioTarea from "./FormularioTarea";
import TareaItem from "./TareaItem";

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Aprender React", completada: true },
    { id: 2, texto: "Construir mi primera app", completada: false },
    { id: 3, texto: "Desplegarla en internet", completada: false },
  ]);

  const [filtro, setFiltro] = useState("todas");

  function agregarTarea(texto) {
    const nueva = {
      id: Date.now(),
      texto: texto,
      completada: false,
    };
    setTareas([...tareas, nueva]);
  }

  function toggleTarea(id) {
    const nuevas = tareas.map((t) =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );
    setTareas(nuevas);
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter((t) => t.id !== id));
  }

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  const pendientes = tareas.filter((t) => !t.completada).length;

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#1f2937" }}>Mis Tareas</h1>
      <p style={{ color: "#6b7280", marginBottom: "20px" }}>
        Te quedan <strong>{pendientes}</strong> tareas pendientes
      </p>

      <FormularioTarea onAgregar={agregarTarea} />

      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        {["todas", "pendientes", "completadas"].map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            style={{
              padding: "6px 12px",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              backgroundColor: filtro === f ? "#3b82f6" : "white",
              color: filtro === f ? "white" : "#374151",
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <div>
        {tareasFiltradas.length === 0 ? (
          <p style={{ textAlign: "center", color: "#9ca3af", padding: "20px" }}>
            No hay tareas para mostrar
          </p>
        ) : (
          tareasFiltradas.map((tarea) => (
            <TareaItem
              key={tarea.id}
              tarea={tarea}
              onToggle={toggleTarea}
              onEliminar={eliminarTarea}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;