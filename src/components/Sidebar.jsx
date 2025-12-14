import { navbarTemplates } from "../utils/navbarTemplates.js";

const Sidebar = ({ elements, setElements }) => {
  const addText = () => {
    setElements([
      ...elements,
      {
        id: Date.now(),
        type: "text",
        content: "New text",
      },
    ]);
  };

  const addButton = () => {
    setElements([
      ...elements,
      {
        id: Date.now(),
        type: "button",
        content: "Click me",
      },
    ]);
  };

  const addNavbar = (variant) => {
    setElements([
      ...elements,
      {
        id: Date.now(),
        ...navbarTemplates[variant],
      },
    ]);
  };

  return (
    <div style={{ width: 200, padding: 20, borderRight: "1px solid #ccc" }}>
      <h3>Elements</h3>
      <h4>Navbars</h4>

      <button onClick={() => addNavbar("simple")}>Simple Navbar</button>

      <button onClick={() => addNavbar("centered")} style={{ marginTop: 5 }}>
        Centered Navbar
      </button>
      <h3>Elements</h3>
      <button onClick={addText}>Add Text</button>
      <br />
      <h3>Elements</h3>
      <button onClick={addButton} style={{ marginTop: 10 }}>
        Add Button
      </button>
    </div>
  );
};

export default Sidebar;
