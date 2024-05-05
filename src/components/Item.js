import React from 'react'
import "../styles/Shop.css"
import {Col} from 'react-bootstrap'

export const Item = ({item, setItemModalActive, setSelectedItem}) => {
    const handleClick = () => {
        setSelectedItem(item); // Передача объекта item
        setItemModalActive(true); // Установка активности модального окна
    };

    return (
        <Col md={3} className='mt-4'>
            <div className='item-card' onClick={handleClick}>
                <img src={require(`../img/jpg/items/${item.picture}.jpg`)} className='card-img' alt='Alternative'/>
                <div className='card-overlay'>
                    <div className='text-block'>
                        <h3 className='item-text'>{item.name}</h3>
                        <p className='item-text'>{item.cost} рублей</p>
                    </div>
                    <div className='button-block'>
                        <button className='pocket-button'>
                            <img style={{width: 24, height: 24}} 
                            src={require('../img/png/shopping-bag.png')} alt=''/>
                        </button>
                    </div>
                </div>
            </div>
        </Col>
    )
}
