import {React, useContext, useRef} from 'react'
import {Context} from "../index"
import "../styles/Shop.css"
import { BasketItem } from './BasketItem'
import { useScrollbar } from '../hooks/use-scrollbar'
import { Link } from 'react-router-dom'

export const Basket = ({active, setActive}) => {
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
                    <button className='closeButton' onClick={
                        () => {
                            setActive(!active)
                        }
                    }>
                        <img src={require('../img/png/icons/x.png')} alt='hz'/>
                    </button>
                </div>
                <div style={{height: hasScroll ? '350px' : 'auto'}} ref={wrapper}>
                    <ul style={{'list-style-type': 'none'}}>
                        {user.itemsInBasket.map(item => 
                            <li>
                                <BasketItem key={item.id} item={item}/>
                                <hr></hr>
                            </li>
                        )}
                    </ul>
                </div>
                <div className='payment'>
                    <div className='paymentTitle'>К оплате{}</div>
                    <Link className='paymentButton'>
                        Оплатить
                    </Link>
                </div>
            </div>
        </div>
    )
}
