'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { Color } from "@/app/types/types";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function YouMayAlsoLikeColorSlider(props: { colors: Color[] }) {

  const sliderRef = useRef<Slider>(null);


  const handelNext = () => {
    sliderRef?.current?.slickNext();
  }

  const handelPrev = () => {
    sliderRef?.current?.slickPrev();
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,

  };
  return (
    <div className="relative you-may-also-like-color-slider mt-1">
       <MdOutlineKeyboardArrowLeft size={30}  onClick={handelPrev} className="absolute -top-1.5 -left-7 z-20 cursor-pointer rounded-full"/>
       <MdOutlineKeyboardArrowRight size={30}  onClick={handelNext} className=" absolute -top-1.5 right-0 z-20 cursor-pointer rounded-full"/>
      <Slider {...settings} ref={sliderRef}>
        {
          props.colors.map((color, i) => {
            return <div key={i} className={`${color.colorcode}`}></div>
          })
        }
      </Slider>
    </div>
  )
}