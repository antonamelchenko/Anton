import React from 'react'

import './ShoppingBag.css'

//странциа корзины покупок, доступная только авторизированным пользователям
const ShoppingBag = () => {
  return (
    <div className='row shopping-bag'>
      <div className='col s6 offset-s3'>
        <h3 className='shopping-bag__header'>Корзина покупок</h3>
      </div>
    </div>
  )
}

export default ShoppingBag
