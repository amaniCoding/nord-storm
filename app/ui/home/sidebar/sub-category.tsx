'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function SubCategory() {
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

  };
  return (
    <>
      <div className="py-3 md:hidden block">
        <Slider {...settings2}>
          <span className="font-sans">All Skirts</span>
          <span className="font-sans">Denim</span>
          <span className="font-sans">Leather</span>
          <span className="font-sans">Maxi</span>
          <span className="font-sans">Midi</span>
          <span className="font-sans">Mini</span>
          <span className="font-sans">Slip</span>
          <span className="font-sans">Juniors</span>
        </Slider>
      </div>

      <div className="md:flex hidden items-center space-x-14">
        <span className="font-sans">All Skirts</span>
        <span className="font-sans">Denim</span>
        <span className="font-sans">Leather</span>
        <span className="font-sans">Maxi</span>
        <span className="font-sans">Midi</span>
        <span className="font-sans">Mini</span>
        <span className="font-sans">Slip</span>
        <span className="font-sans">Juniors</span>
      </div>
    </>

  )
} 