import React from 'react'
//Создали слайдер с помощью Swiper
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

import './ProSlider.css'

import SwiperCore, {
  Parallax,
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper/core'

SwiperCore.use([Autoplay, Parallax, Pagination, Navigation])

export const ProSlider = () => {
  return (
    <div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#2CCFBF',
          '--swiper-pagination-color': '#fff',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={500}
        loop={true}
        parallax={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        className='sliderPro'
      >
        <div
          slot='container-start'
          className='parallax-bg'
          data-swiper-parallax='-23%'
        ></div>
        <SwiperSlide>
          <h3 className='title' data-swiper-parallax='-300'>
            Почему <span>booksStore</span> - это <span>лучший</span> книжный
            интернет магазин?
          </h3>
          <div className='text' data-swiper-parallax='-100'>
            <p>
              Магазин <span>booksStore</span> существует уже более 8 лет и
              отлично зарекомендовал себя на рынке. За все наше существование у
              нас было уже более одного миллиона покупателей. Мы работаем не
              только по России, но также и за границей. У нас тысячи положительных
              отзывов.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='title' data-swiper-parallax='-300'>
            У нас самая большая <span>коллекция</span> редких и{' '}
            <span>уникальных книг</span>
          </h3>
          <div className='text' data-swiper-parallax='-100'>
            <p>
              У нас на сайте представлены самые разные книги. От классики,
              например А.С.Пушкин, Ф.М.Достоевский. До таких редких авторов как
              например Джонни Синс, Амельченко Антон Олегович - за всю карьеру
              писателя написано максимум 3 книги, у нас на сайте представлена
              одна из них
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='title' data-swiper-parallax='-300'>
            Только у нас <span>более 50 магазинов</span> по всей России и самая{' '}
            <span>быстрая доставка</span>
          </div>
          <div className='text' data-swiper-parallax='-100'>
            <p>
              Наша сеть в отличии от других крупных книжных магазинов
              расположены не только в таких крупных городах, как
              Москва и Санкт-Петербург, но и в Майями
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProSlider
