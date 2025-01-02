'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
export default function SliderSeederMobile({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const sliderRef = useRef<Slider>(null);

  const handelNext = () => {
    sliderRef?.current?.slickNext();
  }

  const handelPrev = () => {
    sliderRef?.current?.slickPrev();
  }
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
  return (
    <div className="relative slider-container md:hidden block">
      <ArrowLeftIcon onClick={handelPrev} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute -top-1 bg-white shadow-md rounded-full left-1 z-20  cursor-pointer p-2 stroke-black font-bold transition duration-300 ease-out 
           dark:bg-slate-800 dark:stroke-white " />
      <ArrowRightIcon onClick={handelNext} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute -top-1 bg-white shadow-md rounded-full right-1 z-20  cursor-pointer p-2 stroke-black font-bold transition duration-300 ease-out 
           dark:bg-slate-800 dark:stroke-white " />

      <Slider {...settings} ref={sliderRef}>
        {children}
      </Slider>
    </div>
  )
}