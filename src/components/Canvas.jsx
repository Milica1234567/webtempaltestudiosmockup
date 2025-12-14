const Canvas = ({ elements, selectedId, setSelectedId }) => {
  return (
    <div style={{ flex: 1, padding: 20, background: "#f9f9f9" }}>
      <h3>Canvas</h3>

      {elements.map(el => (
        <div
          key={el.id}
          onClick={() => setSelectedId(el.id)}
          style={{
            padding: 10,
            marginBottom: 10,
            border: el.id === selectedId ? "2px solid blue" : "1px solid #ccc",
            cursor: "pointer"
          }}
        >
          {el.type === "text" && <p>{el.content}</p>}

          {el.type === "button" && <button>{el.content}</button>}

          
          {el.type === "navbar" && (
            <nav
              style={{
                display: "flex",
                justifyContent:
                  el.variant === "centered" ? "center" : "space-between",
                padding: "10px",
                background: "#eee"
              }}
            >
              {el.items.map((item, index) => (
                <span key={index} style={{ margin: "0 10px" }}>
                  {item}
                </span>
              ))}
            </nav>
          )}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
