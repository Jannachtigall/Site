import React from 'react'
import "../styles/Shop.css"

export const ItemModal = ({active, setActive, item}) => {
    if (!item) {
        return null; // Возвращаем null, если item не определен
    }
    
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="modal__left">
                    <img src={require(`../img/jpg/items/${item.picture}.jpg`)} alt="Item" className="modal__image" />
                </div>
                <div className="modal__right">
                    <div className='modal-item-text'>
                        <div className='modal-item-title'>
                            <div className="modal__title">{item.name}</div>
                            <div style={
                            {width: 60, height: 60}}>
                                <button className='basket-item-delete-button'
                                onClick={() => {
                                    setActive(!active)
                                }}>
                                    <img src={require(
                                        `../img/png/icons/x.png`
                                    )} alt='close'/>
                                </button>
                            </div>
                        </div>
                        <p className="modal__price">{item.cost} рублей</p>
                        <p className="modal__description">{item.desc}</p>
                    </div>
                    <div style={{'textAlign': 'right'}}>
                        <button className='pocket-button' style={
                            {width: 60, height: 60}}>
                            <img src={require('../img/png/shopping-bag.png')}
                            alt='shopping'></img>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
