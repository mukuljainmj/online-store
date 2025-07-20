import React from "react";
import ReactDOM from "react-dom/client";
import ProductList from "./ProductList";

function App() {
  return (
    <div>
      <ProductList />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
