'use client'
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

export function DetailRecentlyViewed() {
  const sliderRef = useRef<Slider>(null);
  const handelNext = () => {
    sliderRef?.current?.slickNext();
  }
  const handelPrev = () => {
    sliderRef?.current?.slickPrev();
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto py-5 px-3">
        <p className="my-3 text-xl font-bold">Recently Viewed</p>
       
        <div className="slider-container relative">
        <ArrowLeftIcon onClick={handelPrev} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 -left-5 z-20  cursor-pointer p-2 stroke-black hover:bg-black/75 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white " />
        <ArrowRightIcon onClick={handelNext} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 -right-5 z-20  cursor-pointer p-2 stroke-black hover:text-white hover:bg-black/75 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white " />
          <Slider {...settings}>
            <div className="p-3">
              <Image
                src={`/samples/sale-pics-for-you/1.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-3">
              <Image
                src={`/samples/sale-pics-for-you/2.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-3">
              <Image
                src={`/samples/sale-pics-for-you/3.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-3">
              <Image
                src={`/samples/sale-pics-for-you/4.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}