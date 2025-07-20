import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

function Cart() {
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );
  return (
    <div>
      <div>
        {items.map((item) => (
          <CartCard key={item.id} product={item} />
        ))}
      </div>
      <div>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount}</p>
      </div>
    </div>
  );
}

export default Cart;
