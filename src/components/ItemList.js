import React, { useContext } from 'react'
import { Context } from '../index'
import {Row} from "react-bootstrap"
import { Item } from './Item'

export const ItemList = ({setItemModalActive, setSelectedItem}) => {
    const {item} = useContext(Context)

    return (
        <Row className='mb-4'>
            {item.items.map( item =>
                <Item 
                item={item}
                setItemModalActive={setItemModalActive}
                setSelectedItem={setSelectedItem}
                /> 
            )}
        </Row>
    )
}
