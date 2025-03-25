'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { Color } from "../types/types";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { colorsSeeder3 } from "../libs/placeholder";
export default function ColorSlider(props: { colors: Color[] }) {

  const sliderRef = useRef<Slider>(null);


  const handelNext = () => {
    sliderRef?.current?.slickNext();
  }

  const handelPrev = () => {
    sliderRef?.current?.slickPrev();
  }

  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 2,
  //   arrows: false,


  // };


  return (
    <div className="relative color-slider">
      {/* <MdOutlineKeyboardArrowLeft size={25} onClick={handelPrev} className="absolute p-1 hover:bg-gray-100 top-1/2 -translate-y-1/2 -left-4 z-20 cursor-pointer " />
      <MdOutlineKeyboardArrowRight size={25} onClick={handelNext} className=" absolute p-1 hover:bg-gray-100 top-1/2  -translate-y-1/2 -right-4 z-20 cursor-pointer" /> */}

      <div className="flex items-center space-x-4">
        {
          colorsSeeder3.map((color, i) => {
            return <div key={i} className={`brightness-50 w-3 h-3 outline outline-1 outline-offset-2 outline-red-500 rounded-full  ${color.colorcode}`}></div>
          })
        }
      </div>
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



  const settings3 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,


  };
  return (
    <div className="relative">
      <MdOutlineKeyboardArrowLeft size={20} onClick={handelPrev} className="absolute p-0.5 hover:bg-gray-100 top-1/2 -translate-y-1/2 -left-2 z-20 cursor-pointer " />
      <MdOutlineKeyboardArrowRight size={20} onClick={handelNext} className=" absolute p-0.5 hover:bg-gray-100 top-1/2  -translate-y-1/2 -right-2 z-20 cursor-pointer" />
      <div className="color-slider-pics">
        <Slider {...settings3} ref={sliderRef}>
          {
            props.colors.map((color, i) => {
              return <div key={i} className={`brightness-50  ${color.colorcode}`}></div>
            })
          }
        </Slider>
      </div>

    </div>
  )
}