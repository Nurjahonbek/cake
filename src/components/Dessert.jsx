
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity, decreaseQuantity, addTocart } from '../app/features/cartSlice'
import basket from '../image/icon-basket.png'
import inc from '../image/icon-inc.svg'
import dec from '../image/icon-dec.svg'

function Dessert({ d }) {
  const dispatch = useDispatch()
  const cartItems = useSelector((store) => store.cart.selectedDesserts) || []
  const itemInCart = cartItems.find((item) => item.id == d.id)
  const amount = itemInCart ? itemInCart.amount : 0

  const addDessert = () => {
    dispatch(addTocart({ amount: 1, ...d }))
  }

  const decreaseDessert = () => {
    dispatch(decreaseQuantity(d.id))
  }

  const increaseDessert = () => {
    dispatch(increaseQuantity(d.id))
  }

  return (

    <div className="card">
      <picture>
        <source media="(min-width: 350px)" srcSet={d.image.mobile} />
        <source media="(min-width: 1024px)" srcSet={d.image.desktop} />
        <source media="(min-width: 768px)" srcSet={d.image.tablet} />
        <img className='card-image' src={d.image.thumbnail} />
      </picture>

      {amount == 0 ? (
        <button className="add-btn" onClick={addDessert}><img style={{width:25, height:20}} src={basket} />Add to Cart</button>
      ) : (
        <div className="counter">
          <button onClick={decreaseDessert}><img style={{width:15, height:4}} src={dec} /></button>
          <span >{amount}</span>
          <button onClick={increaseDessert}><img style={{width:15, height:15}} src={inc} /></button>
        </div>
      )}
     <div className='card-price'>
     <p>{d.category}</p>
      <h3 className='card-name'>{d.name}</h3>
      <h3>$ {d.price}</h3>
     </div>
    </div>
  )
}

export default Dessert
