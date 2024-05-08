import {React, useContext} from 'react'
import {Context} from "../index"
import "../styles/Shop.css"

export const OrderModal = ({active, setActive, item}) => {

    const {basket} = useContext(Context)

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "orderModal__content active" : "orderModal__content"} 
            style={{display: 'block'}}
            onClick={e => e.stopPropagation()}>
                <div className='order-title'>
                    <h2>Оформить заказ</h2>
                    <button className='order-close-button' onClick={() => setActive(false)}/>
                </div>
                <form className='order-form'>
                    <div className="form-group">
                        <label htmlFor="login">Ваше имя:</label>
                        <input type="text" id="login" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Номер телефона:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className='total-sum'>
                        <label style={{marginBottom: 10}}>Общая сумма: {basket.fullPrice} рублей</label>
                    </div>
                    <button className='submitButton' type="submit">Войти</button>
                </form>
            </div>
        </div>

    )
}
