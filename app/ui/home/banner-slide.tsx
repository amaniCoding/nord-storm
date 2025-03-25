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

      <div className="slider-container w-full mx-auto relative">
        <Slider {...settings} ref={sliderRefx}>
          <div className="w-full">
            <Image
              src={`/samples/back/wall.jpg`}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full object-center"
            />
          </div>

          <div className="w-full">
            <Image
              src={`/samples/back/wall2.jpg`}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full object-center"
            />
          </div>
       
        </Slider>

      </div>

      
    </section>
  )
}