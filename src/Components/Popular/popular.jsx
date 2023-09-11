import React, { useState, useEffect }  from 'react'
import "./Popular.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { sliderSettings } from '../../utils/common.js';

const Popular = () => {
//   return (
//     <div>
      
//     </div>
//   )

const [products, setproducts] = useState([]);

  const fetchData = () => {
    // const response = await fetch('https://fakestoreapi.com/products');
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=b9c2e468de542ecb0fe3dc9d8233632d')
    .then(res=>res.json())
    .then(json => setproducts(json.results))
    //settopRated(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <section className='r-wrapper'>
      <div className='innerWidth paddings r-container'>
        <div className='r-head flexColStart'>
          <span className='type-Text'>Popular</span>
        </div>

        <Swiper {...sliderSettings}>

          {products.map((card, i) => (
            <SwiperSlide key={i}>
            <div className='flexColStart r-card'>
            <img src={`https://image.tmdb.org/t/p/w500${card.poster_path}`} alt='home'></img>

            <span className='secondaryText r-price'>
            <span style={{color:"orange"}}>{card.vote_average}</span>
            </span>

            <span className='primaryText title'>{card.original_title}</span>
           </div>      
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>

    
  );
}

export default Popular
