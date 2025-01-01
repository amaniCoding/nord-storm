'use client'
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

export default function Gifts() {
  const sliderRef = useRef<Slider>(null);
  const sliderRef2 = useRef<Slider>(null);

  const handelNext = () => {
    sliderRef?.current?.slickNext();
  }

  const handelPrev = () => {
    sliderRef?.current?.slickPrev();
  }
  const handelNext2 = () => {
    sliderRef2?.current?.slickNext();
  }

  const handelPrev2 = () => {
    sliderRef2?.current?.slickPrev();
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <section className="">
      <div className="max-w-screen-xl mx-auto py-5 px-3">
        <div className="md:flex hidden md:space-x-10 space-x-10 border-b-2 border-b-gray-300 pb-3 mb-4">
          <span>Gift For Her</span>
          <span>Gift For Him</span>
          <span>Gift For Kids</span>
          <span>Gift For Anyone</span>
          <span>UGG Gifts</span>
          <span>Our Favourite Gifts</span>
        </div>
        <div className="md:hidden block relative">
          <ArrowLeftIcon onClick={handelPrev2} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 -left-5 z-20  cursor-pointer p-2 stroke-black hover:bg-black/75 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white " />
          <ArrowRightIcon onClick={handelNext2} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 -right-5 z-20  cursor-pointer p-2 stroke-black hover:text-white hover:bg-black/75 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white " />
          <Slider {...settings} ref={sliderRef2}>
            <span className="font-bold text-lg cursor-pointer">Gift For Her</span>
            <span className="font-bold text-lg cursor-pointer">Gift For Him</span>
            <span className="font-bold text-lg cursor-pointer">Gift For Kids</span>
            <span className="font-bold text-lg cursor-pointer">Gift For Anyone</span>
            <span className="font-bold text-lg cursor-pointer">UGG Gifts</span>
            <span className="font-bold text-lg cursor-pointer">Our Favourite Gifts</span>
          </Slider>
        </div>
        <div className="slider-container relative">
          <ArrowLeftIcon onClick={handelPrev} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 -left-5 z-20  cursor-pointer p-2 stroke-black hover:bg-black/75 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white " />
          <ArrowRightIcon onClick={handelNext} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 -right-5 z-20  cursor-pointer p-2 stroke-black hover:text-white hover:bg-black/75 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white " />
          <Slider {...settings2} ref={sliderRef}>
            <div className="p-3">
              <Image
                src={`/samples/last-min-gifts/1.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="mt-2 flex flex-col">
                <p className="text-sm">Amanuel</p>
                <p className="text-sm">555 $</p>
                <div className="flex space-x-3">
                  <span>star rating</span><span>(56)</span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <Image
                src={`/samples/last-min-gifts/2.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="mt-2 flex flex-col">
                <p className="text-sm">Amanuel</p>
                <p className="text-sm">555 $</p>
                <div className="flex space-x-3">
                  <span>star rating</span><span>(56)</span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <Image
                src={`/samples/last-min-gifts/3.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="mt-2 flex flex-col">
                <p className="text-sm">Amanuel</p>
                <p className="text-sm">555 $</p>
                <div className="flex space-x-3">
                  <span>star rating</span><span>(56)</span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <Image
                src={`/samples/last-min-gifts/4.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="mt-2 flex flex-col">
                <p className="text-sm">Amanuel</p>
                <p className="text-sm">555 $</p>
                <div className="flex space-x-3">
                  <span>star rating</span><span>(56)</span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <Image
                src={`/samples/last-min-gifts/5.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="mt-2 flex flex-col">
                <p className="text-sm">Amanuel</p>
                <p className="text-sm">555 $</p>
                <div className="flex space-x-3">
                  <span>star rating</span><span>(56)</span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <Image
                src={`/samples/last-min-gifts/6.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="mt-2 flex flex-col">
                <p className="text-sm">Amanuel</p>
                <p className="text-sm">555 $</p>
                <div className="flex space-x-3">
                  <span>star rating</span><span>(56)</span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <Image
                src={`/samples/last-min-gifts/7.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="mt-2 flex flex-col">
                <p className="text-sm">Amanuel</p>
                <p className="text-sm">555 $</p>
                <div className="flex space-x-3">
                  <span>star rating</span><span>(56)</span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <Image
                src={`/samples/last-min-gifts/8.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="mt-2 flex flex-col">
                <p className="text-sm">Amanuel</p>
                <p className="text-sm">555 $</p>
                <div className="flex space-x-3">
                  <span>star rating</span><span>(56)</span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <Image
                src={`/samples/last-min-gifts/9.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="mt-2 flex flex-col">
                <p className="text-sm">Amanuel</p>
                <p className="text-sm">555 $</p>
                <div className="flex space-x-3">
                  <span>star rating</span><span>(56)</span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <Image
                src={`/samples/last-min-gifts/10.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="mt-2 flex flex-col">
                <p className="text-sm">Amanuel</p>
                <p className="text-sm">555 $</p>
                <div className="flex space-x-3">
                  <span>star rating</span><span>(56)</span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <Image
                src={`/samples/last-min-gifts/11.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="mt-2 flex flex-col">
                <p className="text-sm">Amanuel</p>
                <p className="text-sm">555 $</p>
                <div className="flex space-x-3">
                  <span>star rating</span><span>(56)</span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <Image
                src={`/samples/last-min-gifts/12.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="mt-2 flex flex-col">
                <p className="text-sm">Amanuel</p>
                <p className="text-sm">555 $</p>
                <div className="flex space-x-3">
                  <span>star rating</span><span>(56)</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}