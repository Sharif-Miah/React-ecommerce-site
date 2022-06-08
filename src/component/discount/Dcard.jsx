import React from 'react'
import Ddata from './Ddata'
import Slider from "react-slick";

const Dcard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        margin: 200
      };
  return (
    <>
    <Slider {...settings}>
    {Ddata.map((value, index)=> {
            return(
                <div key={index}>
                    <div className="product" >
                        <div className="box">
                            <div className="img">
                                <img src={value.cover} alt="" />
                            </div>
                            <h4>{value.name}</h4>
                            <span>{value.price}</span>
                        </div>
                    </div>
                </div>
            )
        })}
        </Slider>
    </>
  )
}

export default Dcard