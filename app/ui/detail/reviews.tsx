'use client'
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { ArrowLeftIcon, ArrowRightIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

import { DetailRecentlyViewed } from "./recently-viewed";
export default function Reviews() {
  //react/no-unescaped-entities
  const sliderRef = useRef<Slider>(null);
  const sliderRef2 = useRef<Slider>(null);

  const handelNext2 = () => {
    sliderRef2?.current?.slickNext();
  }

  const handelPrev2 = () => {
    sliderRef2?.current?.slickPrev();
  }
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
    slidesToShow: 6,
    slidesToScroll: 3,
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
  return (
    <section className="py-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center md:space-x-44 md:pl-20 md:py-3 pl-3 py-4">
          <div className="flex flex-col space-y-3">
            <p>Reviews</p>
            <p>Review Icons</p>
            <p>3.3 out of 5</p>
            <p>Fit: Runs slightly small</p>
          </div>
          <button className="w-60 p-2 border-2 border-black inline-block hover:scale-105 transition duration-200 ease-in-out hover:bg-gray-300 rounded-lg">Write Review</button>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2">
          <div className="p-2">
            <p className="font-bold text-xl mb-2">Most helpful positive review</p>
            <div className="border border-gray-300 p-4 flex flex-col space-y-3">
              <div className="flex space-x-2">
                <span>Rating</span>
                <span>Jan 24, 2023</span>
              </div>
              <p className="font-bold">Absolutely Gorgeous</p>
              <p>This dress was a show stopper! I’m 5’10, 179lbs with an athletic build and I bought a XL. The corset bodice makes the “girls” sit high! The dress is short but I had no problem sitting daintily! I have long arms and the flared sleeves were the perfect length! A complete showstopper! I received so many compliments, I bought another one in white!...</p>
              <span>Show More</span>
              <span>Anonymous</span>
              <div className="flex items-center space-x-3">
                <CheckCircleIcon className="w-6 h-6 stroke-white" />
                <span>Verified purchase</span>
              </div>
              <span>69
                found this helpful</span>
            </div>
          </div>
          <div className="p-2">
            <p className="font-bold text-xl mb-2">Most helpful positive review</p>
            <div className="border border-gray-300 p-4 flex flex-col space-y-3">
              <div className="flex space-x-2">
                <span>Rating</span>
                <span>Jan 24, 2023</span>
              </div>
              <p className="font-bold">Absolutely Gorgeous</p>
              <p>This dress was a show stopper! I’m 5’10, 179lbs with an athletic build and I bought a XL. The corset bodice makes the “girls” sit high! The dress is short but I had no problem sitting daintily! I have long arms and the flared sleeves were the perfect length! A complete showstopper! I received so many compliments, I bought another one in white!...</p>
              <span>Show More</span>
              <span>Anonymous</span>
              <div className="flex items-center space-x-3">
                <CheckCircleIcon className="w-6 h-6 stroke-white" />
                <span>Verified purchase</span>
              </div>
              <span>69
                found this helpful</span>
            </div>
          </div>
        </div>
        <p className="my-2">Customer photos</p>
        <Slider {...settings2}>
          <div className="p-3">
            <Image
              src={"/samples/sale-pics-for-you/1.jpg"}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="p-3">
            <Image
              src={"/samples/sale-pics-for-you/2.jpg"}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="p-3">
            <Image
              src={"/samples/sale-pics-for-you/3.jpg"}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="p-3">
            <Image
              src={"/samples/sale-pics-for-you/4.jpg"}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="p-3">
            <Image
              src={"/samples/sale-pics-for-you/5.jpg"}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="p-3">
            <Image
              src={"/samples/sale-pics-for-you/6.jpg"}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="p-3">
            <Image
              src={"/samples/sale-pics-for-you/7.jpg"}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="p-3">
            <Image
              src={"/samples/sale-pics-for-you/8.jpg"}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
          </div>
        </Slider>
      </div>
      <div className="md:max-w-screen-lg max-w-full mx-auto p-5">
        <div className="mt-3 w-full flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <input type="checkbox" className="w-6 h-6" />
            <span className="text-nowrap">5 stars</span>
            <div className="relative w-full h-4 rounded-md bg-slate-300">
              <div className="absolute top-0 bottom-0 left-0 bg-black w-[35%]"></div>
            </div>
            <span className="text-nowrap">35%</span>

          </div>
          <div className="flex items-center space-x-3">
            <input type="checkbox" className="w-6 h-6" />
            <span className="text-nowrap">4 stars</span>
            <div className="relative w-full h-4 rounded-md bg-slate-300">
              <div className="absolute top-0 bottom-0 left-0 bg-black w-[16%]"></div>
            </div>
            <span className="text-nowrap">16%</span>

          </div>
          <div className="flex items-center space-x-3">
            <input type="checkbox" className="w-6 h-6" />
            <span className="text-nowrap">3 stars</span>
            <div className="relative w-full h-4 rounded-md bg-slate-300">
              <div className="absolute top-0 bottom-0 left-0 bg-black w-[11%]"></div>
            </div>
            <span className="text-nowrap">11%</span>

          </div>
          <div className="flex items-center space-x-3">
            <input type="checkbox" className="w-6 h-6" />
            <span className="text-nowrap">2 stars</span>
            <div className="relative w-full h-4 rounded-md bg-slate-300">
              <div className="absolute top-0 bottom-0 left-0 bg-black w-[14%]"></div>
            </div>
            <span className="text-nowrap">14%</span>

          </div>
          <div className="flex items-center space-x-3">
            <input type="checkbox" className="w-6 h-6" />
            <span className="text-nowrap">1 stars</span>
            <div className="relative w-full h-4 rounded-md bg-slate-300">
              <div className="absolute top-0 bottom-0 left-0 bg-black w-[23%]"></div>
            </div>
            <span className="text-nowrap">23%</span>

          </div>
        </div>
        <div className="mt-3">
          <p className="my-2">Pros</p>
          <div className="grid md:grid-cols-5 grid-cols-3 gap-3">
            <button className="rounded-md inline-block p-2 w-full border-2 border-black hover:bg-gray-300 transition duration-300 ease-in-out">fit(11)</button>
            <button className="rounded-md inline-block p-2 w-full border-2 border-black hover:bg-gray-300 transition duration-300 ease-in-out">flattering(11)</button>
            <button className="rounded-md inline-block p-2 w-full border-2 border-black hover:bg-gray-300 transition duration-300 ease-in-out">appearance(11)</button>
            <button className="rounded-md inline-block p-2 w-full border-2 border-black hover:bg-gray-300 transition duration-300 ease-in-out">cute(11)</button>
            <button className="rounded-md inline-block p-2 w-full border-2 border-black hover:bg-gray-300 transition duration-300 ease-in-out">quality(11)</button>
          </div>
          <p className="my-2">Cons</p>
          <div className="grid md:grid-cols-5 grid-cols-3 gap-3">
            <button className="rounded-md inline-block p-2 w-full border-2 border-black hover:bg-gray-300 transition duration-300 ease-in-out">small(11)</button>
            <button className="rounded-md inline-block p-2 w-full border-2 border-black hover:bg-gray-300 transition duration-300 ease-in-out">short(11)</button>
            <button className="rounded-md inline-block p-2 w-full border-2 border-black hover:bg-gray-300 transition duration-300 ease-in-out">material(23)</button>
            <button className="rounded-md inline-block p-2 w-full border-2 border-black hover:bg-gray-300 transition duration-300 ease-in-out">comfort(11)</button>

          </div>
        </div>
        <div className="py-4">
          <div className="relative">
            <input className="w-3/6 pl-12 py-3 border-2 border-gray-300" placeholder="Search Reviews"
            />
            <MagnifyingGlassIcon className="absolute md:left-3 md:top-1/2 w-7 h-7 md:-translate-y-1/2 -translate-y-8 left-2 top-11 stroke-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        <div className="mt-2">
          <div className="grid md:grid-cols-5 grid-cols-3  gap-3">
            <select className="border border-gray-800 p-4 w-full text-sm md:text-md">
              <option value="">Sortby: Most Helpfull</option>
            </select>
            <select className="border border-gray-800 p-4 w-full text-sm md:text-md">
              <option value="">Size</option>
            </select>
            <select className="border border-gray-800 p-4 w-full text-sm md:text-md">
              <option value="">Color</option>
            </select>
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-6 h-6" /> <span>Photos</span>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-6 h-6" /> <span>Verified</span>
            </div>
          </div>
        </div>
        {/* comments for a product */}
        <div className="my-3 border-b-2 border-b-gray-300 pb-3">
          <div className="grid grid-cols-12">
            <div className="md:col-span-5 col-span-12">
              <div className="flex flex-col space-y-3">
                <p>Anonymous</p>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-7 h-7 stroke-white" />
                  <span className="grow">Verified Purchase</span>
                </div>
                <p className="font-bold">Fit</p>
                <div className="relative flex">
                  <div className="w-52 h-0.5 absolute -z-10 bg-gray-300 self-center"></div>
                  <div className="flex items-center space-x-7 ">
                    <div className="w-5 h-5 border-[2px] border-gray-400 bg-white rounded-full"></div>
                    <div className="w-5 h-5 border-[2px] border-gray-400 bg-white rounded-full"></div>
                    <div className="w-5 h-5 border-[2px] border-gray-400 bg-white rounded-full"></div>
                    <div className="w-5 h-5 border-[2px] border-gray-400 bg-white rounded-full"></div>
                    <div className="w-5 h-5 border-[2px] border-gray-400 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <p>Color: IVORY</p>
                  <p>Height: 5'10"</p>
                  <p>Weight: 179 lb.</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 col-span-12">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3">
                  <span>Star rating</span>
                  <span>Jan 24, 2023</span>
                </div>
                <p>Absolutely Gorgeous</p>
                <p>This dress was a show stopper! I’m 5’10, 179lbs with an athletic build and I bought a XL. The corset bodice makes the “girls” sit high! The dress is short but I had no problem sitting daintily! I have long arms and the flared sleeves were the perfect ...</p>
                <span>Show More</span>
                <div className="grid grid-cols-4 gap-4">
                  <div className="p-1">
                    <Image
                      src={"/samples/recently-viewed/1.jpg"}
                      alt="something is happening"
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="p-1">
                    <Image
                      src={"/samples/recently-viewed/2.jpg"}
                      alt="something is happening"
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="p-1">
                    <Image
                      src={"/samples/recently-viewed/3.jpg"}
                      alt="something is happening"
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                <div className="flex space-x-3">
                  <HandThumbUpIcon className="h-6 w-6 stroke-black" />
                  <span><span className="font-bold">69</span> found this helpful</span>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="my-3 border-b-2 border-b-gray-300 pb-3">
          <div className="grid grid-cols-12">
            <div className="md:col-span-5 col-span-12">
              <div className="flex flex-col space-y-3">
                <p>Anonymous</p>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-7 h-7 stroke-white" />
                  <span className="grow">Verified Purchase</span>
                </div>
                <p className="font-bold">Fit</p>
                <div className="relative flex">
                  <div className="w-52 h-0.5 absolute -z-10 bg-gray-300 self-center"></div>
                  <div className="flex items-center space-x-7 ">
                    <div className="w-5 h-5 border-[2px] border-gray-400 bg-white rounded-full"></div>
                    <div className="w-5 h-5 border-[2px] border-gray-400 bg-white rounded-full"></div>
                    <div className="w-5 h-5 border-[2px] border-gray-400 bg-white rounded-full"></div>
                    <div className="w-5 h-5 border-[2px] border-gray-400 bg-white rounded-full"></div>
                    <div className="w-5 h-5 border-[2px] border-gray-400 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <p>Color: IVORY</p>
                  <p>Height: 5'10"</p>
                  <p>Weight: 179 lb.</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 col-span-12">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3">
                  <span>Star rating</span>
                  <span>Jan 24, 2023</span>
                </div>
                <p>Absolutely Gorgeous</p>
                <p>This dress was a show stopper! I’m 5’10, 179lbs with an athletic build and I bought a XL. The corset bodice makes the “girls” sit high! The dress is short but I had no problem sitting daintily! I have long arms and the flared sleeves were the perfect ...</p>
                <span>Show More</span>
                <div className="grid grid-cols-4 gap-4">
                  <div className="p-1">
                    <Image
                      src={"/samples/recently-viewed/1.jpg"}
                      alt="something is happening"
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="p-1">
                    <Image
                      src={"/samples/recently-viewed/2.jpg"}
                      alt="something is happening"
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="p-1">
                    <Image
                      src={"/samples/recently-viewed/3.jpg"}
                      alt="something is happening"
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                <div className="flex space-x-3">
                  <HandThumbUpIcon className="h-6 w-6 stroke-black" />
                  <span><span className="font-bold">69</span> found this helpful</span>
                </div>

              </div>
            </div>
          </div>
        </div>




      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="slider-container relative">
          <p className="font-bold text-xl my-2">Recommended for You</p>
          <div className="md:flex hidden md:space-x-10 space-x-10 border-b-2 border-b-gray-300 mb-1">
            <span className="border-b-4 border-b-slate-900">Frequently Bought Together</span>
            <span>More from HOUSE OF CB</span>

          </div>
          <div className="md:hidden block relative">
            <ArrowLeftIcon onClick={handelPrev2} className="md:hidden w-7 h-7 flex items-center justify-center absolute top-1/2 left-3 z-20 bg-slate-100 cursor-pointer rounded-full p-1 stroke-black hover:text-white dark:bg-slate-800 dark:stroke-white " />
            <ArrowRightIcon onClick={handelNext2} className="md:hidden w-7 h-7 flex items-center justify-center absolute top-1/2 right-3 z-20 bg-slate-100 cursor-pointer rounded-full p-1 stroke-black hover:text-whitedark:bg-slate-800 dark:stroke-white " />
            <Slider {...settings} ref={sliderRef2}>
              <span className="font-bold text-lg cursor-pointer">Frequently Bought Together</span>
              <span className="font-bold text-lg cursor-pointer">More from HOUSE OF CB</span>

            </Slider>
          </div>
          <ArrowLeftIcon onClick={handelPrev} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 left-3 z-20 bg-black cursor-pointer rounded-full p-2 stroke-white hover:text-white hover:scale-110 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white hover:-translate-x-1" />
          <ArrowRightIcon onClick={handelNext} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 right-3 z-20 bg-black cursor-pointer rounded-full p-2 stroke-white hover:text-white hover:scale-110 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white hover:-translate-x-1" />
          <Slider {...settings2} ref={sliderRef}>
            <div className="p-3">
              <Image
                src={"/samples/recently-viewed/1.jpg"}
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
                src={"/samples/recently-viewed/2.jpg"}
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
                src={"/samples/recently-viewed/3.jpg"}
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
                src={"/samples/recently-viewed/4.jpg"}
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
                src={"/samples/recently-viewed/5.jpg"}
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
                src={"/samples/recently-viewed/6.jpg"}
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
                src={"/samples/recently-viewed/7.jpg"}
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
                src={"/samples/recently-viewed/8.jpg"}
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
                src={"/samples/recently-viewed/9.jpg"}
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
                src={"/samples/recently-viewed/10.jpg"}
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
                src={"/samples/recently-viewed/11.jpg"}
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
                src={"/samples/recently-viewed/12.jpg"}
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
                src={"/samples/recently-viewed/13.jpg"}
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
                src={"/samples/recently-viewed/14.jpg"}
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
                src={"/samples/recently-viewed/15.jpg"}
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
                src={"/samples/recently-viewed/16.jpg"}
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
                src={"/samples/recently-viewed/17.jpg"}
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
                src={"/samples/recently-viewed/18.jpg"}
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
                src={"/samples/recently-viewed/19.jpg"}
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
                src={"/samples/recently-viewed/20.jpg"}
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
                src={"/samples/recently-viewed/21.jpg"}
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
                src={"/samples/recently-viewed/22.jpg"}
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
                src={"/samples/recently-viewed/23.jpg"}
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
                src={"/samples/recently-viewed/24.jpg"}
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
        <DetailRecentlyViewed />
      </div>
    </section>
  )
}