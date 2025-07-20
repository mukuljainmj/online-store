import React from "react";
import { useState, useEffect } from "react";
import mockProducts from "./mock-data/mockProducts";
import ProductCard from "./ProductCard";

function ProductList() {
  const [productList, setProductList] = useState();

  useEffect(() => {
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
      setProductList(data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {productList &&
        productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ProductList;
