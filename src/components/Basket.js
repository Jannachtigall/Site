import {React, useContext, useRef} from 'react'
import {Context} from "../index"
import "../styles/Shop.css"
import { BasketItem } from './BasketItem'
import { useScrollbar } from '../hooks/use-scrollbar'
import { observer } from 'mobx-react-lite'

export const Basket = observer(({active, setActive, basket, setOrderModalActive}) => {
    const {user} = useContext(Context)
    const wrapper = useRef(null)
    const hasScroll = user.itemsInBasket.length > 2
    useScrollbar(wrapper, hasScroll)

    return (
        <div className={active ? 'menu active' : 'menu'}>
            <div className='blur'/>
            <div className='menu__content'>
                <div className='menu__header'>
                    <h2>Корзина</h2>
                    <button className='closeButton' onClick={() => setActive(!active)}>
                        <img src={require('../img/png/icons/x.png')} alt='hz'/>
                    </button>
                </div>
                <div style={{height: hasScroll ? 'calc(100% - 290px)' : 'auto'}} ref={wrapper}>
                    <ul>
                        {basket._items.map((item, index) => 
                            <li key={index}>
                                <BasketItem item={item} basket={basket}/>
                                <hr></hr>
                            </li>
                        )}
                    </ul>
                </div>
                <div className='payment'>
                    <div className='paymentTitle'>К оплате {basket.fullPrice} рублей</div>
                    <button onClick={() => {
                        basket.createOrder()
                        setOrderModalActive(true)
                        }} className='paymentButton'>
                        Оформить
                    </button>
                </div>
            </div>
        </div>
    )
})
