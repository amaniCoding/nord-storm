'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { Rating } from 'react-simple-star-rating'
import Link from "next/link";
import {  dummyText, shuffleArray } from "../libs/placeholder";
export default function SliderSeederLarge(props: { numberOfSlides?: number }) {


  const shuffle = shuffleArray(dummyText);
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
    slidesToShow: props.numberOfSlides || 5,
    slidesToScroll: props.numberOfSlides || 1,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: props.numberOfSlides || 1,
          slidesToScroll: props.numberOfSlides || 1,
          infinite: true,
          dots: false,
          arrows: false,
          centerMode: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: props.numberOfSlides || 1,
          slidesToScroll: props.numberOfSlides || 1,
          initialSlide: 2,
          dots: false,
          arrows: false,
          centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: props.numberOfSlides || 1,
          slidesToScroll: props.numberOfSlides || 1,
          dots: false,
          arrows: false,
          centerMode: true,
        }
      }
    ]
  };
  return (
    <div className="relative slider-container">
      <ArrowLeftIcon onClick={handelPrev} className="md:flex hidden md:w-10 md:h-10 w-8 h-8  items-center justify-center absolute top-1/2 bg-black/55 shadow-md rounded-full left-1 z-20  cursor-pointer p-2 stroke-white font-bold transition duration-300 ease-out dark:bg-slate-800 dark:stroke-white md " />
      <ArrowRightIcon onClick={handelNext} className="md:flex hidden md:w-10 md:h-10 w-8 h-8  items-center justify-center absolute top-1/2 bg-black/55 shadow-md rounded-full right-1 z-20  cursor-pointer p-2 stroke-white font-bold transition duration-300 ease-out dark:bg-slate-800 dark:stroke-white " />

      <div className="large-color">
        <Slider {...settings} ref={sliderRef}>
          {shuffle.map((el, i) => {
            return (
              <div className="p-4 bg-white" key={i}>
                <div className="group relative">
                  <Link href={`/product/name/143`}>
                    <div className="hidden absolute top-0 bottom-0 left-0 right-0 bg-black/15 group-hover:block"></div>

                    <Image
                      src={`/samples/back/${i + 2}.jpg`}
                      alt="something is happening"
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-full"
                    />
                  </Link>
                  <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-3 right-1/2 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black w-3/4 translate-x-1/2 md:group-hover:block">
                    Quick Show
                  </Link>
                </div>
                <div className="mt-1">

                  <div className="my-1">
                    <span className="block">{el.desc.substring(7,50)}</span>
                    <span className="block">&copy;{el.brand}</span>
                    <span className="block font-bold">{el.price.original}</span>
                    <span className="line-through block">{el.price.off}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    {
                      el.colors.map((color, i) => {
                        return <div key={i} className={`brightness-50 w-3 h-3 outline outline-1 outline-offset-2 outline-red-500 rounded-full  ${color}`}></div>
                      })
                    }
                  </div>

                  
                  <div className="flex items-center py-1 space-x-2 ">
                    <div>
                    <Rating initialValue={el.rating} size={20} allowFraction readonly SVGclassName="inline" />

                    </div>
                    <p className="block">({el.ratingCount})</p>
                  </div>


                </div>
              </div>
            )
          })
          }
        </Slider>
      </div>
    </div>
  )
}