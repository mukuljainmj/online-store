import { render, screen } from "@testing-library/react";
import ProductList from "../components/ProductList";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "../store/index";
import mockProducts from "../mock-data/mockProducts";
import "@testing-library/jest-dom";

describe("ProductList Component", () => {
  it("Should add product to cart", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductList />
        </Provider>
      </BrowserRouter>
    );
    const addToCartBtns = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });
    const firstAddToCartBtn = addToCartBtns[0];
    expect(firstAddToCartBtn).toBeInTheDocument();
    expect(firstAddToCartBtn).toHaveTextContent("Add To Cart");
    firstAddToCartBtn.click();
    const cartItems = store.getState().cart.items;
    expect(cartItems.length).toBe(1);
    expect(cartItems[0].id).toBe(mockProducts[0].id);
    expect(cartItems[0].quantity).toBe(1);
  });
});
