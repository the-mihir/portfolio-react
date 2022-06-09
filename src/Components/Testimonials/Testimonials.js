import React from 'react'
import './Testimonials.css'
import AVAT1  from '../../assets/avatar1.jpg'
import AVAT2  from '../../assets/avatar2.jpg'
import AVAT3  from '../../assets/avatar3.jpg'
import AVAT4  from '../../assets/avatar4.jpg'

import { Pagination, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';





const data=[
    {
      id: 1,
      avatar: AVAT1,
      name:'Markel Devid',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam totam ea, sunt omnis obcaecati et cumque perspiciatis voluptatum optio.',
      
    },
    {
      id: 2,
      avatar: AVAT2,
      name:'Gustareo Paul',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam totam ea, sunt omnis obcaecati et cumque perspiciatis voluptatum optio.',
    },
    {
      id: 3,
      avatar: AVAT3,
      name:'Mendina ufer',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam totam ea, sunt omnis obcaecati et cumque perspiciatis voluptatum optio.',
    },
    {
      id: 4,
      avatar: AVAT4,
      name:'Suchana lutfer',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam totam ea, sunt omnis obcaecati et cumque perspiciatis voluptatum optio.',
    }
]

function Testimonials() {
  return (
    <section id='testimonials'>
    <h5>Review From Clients</h5>
    <h2>Testimonials</h2>
    <Swiper className="container testi-container"
     // install Swiper modules
     modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}

    >
  

         {
           data.map(({avatar, name, review}, index) =>{
             return(
              <SwiperSlide key={index} className='testi'>
                 <div className="client-avatar">
                  <img src={avatar} alt={avatar} />
                 </div>
                 <h5 className='client-name'>{name}</h5>
                 <small className='client-review'>
                    {review}
                 </small>
              </SwiperSlide>
             )
           })
         }
    </Swiper>
    </section>
  )
}

export default Testimonials




      