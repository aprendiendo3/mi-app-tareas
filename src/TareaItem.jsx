function TareaItem({ tarea, onToggle, onEliminar }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        margin: "8px 0",
        backgroundColor: tarea.completada ? "#f0fdf4" : "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        textDecoration: tarea.completada ? "line-through" : "none",
        color: tarea.completada ? "#9ca3af" : "#111827",
      }}
    >
      <span
        onClick={() => onToggle(tarea.id)}
        style={{ cursor: "pointer", flex: 1, textAlign: "left" }}
      >
        {tarea.texto}
      </span>

      <button
        onClick={() => onEliminar(tarea.id)}
        style={{
          backgroundColor: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "6px 12px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TareaItem;