import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../app/features/cartSlice";
import cake from "../image/cake.png";
import removebtn from "../image/icon-remove.svg";
import carbon from "../image/icon-carbon.svg";
import OrderConfirmed from "./OrderConfirmed";

function YourCart() {
  const { selectedDesserts, totalPrice, totalAmount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  return (
    <div className="cart-container">
      <h2 style={{ color: "#C73B0F" }}>Your Cart ({totalAmount})</h2>
      {selectedDesserts.length > 0 ? (
        selectedDesserts.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image.thumbnail} className="cart-image" alt={item.name} />
            <div className="cart-1">
              <p>{item.name}</p>
              <p>$ {item.price} * {item.amount}x </p>
            </div>
            <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
              <img src={removebtn} alt="Remove" />
            </button>
          </div>
        ))
      ) : (
        <span><img style={{ width: 180, marginLeft: "70px", height: 180 }} src={cake} alt="Empty Cart" /></span>
      )}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      {selectedDesserts.length > 0 && <p className="natural"><img src={carbon} alt="Carbon Neutral" /> This is carbon-neutral delivery</p>}
      {selectedDesserts.length > 0 && (
        <button className="order-btn" onClick={() => setIsOrderConfirmed(true)}>Confirm Order</button>
      )}
      {isOrderConfirmed && <OrderConfirmed onClose={() => setIsOrderConfirmed(false)} />}
    </div>
  );
}

export default YourCart;
