import React from 'react';
import './homepage.styles.scss'

const HomePage = () => {
    return (
    <div className='home-page'>
     <div className='card-container'>
        <div className='menu-item'>
           <div className='content'>
              <div className='title'>Hats</div>
              <span className='subtitle'>SHOP Now</span>
           </div>
        </div>
        <div className='menu-item'>
           <div className='content'>
              <div className='title'>Sneakers</div>
              <span className='subtitle'>SHOP Now</span>
           </div>
        </div>
        <div className='menu-item'>
           <div className='content'>
              <div className='title'>JACKETS</div>
              <span className='subtitle'>SHOP Now</span>
           </div>
        </div>
        <div className='menu-item'>
           <div className='content'>
              <div className='title'>MENS</div>
              <span className='subtitle'>SHOP Now</span>
           </div>
        </div>
        <div className='menu-item'>
           <div className='content'>
              <div className='title'>WOMENS</div>
              <span className='subtitle'>SHOP Now</span>
           </div>
        </div>
     </div>
    </div>
    )
} 

export default HomePage;