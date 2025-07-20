import React from "react";

function ProductCard({ product }) {
  const { name, description, price, stock } = product;
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className="text-lg font-semibold">Price: ${price}</p>
        <p className="text-sm text-gray-600">Stock: {stock}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
