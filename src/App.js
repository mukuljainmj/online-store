import React from "react";
import ReactDOM from "react-dom/client";
import ProductList from "./components/ProductList";
import { Provider } from "react-redux";
import store from "./store/index";
import Navigation from "./components/Navigation";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <Outlet />
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);

export default App;
