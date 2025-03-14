
import React from 'react'
import Dessert from './Dessert'

function Desertlist({ desserts = [] }) {
  return (
    <div className="dessert-container">
      {desserts.length > 0 ? (
        desserts.map((d) => <Dessert key={d.id} d={d} />)
      ) : (
        <p></p>
      )}
    </div>
  )
}

export default Desertlist
