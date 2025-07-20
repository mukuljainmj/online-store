import React from "react";

function CartCard({ product }) {
  const { name, price, quantity, totalPrice } = product;
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-lg font-semibold">Price: ${price}</p>
        <p className="text-sm text-gray-600">Quantity: {quantity}</p>
        <p className="text-sm text-gray-600">Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
}

export default CartCard;
