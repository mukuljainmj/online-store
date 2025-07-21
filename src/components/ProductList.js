import React from "react";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/productsSlice";
import { getProducts } from "../services/productService";

function ProductList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // In real application, we would fetch products from an API.
    if (products) return; // this return is needed as we are working with mock data, in real application we would not have this check
    const fetchData = async () => {
      try {
        const response = await getProducts();
        const data = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ProductList;
