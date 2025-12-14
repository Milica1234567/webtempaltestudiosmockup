


const TextProperties = ({ element, updateElement }) => {
  if (!element) return <p>Select text element</p>;

  return (
    <div>
      <h4>Text content</h4>
      <input
        type="text"
        value={element.content}
        onChange={(e) =>
          updateElement(element.id, {
            content: e.target.value
          })
        }
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default TextProperties;
