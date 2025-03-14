import { useState } from 'react'
import './App.css'
import DesertList from './components/DesertsList'
import YourCart from './components/YourCart'
import { useSelector } from 'react-redux'
import { store } from './app/store'

function App() {
const {desserts, selectedDesserts, totalAmount, totalPrice} = useSelector((store) => store.cart)
  return (
    <div className='box'>
      <h1>Desserts</h1>
      <main className='conatiner'>
      <DesertList desserts= {desserts} />
      <YourCart />
    </main>
    </div>

  )
}

export default App
