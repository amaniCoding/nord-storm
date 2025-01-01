'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function BannerSlide() {
  const sliderRefx = useRef<Slider>(null);
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  useEffect(() => {
    sliderRefx?.current?.slickPlay();
  }, [])
  return (
    <section className="h-screen overflow-hidden">

      <div className="slider-container max-w-screen-xl mx-auto relative">
        <Slider {...settings} ref={sliderRefx}>
          <div className="w-full h-screen">
            <Image
              src={`/samples/wall.jpg`}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-screen bg-red-500">
            <div className="max-w-screen-lg mx-auto p-6 translate-y-[20vh]">
              <div className="flex md:space-x-10 space-x-2 justify-around">
                <div className="w-1/2 flex flex-col space-y-3">
                  <p className="md:text-6xl text-2xl p-2 text-white w-full md:mb-3">DESIGNER</p>
                  <p className="md:text-6xl text-2xl p-2 md:ml-28 ml-2 text-white w-full"> CLEARANCE</p>
                </div>
                <div className="w-1/2 flex flex-col space-y-3">
                  <div className="flex flex-col space-y-2">
                    <p className="text-white">Extra 100% off</p>
                    <p className="text-white"> Save on selected styles through January 6. Restrictions apply.*</p>
                    <div className="md:flex flex-col space-y-2 space-x-4">
                      <span className="md:text-3xl text-xl text-white">Shop designer sale</span>
                      <div className="flex space-x-3">
                      <a href="#" className="text-white">All</a>
                      <a href="#" className="text-white">Women</a>
                      <a href="#" className="text-white">Men</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-screen bg-red-500">
            <div className="max-w-screen-lg mx-auto p-6 translate-y-[20vh]">
              <div className="flex md:space-x-10 space-x-2 justify-around">
                <div className="w-1/2 flex flex-col space-y-3">
                  <p className="md:text-6xl text-2xl p-2 text-white w-full md:mb-3">DESIGNER</p>
                  <p className="md:text-6xl text-2xl p-2 md:ml-28 ml-2 text-white w-full"> CLEARANCE</p>
                </div>
                <div className="w-1/2 flex flex-col space-y-3">
                  <div className="flex flex-col space-y-2">
                    <p className="text-white">Extra 100% off</p>
                    <p className="text-white"> Save on selected styles through January 6. Restrictions apply.*</p>
                    <div className="md:flex flex-col space-y-2 space-x-4">
                      <span className="md:text-3xl text-xl text-white">Shop designer sale</span>
                      <div className="flex space-x-3">
                      <a href="#" className="text-white">All</a>
                      <a href="#" className="text-white">Women</a>
                      <a href="#" className="text-white">Men</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>

      </div>
    </section>
  )
}