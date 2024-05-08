import React from 'react'
import "../styles/Shop.css"
import {Col} from 'react-bootstrap'

export const Type = ({type}) => {
  return (
    <Col md={4} className='mt-4'>
        <div className='type-card'>
            <h3 className='type-card-title'>{type.name}</h3>
            <img src={require(`../img/png/types/t${type.id}.png`)} 
            alt='Type'
            className='type-card-img'/>
        </div>
    </Col>
  )
}
