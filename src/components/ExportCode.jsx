import { generateHtml } from "../utils/generateHtml";

const ExportCode = ({ elements }) => {
  const downloadHtml = () => {
    const htmlContent = generateHtml(elements);

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h3>Export</h3>

      <button onClick={downloadHtml} style={{ marginBottom: 10 }}>
        Download HTML
      </button>

      <textarea
        rows={15}
        style={{ width: "100%" }}
        value={generateHtml(elements)}
        readOnly
      />
    </div>
  );
};

export default ExportCode;
