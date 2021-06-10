import React from 'react'

import './Contacts.css'

//страница контактов
const Contacts = () => {
  return (
    <div className='row contacts'>
      <div className='col s6 offset-s3'>
        <h3 className='contacts__header'>Наши контакты</h3>
        <div className='contacts__offlineStore'>
          <span>booksStore на Арбатской</span>
          <p>152004, г.Москва, ул. Арбатская, д.23</p>
          <p className='number'>
            <a href='tel:+7 999 999 99 99'>+7 999 999 99 99</a>
          </p>
          <p>booksStore_full-ignore@mail.ru</p>
          <p>Ежедневно с 10.00 до 20.00</p>
        </div>
        <div className='contacts__onlineStore'>
          <span>booksStore онлайн</span>
          <p className='number'>
            <a href='tel:+7 999 999 99 99'>+7 999 999 99 99</a>
          </p>
          <p>booksStore@mail.ru</p>
        </div>
      </div>
    </div>
  )
}

export default Contacts
