'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import StarRatings from "react-star-ratings";
import Link from "next/link";
import ColorSlider from "./color-slider";
import { colorsSeeder } from "../libs/placeholder";
export default function SliderSeederLarge(props: { photoName: string, numberOfSlides?: number }) {

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
    slidesToScroll: props.numberOfSlides || 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: props.numberOfSlides || 3,
          slidesToScroll: props.numberOfSlides || 3,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: props.numberOfSlides || 2,
          slidesToScroll: props.numberOfSlides || 2,
          initialSlide: 2,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: props.numberOfSlides || 2,
          slidesToScroll: props.numberOfSlides || 2,
          dots: false,
          arrows: false,
        }
      }
    ]
  };
  return (
    <div className="relative slider-container">
      <ArrowLeftIcon onClick={handelPrev} className="md:flex hidden md:w-10 md:h-10 w-8 h-8  items-center justify-center absolute top-1/2 bg-white shadow-md rounded-full left-1 z-20  cursor-pointer p-2 stroke-black font-bold transition duration-300 ease-out dark:bg-slate-800 dark:stroke-white md " />
      <ArrowRightIcon onClick={handelNext} className="md:flex hidden md:w-10 md:h-10 w-8 h-8  items-center justify-center absolute top-1/2 bg-white shadow-md rounded-full right-1 z-20  cursor-pointer p-2 stroke-black font-bold transition duration-300 ease-out dark:bg-slate-800 dark:stroke-white " />

      <div className="large-color">
        <Slider {...settings} ref={sliderRef}>
          {Array.from(Array(10).keys()).map((_, i) => {
            return (
              <div className="py-1 px-3 bg-white" key={i}>
                <div className="group relative">
                  <Link href={`/product/name/143`}>
                    <div className="hidden absolute top-0 bottom-0 left-0 right-0 bg-black/15 group-hover:block"></div>

                    <Image
                      src={`/samples/${props.photoName}/${i + 1}.jpg`}
                      alt="something is happening"
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-full h-full object-contain"
                    />
                  </Link>
                  <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-3 right-1/2 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black w-1/2 translate-x-1/2 md:group-hover:block">
                    Quick Show
                  </Link>
                </div>
                <div className="mt-1">

                  <div className="my-1">
                    <span className="block">New Markdown</span>
                    <span className="block">UGG®</span>
                    <span className="block font-bold">$112.00</span>
                    <span className="line-through block">$160.00</span>
                  </div>
                  <ColorSlider colors={colorsSeeder} />
                  <div className="flex items-center space-x-2">
                    <div>
                      <StarRatings
                        rating={5}
                        starDimension="18px"
                        starRatedColor="#FF9529"
                        starSpacing="0"
                        numberOfStars={5}
                        name='rating'
                      />
                    </div>

                    <p className="block">(325)</p>
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