import { useState } from "react";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";
import ExportCode from "./ExportCode";
import TextProperties from "./TextProperties";
const Editor = ({ template }) => {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const updateElement = (id, updatedProps) => {
    setElements((elements) =>
      elements.map((el) => (el.id === id ? { ...el, ...updatedProps } : el))
    );
  };

  const selectedElement = elements.find((el) => el.id === selectedId);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar setElements={setElements} elements={elements} />
      <Canvas
        elements={elements}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <div style={{ width: 300, padding: 20, borderLeft: "1px solid #ccc" }}>
        <h3>Properties</h3>

        {selectedElement?.type === "text" && (
          <TextProperties
            element={selectedElement}
            updateElement={updateElement}
          />
        )}

        <hr />

        <ExportCode elements={elements} />
      </div>
    </div>
  );
};

export default Editor;
