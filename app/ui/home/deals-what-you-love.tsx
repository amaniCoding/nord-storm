'use client'
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function DealsForYou() {
  
  const sliderRef = useRef<Slider>(null);

  const handelNext = () => {
    sliderRef?.current?.slickNext();
  }

  const handelPrev = () => {
    sliderRef?.current?.slickPrev();
  }

  const settings2 = {
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
    <section className="py-5">
      <div className="max-w-screen-xl mx-auto">
        <p className="my-3 text-xl font-bold">Great Deals on What You Love</p>
        <p className="mb-2">
          Items similar to what you've browsed are on sale
        </p>
        <div className="slider-container relative">
          <ArrowLeftIcon onClick={handelPrev} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 -left-5 z-20  cursor-pointer p-2 stroke-black hover:bg-black/75 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white " />
          <ArrowRightIcon onClick={handelNext} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 -right-5 z-20  cursor-pointer p-2 stroke-black hover:text-white hover:bg-black/75 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white " />
          <Slider {...settings2} ref={sliderRef}>

            <div className="p-8">
              <Image
                src={"/samples/great-deals/1.jpg"}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="flex flex-col space-y-1">
                <p>Color Slider</p>
                <p>Limited-Time Sale</p>
                <p>Dress the Population</p>
                <p>$118.80 – $198.00Current Price $118.80 to $198.00
                  (Up to 40% off select items)</p>
                <p>$198.00</p>
                <div className="flex items-center space-x-2">
                  <span>star rating</span>
                  <span>212</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <Image
                src={"/samples/great-deals/2.jpg"}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="flex flex-col space-y-1">
                <p>Color Slider</p>
                <p>Limited-Time Sale</p>
                <p>Dress the Population</p>
                <p>$118.80 – $198.00Current Price $118.80 to $198.00
                  (Up to 40% off select items)</p>
                <p>$198.00</p>
                <div className="flex items-center space-x-2">
                  <span>star rating</span>
                  <span>212</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <Image
                src={"/samples/great-deals/3.jpg"}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="flex flex-col space-y-1">
                <p>Color Slider</p>
                <p>Limited-Time Sale</p>
                <p>Dress the Population</p>
                <p>$118.80 – $198.00Current Price $118.80 to $198.00
                  (Up to 40% off select items)</p>
                <p>$198.00</p>
                <div className="flex items-center space-x-2">
                  <span>star rating</span>
                  <span>212</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <Image
                src={"/samples/great-deals/4.jpg"}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="flex flex-col space-y-1">
                <p>Color Slider</p>
                <p>Limited-Time Sale</p>
                <p>Dress the Population</p>
                <p>$118.80 – $198.00Current Price $118.80 to $198.00
                  (Up to 40% off select items)</p>
                <p>$198.00</p>
                <div className="flex items-center space-x-2">
                  <span>star rating</span>
                  <span>212</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <Image
                src={"/samples/great-deals/5.jpg"}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="flex flex-col space-y-1">
                <p>Color Slider</p>
                <p>Limited-Time Sale</p>
                <p>Dress the Population</p>
                <p>$118.80 – $198.00Current Price $118.80 to $198.00
                  (Up to 40% off select items)</p>
                <p>$198.00</p>
                <div className="flex items-center space-x-2">
                  <span>star rating</span>
                  <span>212</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <Image
                src={"/samples/great-deals/6.jpg"}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="flex flex-col space-y-1">
                <p>Color Slider</p>
                <p>Limited-Time Sale</p>
                <p>Dress the Population</p>
                <p>$118.80 – $198.00Current Price $118.80 to $198.00
                  (Up to 40% off select items)</p>
                <p>$198.00</p>
                <div className="flex items-center space-x-2">
                  <span>star rating</span>
                  <span>212</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <Image
                src={"/samples/great-deals/7.jpg"}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="flex flex-col space-y-1">
                <p>Color Slider</p>
                <p>Limited-Time Sale</p>
                <p>Dress the Population</p>
                <p>$118.80 – $198.00Current Price $118.80 to $198.00
                  (Up to 40% off select items)</p>
                <p>$198.00</p>
                <div className="flex items-center space-x-2">
                  <span>star rating</span>
                  <span>212</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <Image
                src={"/samples/great-deals/8.jpg"}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="flex flex-col space-y-1">
                <p>Color Slider</p>
                <p>Limited-Time Sale</p>
                <p>Dress the Population</p>
                <p>$118.80 – $198.00Current Price $118.80 to $198.00
                  (Up to 40% off select items)</p>
                <p>$198.00</p>
                <div className="flex items-center space-x-2">
                  <span>star rating</span>
                  <span>212</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <Image
                src={"/samples/great-deals/9.jpg"}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="flex flex-col space-y-1">
                <p>Color Slider</p>
                <p>Limited-Time Sale</p>
                <p>Dress the Population</p>
                <p>$118.80 – $198.00Current Price $118.80 to $198.00
                  (Up to 40% off select items)</p>
                <p>$198.00</p>
                <div className="flex items-center space-x-2">
                  <span>star rating</span>
                  <span>212</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <Image
                src={"/samples/great-deals/10.jpg"}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <div className="flex flex-col space-y-1">
                <p>Color Slider</p>
                <p>Limited-Time Sale</p>
                <p>Dress the Population</p>
                <p>$118.80 – $198.00Current Price $118.80 to $198.00
                  (Up to 40% off select items)</p>
                <p>$198.00</p>
                <div className="flex items-center space-x-2">
                  <span>star rating</span>
                  <span>212</span>
                </div>
              </div>
            </div>
            
          </Slider>
        </div>
      </div>
    </section>
  )
}