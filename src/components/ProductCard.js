import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice";
import { updateStock } from "../store/productsSlice";
import { formatDistanceToNow } from "date-fns";

function ProductCard({ product }) {
  const { name, description, price, stock } = product;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // In real application, we make a post call here to backend server in order to add the item to the cart
    dispatch(addItemToCart(product));
    dispatch(updateStock({ id: product.id, stock: product.stock - 1 }));
  };

  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className="text-lg font-semibold">Price: ${price}</p>
        <p className="text-sm text-gray-600">Stock: {stock}</p>
        <p className="text-xs text-gray-500">
          Created:{" "}
          {formatDistanceToNow(new Date(product.createdAt), {
            addSuffix: true,
          })}
        </p>
        <div className="card-actions justify-end">
          {stock > 0 ? (
            <button className="btn btn-secondary" onClick={handleAddToCart}>
              Add To Cart
            </button>
          ) : (
            <button className="btn btn-secondary" disabled>
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
