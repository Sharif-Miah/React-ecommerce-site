import React from 'react'
import Categories from './Categories';
// import SlideCard from './SlideCard';
import Slider from './Slider';
import './Home.css'


const Home = () => {
  return (
    
        <section className='home'>
          <div className="container main-section d_flex" >
           
            <div style={{width: "300px"}}> <Categories />
            </div>
            <div style={{width: "1171px", alignSelf: "center", margin: ' auto', height: "510px"}}><Slider /></div>
          </div>
        </section>
    
  )
}

export default Home;