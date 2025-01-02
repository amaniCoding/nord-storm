'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import StarRatings from "react-star-ratings";
import Link from "next/link";
export default function SliderSeederLarge(props: {photoName: string}) {

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
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      }
    ]
  };
  return (
    <div className="relative slider-container">
      <ArrowLeftIcon onClick={handelPrev} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 bg-white shadow-md rounded-full left-1 z-20  cursor-pointer p-2 stroke-black font-bold transition duration-300 ease-out 
           dark:bg-slate-800 dark:stroke-white " />
      <ArrowRightIcon onClick={handelNext} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 bg-white shadow-md rounded-full right-1 z-20  cursor-pointer p-2 stroke-black font-bold transition duration-300 ease-out 
           dark:bg-slate-800 dark:stroke-white " />

      <Slider {...settings} ref={sliderRef}>
        {Array.from(Array(10).keys()).map((_, i) => {
          return (
            <div className="p-3 relative" key={i}>
              <div className="group">
                <Link href={`product/name/143`}>
                  <Image
                    src={`/samples/${props.photoName}/${i+1}.jpg`}
                    alt="something is happening"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-full h-full object-contain"
                  />
                </Link>
                <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-44  left-5 right-5 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black w-40 md:group-hover:block">
                  Quick Show
                </Link>
              </div>
              <div className="mt-2 flex flex-col">
                <span className="text-sm">color slider</span>
                <span className="text-sm">New Markdown</span>
                <span className="text-sm">UGG®</span>
                <span className="text-sm">$112.00</span>
                <span className="line-through">$160.00</span>

                <div className="flex space-x-2">
                  <StarRatings
                    rating={5}
                    starDimension="18px"
                    starRatedColor="#FF9529"
                    starSpacing="0"
                    numberOfStars={5}
                    name='rating'
                  />
                  <span>(325)</span>
                </div>
              </div>
            </div>
          )
        })
      }
      </Slider>
    </div>
  )
}