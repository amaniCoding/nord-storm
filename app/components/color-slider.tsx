'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { Color } from "../types/types";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function ColorSlider(props: { colors: Color[] }) {

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
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,

  };
  return (
    <div className="relative color-slider">
      <MdOutlineKeyboardArrowLeft size={25}  onClick={handelPrev} className="absolute p-1 hover:bg-gray-100 top-1/2 -translate-y-1/2 -left-4 z-20 cursor-pointer "/>
      <MdOutlineKeyboardArrowRight size={25}  onClick={handelNext} className=" absolute p-1 hover:bg-gray-100 top-1/2  -translate-y-1/2 -right-4 z-20 cursor-pointer"/>

      <Slider {...settings} ref={sliderRef}>
        {
          props.colors.map((color, i) => {
            return <div key={i} className={`brightness-75 ${color.colorcode}`}></div>
          })
        }
      </Slider>
    </div>
  )
}


export function ColorSliderPics(props: { colors: Color[] }) {

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
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,

  };
  return (
    <div className="relative color-slider">
      <MdOutlineKeyboardArrowLeft size={20}  onClick={handelPrev} className="absolute p-0.5 hover:bg-gray-100 top-1/2 -translate-y-1/2 -left-2 z-20 cursor-pointer "/>
      <MdOutlineKeyboardArrowRight size={20}  onClick={handelNext} className=" absolute p-0.5 hover:bg-gray-100 top-1/2  -translate-y-1/2 -right-2 z-20 cursor-pointer"/>

      <Slider {...settings} ref={sliderRef}>
        {
          props.colors.map((color, i) => {
            return <div key={i} className={`brightness-75 ${color.colorcode}`}></div>
          })
        }
      </Slider>
    </div>
  )
}