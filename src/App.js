import { useState } from "react";
import TemplatePicker from "./components/TemplatePicker";
import Editor from "./components/Editor";

function App() {
  const [template, setTemplate] = useState(null);

  if (!template) {
    return <TemplatePicker onSelect={setTemplate} />;
  }

  return <Editor template={template} />;
}

export default App;
