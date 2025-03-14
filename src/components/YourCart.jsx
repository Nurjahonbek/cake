import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../app/features/cartSlice";
import cake from  '../image/cake.png'
import removebtn from '../image/icon-remove.svg'
import carbon from '../image/icon-carbon.svg'

function YourCart() {
  const { selectedDesserts, totalPrice } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2 style={{color:'#C73B0F'}}>Your Cart</h2>
      {selectedDesserts.length > 0 ? (
        selectedDesserts.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image.thumbnail} className="cart-image" />
            <div className="cart-1">
              <p>{item.name}</p>
              <p>$ {item.price} * {item.amount}x </p>
            </div>
              <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}><img src = {removebtn} /></button>
          </div>
        ))
      ) : (
        <span><img style={{width:180, marginLeft:'70px', height:180, }} src={cake} /></span>
      )}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      {selectedDesserts.length > 0 ? (<p className="natural"><img src={carbon} /> This is carbon-neutral delivery</p>) : <p></p>}
      {selectedDesserts.length > 0 ? (<button className="order-btn">Confirm Order</button>) : <p></p>}
    </div>
  );
}

export default YourCart;
