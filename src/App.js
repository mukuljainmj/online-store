import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <div className="text-3xl font-bold underline">App</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
