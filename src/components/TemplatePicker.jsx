const TemplatePicker = ({ onSelect }) => {
  return (
    <div style={{ padding: 40 }}>
      <h1>WebTemlate Studios</h1>
      <p>Select a template</p>

      <button onClick={() => onSelect("landing")}>
        Landing Page
      </button>

      <button onClick={() => onSelect("instagram")} style={{ marginLeft: 10 }}>
        Instagram Post
      </button>
    </div>
  );
};

export default TemplatePicker;
