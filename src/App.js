import React from "react";
import ReactDOM from "react-dom/client";
import ProductList from "./ProductList";
import { Provider } from "react-redux";
import store from "./store/index";
import Navigation from "./Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <ProductList />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default App;
