'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { Color } from "../types/types";
import { PiGreaterThan, PiLessThan} from "react-icons/pi";
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
      <PiLessThan onClick={handelPrev} className="absolute top-0.5 -left-2 z-20 cursor-pointer w-4 h-4 md:mr-[18px]"/>
      <PiGreaterThan onClick={handelNext} className=" absolute top-0.5 right-1 z-20 cursor-pointer w-4 h-4 md:mr-[70px]"/>

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