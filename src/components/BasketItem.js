import { React } from 'react'
import "../styles/Shop.css"

export const BasketItem = ({key, item, basket}) => {
  return (
    <div className='basket-item'>
        <img src={require(`../img/jpg/items/${item.picture}.jpg`)} alt="stuff" 
        className='basket-item-img' />
        <div className='basket-item-panel'>
            <div className='basket-item-panel-header'>
                <div className='basket-item-title'>{item.name}</div>
                <button onClick={() => basket.removeItem(item)} className='basket-item-delete-button'>
                  <img src={require('../img/png/icons/x.png')} 
                  className='basket-item-delete-button-img' alt='alt'/>
                </button>
            </div>
            <div className='basket-item-panel-footer'>
                <div className='basket-item-buttons'>
                  <button className="round-button" onClick={() => basket.countDown(item)}>-</button>
                  <span className="number">{item.count}</span>
                  <button className="round-button" onClick={() => basket.countUp(item)}>+</button>
                </div>
                <div className='item-cost'>{item.cost} рублей</div>
            </div>
        </div>
    </div>
  )
}
