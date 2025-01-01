'use client'
import { TruckIcon } from "@heroicons/react/16/solid"
import { ArchiveBoxIcon, ArrowLeftIcon, ArrowRightIcon, GiftIcon, NoSymbolIcon } from "@heroicons/react/24/outline"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";
import { KeyIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function ShoppingBag() {
  //react/no-unescaped-entities
  const sliderRef = useRef<Slider>(null);
  const sliderRef2 = useRef<Slider>(null);
  const sliderRef3 = useRef<Slider>(null);


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


  const handelNext3 = () => {
    sliderRef3?.current?.slickNext();
  }
  const handelPrev3 = () => {
    sliderRef3?.current?.slickPrev();
  }



  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  return (
    <section className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-12 gap-3">
          <div className="md:col-span-8 col-span-12">
            <div className="mt-4 p-6 bg-white">
              <div className="flex flex-col space-y-2 ">
                <p className="text-xl font-bold">Guest Shopping Bag (1)</p>
                <div className="flex space-x-2 items-center">
                  <span>Items in your bag are not on hold.</span>
                  <span className="flex items-center space-x-2">
                    <GiftIcon className="w-6 h-6 stroke-black" />
                    <span>Choose gift options when you check out.</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4 bg-white p-6">
              <p>Sign in to check out faster and track your order easily.</p>
            </div>
            <div className="mt-4 p-6 bg-white">
              <div className="flex items-center space-x-3 border-b-2 border-b-gray-300 pb-3">
                <TruckIcon className="w-8 h-8 stroke-black" />
                <div className="flex flex-col space-y-2">
                  <span className="text-xl font-bold">Shipping (1 item) to Ethiopia</span>
                  <span>International shipping</span>
                </div>
              </div>
              <div className="pt-4 flex space-x-4">

                <div className="p-1">
                  <Image
                    src={`/samples/sale-pics-for-you/4.jpg`}
                    alt="something is happening"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="p-1">
                  <div className="flex flex-col space-y-4">
                    <div className="flex-col">
                      <span>Dress the Population</span>
                      <span>Alicia Mixed Media Midi Dress</span>
                    </div>
                    <div className="flex-col">
                      <span>Size: Medium</span>
                      <span>Color: ELECTRIC BLUE</span>
                      <span>Item: 5413220</span>
                    </div>
                    <div>
                      <select className="p-2 w-full focus:border border-gray-800">
                        <option value="">Qty 1</option>
                      </select>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArchiveBoxIcon className="w-7 h-7 stroke-black" />
                      <div className="flex flex-col">
                        <span className="text-sm md:text-nowrap font-bold">Free returns anytime</span>
                        <span className="text-sm md:text-nowrap">Sold by Nordstrom</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span>Remove</span>
                      <span>Save for later</span>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="flex items-center space-x-2">
                    <NoSymbolIcon className="w-8 h-8 stroke-black" />
                    <span className="md:text-nowrap">Not available for pickup</span>
                  </div>
                  <div className="flex space-x-2">
                    <CheckCircleIcon className="w-10 h-10 stroke-black" />
                    <div className="flex flex-col space-y-1">
                      <span>Shipping</span>
                      <span>
                        International orders usually arrive within 5–13 business days. We'll give you shipping dates in checkout.</span>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <p>$198.00</p>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-white p-6">
              <p className="py-3 text-xl font-bold border-b-2 border-b-gray-500">
                Saved for later (0 items)
              </p>
              <p className="py-3">Have an account? Sign in to view any items you’ve saved.</p>
              <button className="py-2 px-3 inline-block border-2 border-gray-600 w-80 cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out ">Sign In</button>
            </div>
            <div className="mt-4 p-6 bg-white">
              <p className="text-xl font-bold">
                More from Dress the Population
              </p>
              <div className="slider-container relative">
              <ArrowLeftIcon onClick={handelPrev} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 -left-5 z-20  cursor-pointer p-2 stroke-black hover:bg-black/75 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white " />
              <ArrowRightIcon onClick={handelNext} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 -right-5 z-20  cursor-pointer p-2 stroke-black hover:text-white hover:bg-black/75 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white " />
                <Slider {...settings2} ref={sliderRef}>
                  <div className="p-3">
                    <Image
                      src={`/samples/sale-pics-for-you/1.jpg`}
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
                      src={`/samples/sale-pics-for-you/2.jpg`}
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
                      src={`/samples/sale-pics-for-you/3.jpg`}
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
                      src={`/samples/sale-pics-for-you/4.jpg`}
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
                      src={`/samples/sale-pics-for-you/5.jpg`}
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
                      src={`/samples/sale-pics-for-you/6.jpg`}
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
                      src={`/samples/sale-pics-for-you/7.jpg`}
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
                      src={`/samples/sale-pics-for-you/8.jpg`}
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
                      src={`/samples/sale-pics-for-you/9.jpg`}
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
                      src={`/samples/sale-pics-for-you/10.jpg`}
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
                      src={`/samples/sale-pics-for-you/11.jpg`}
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
                      src={`/samples/sale-pics-for-you/12.jpg`}
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
                      src={`/samples/sale-pics-for-you/13.jpg`}
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
                      src={`/samples/sale-pics-for-you/14.jpg`}
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
                      src={`/samples/sale-pics-for-you/15.jpg`}
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
                      src={`/samples/sale-pics-for-you/16.jpg`}
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
                      src={`/samples/sale-pics-for-you/17.jpg`}
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
                      src={`/samples/sale-pics-for-you/18.jpg`}
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
                      src={`/samples/sale-pics-for-you/19.jpg`}
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
                      src={`/samples/sale-pics-for-you/20.jpg`}
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
                      src={`/samples/sale-pics-for-you/21.jpg`}
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
                      src={`/samples/sale-pics-for-you/22.jpg`}
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
                      src={`/samples/sale-pics-for-you/23.jpg`}
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
                      src={`/samples/sale-pics-for-you/24.jpg`}
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
            <div className="mt-4 p-6 bg-white mb-5">
              <p className="text-xl font-bold">
                Trending Near You
              </p>
              <div className="slider-container relative">
              <ArrowLeftIcon onClick={handelPrev2} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 -left-5 z-20  cursor-pointer p-2 stroke-black hover:bg-black/75 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white " />
              <ArrowRightIcon onClick={handelNext2} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 -right-5 z-20  cursor-pointer p-2 stroke-black hover:text-white hover:bg-black/75 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white " />
                <Slider {...settings2} ref={sliderRef2}>
                  <div className="p-3">
                    <Image
                      src={`/samples/sale-pics-for-you/1.jpg`}
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
                      src={`/samples/sale-pics-for-you/2.jpg`}
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
                      src={`/samples/sale-pics-for-you/3.jpg`}
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
                      src={`/samples/sale-pics-for-you/4.jpg`}
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
                      src={`/samples/sale-pics-for-you/5.jpg`}
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
                      src={`/samples/sale-pics-for-you/6.jpg`}
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
                      src={`/samples/sale-pics-for-you/7.jpg`}
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
                      src={`/samples/sale-pics-for-you/8.jpg`}
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
                      src={`/samples/sale-pics-for-you/9.jpg`}
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
                      src={`/samples/sale-pics-for-you/10.jpg`}
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
                      src={`/samples/sale-pics-for-you/11.jpg`}
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
                      src={`/samples/sale-pics-for-you/12.jpg`}
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
                      src={`/samples/sale-pics-for-you/13.jpg`}
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
                      src={`/samples/sale-pics-for-you/14.jpg`}
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
                      src={`/samples/sale-pics-for-you/15.jpg`}
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
                      src={`/samples/sale-pics-for-you/16.jpg`}
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
                      src={`/samples/sale-pics-for-you/17.jpg`}
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
                      src={`/samples/sale-pics-for-you/18.jpg`}
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
                      src={`/samples/sale-pics-for-you/19.jpg`}
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
                      src={`/samples/sale-pics-for-you/20.jpg`}
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
                      src={`/samples/sale-pics-for-you/21.jpg`}
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
                      src={`/samples/sale-pics-for-you/22.jpg`}
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
                      src={`/samples/sale-pics-for-you/23.jpg`}
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
                      src={`/samples/sale-pics-for-you/24.jpg`}
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
          </div>
          <div className="md:col-span-4 col-span-12">
            <div className="bg-white p-6 mt-4">
              <p className="text-xl font-bold">Order summary</p>
              <div className="flex items-center space-x-3 bg-blue-200 p-2 rounded-md">
                <KeyIcon className="w-20 h-20 stroke-black" />
                <div>
                  <p className="font-bold text-sm mb-2">You'll check out through ESW</p>
                  <span className="text-sm">Selecting <span className="font-bold">Check Out</span> will take you to ESW checkout, where our international shipping partner will process your payment and fulfill your order.</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 mb-3">
                <span>Subtotal</span>
                <span>
                  $198.00</span>
              </div>
              <button className="p-3 text-center block w-full bg-black text-white mb-3">Check Out</button>
              <p className="text-center">Shipping to Ethiopia Change</p>
            </div>
            <div className="bg-white mt-4 p-6">
              <p className="text-xl font-bold mb-3">
                People Also Viewed
              </p>

              <div className="slider-container relative">
                <ArrowLeftIcon onClick={handelPrev3} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 -left-5 z-20  cursor-pointer p-2 stroke-black hover:bg-black/75 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white " />
                <ArrowRightIcon onClick={handelNext3} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 -right-5 z-20  cursor-pointer p-2 stroke-black hover:text-white hover:bg-black/75 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white " />
                <Slider {...settings3} ref={sliderRef3}>
                <div className="flex flex-col space-y-2 p-6">
                    <Image
                      src={`/samples/sale-pics-for-you/6.jpg`}
                      alt="something is happening"
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-full h-auto object-contain"
                    />
                    <p className="text-sm">Dress the Population</p>
                    <p className="text-sm">
                      $112.84 – $182.00Current Price $112.84 to $182.00
                      (Up to 38% off select items)</p>
                    <p className="text-sm">
                      $182.00Previous Price $182.00
                      Size Medium available</p>
                  </div>
                  <div className="flex flex-col space-y-2 p-6">
                    <Image
                      src={`/samples/sale-pics-for-you/6.jpg`}
                      alt="something is happening"
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-full h-auto object-contain"
                    />
                    <p className="text-sm">Dress the Population</p>
                    <p className="text-sm">
                      $112.84 – $182.00Current Price $112.84 to $182.00
                      (Up to 38% off select items)</p>
                    <p className="text-sm">
                      $182.00Previous Price $182.00
                      Size Medium available</p>
                  </div>
                  
                </Slider>
              </div>

            </div>
            <div className="bg-white mt-5 p-5">
              <p>Nordy Club members earn 3X the points on beauty! See restrictions.</p>
            </div>
            <div className="mt-4 p-6">
              <p className="mb-2">Have a question? Call 1.888.282.6060 or chat with us</p>
              <p>Accepted payment methods</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}