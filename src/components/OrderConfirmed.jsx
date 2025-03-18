import { useDispatch, useSelector } from "react-redux";
import successIcon from "../image/icon-order-confirmed.svg";
import { clearCart } from "../app/features/cartSlice";

const OrderConfirmed = ({ onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.selectedDesserts);
  const totalPrice = cartItems.reduce((total, item) => total + item.amount * item.price, 0);

  const handleNewOrder = () => {
    dispatch(clearCart());
    onClose();
  };

  return (
    <div className="modal-overlay active">
      <div className="modal">
        <img src={successIcon} alt="Success" className="success-icon" />
        <h2>Order Confirmed</h2>
        <p className="order-title">We hope you enjoy your food!</p>

        <div className="order-details">
          <div className="order-items">
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image.thumbnail} />
                <div>
                  <p className="orderconfirm-name">{item.name}</p>
                  <p className="orderconfirm-amount">
                    <span>{item.amount}x</span> @ ${item.price.toFixed(2)}
                  </p>
                </div>
                <p className="orderconfirm-price">${(item.amount * item.price).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="order-total"> Order Total:  ${totalPrice.toFixed(2)}</h3>
        <button onClick={handleNewOrder} className="close-btn">Start New Order</button>
      </div>
    </div>
  );
};

export default OrderConfirmed;
