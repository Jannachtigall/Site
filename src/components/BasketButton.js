import React from 'react'
import "../styles/Shop.css"

const BasketButton = ({active, setActive}) => {
  return (
    <div className="floating-button-container">
        <button className="floating-button" onClick={
          () => {
            setActive(!active)
          }
        }>
            <img style={{width: 34, height: 34}} 
            src={require('../img/png/basket.png')} alt='0_0'/>
        </button>
    </div>
  )
}

export default BasketButton
