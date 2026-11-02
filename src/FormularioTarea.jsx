import { useState } from "react";

function FormularioTarea({ onAgregar }) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (texto.trim() === "") {
      setError("La tarea no puede estar vacía");
      return;
    }

    setError("");
    onAgregar(texto.trim());
    setTexto("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div style={{ display: "flex", gap: "8px" }}>
        <input
          type="text"
          placeholder="¿Qué tienes que hacer?"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #d1d5db",
            borderRadius: "6px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Agregar
        </button>
      </div>

      {error && (
        <p style={{ color: "red", marginTop: "8px", fontSize: "14px" }}>
          {error}
        </p>
      )}
    </form>
  );
}

export default FormularioTarea;