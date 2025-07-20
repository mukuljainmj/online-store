import React from "react";
import { useEffect } from "react";
import mockProducts from "../mock-data/mockProducts";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/productsSlice";

function ProductList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // In real application, we would fetch products from an API.
    if (products) return; // this return is needed as we are working with mock data, in real application we would not have this check
    const mockFetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ json: () => Promise.resolve(mockProducts) });
        }, 1000);
      });
    };
    const fetchData = async () => {
      const response = await mockFetchProducts();
      const data = await response.json();
      dispatch(setProducts(data));
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
