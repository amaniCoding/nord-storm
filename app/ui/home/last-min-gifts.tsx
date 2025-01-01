'use client'
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import Link from "next/link";

export default function LastMinGifts() {
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
  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto py-5 px-3">

        <p className="mb-2 text-xl font-bold">
          Last-Minute Gifts
        </p>
        <div className="slider-container relative">
          <ArrowLeftIcon onClick={handelPrev} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 -left-5 z-20  cursor-pointer p-2 stroke-black hover:bg-black/75 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white " />
          <ArrowRightIcon onClick={handelNext} className="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center absolute top-1/2 -right-5 z-20  cursor-pointer p-2 stroke-black hover:text-white hover:bg-black/75 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:stroke-white " />
          <Slider {...settings2} ref={sliderRef}>
            <div className="p-3 relative">
              <div className="group">
                <Image
                  src={`/samples/last-min-gifts/1.jpg`}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-full object-contain"
                />
                <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-52 left-0 right-0 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black ml-10 mr-10 md:group-hover:block">
                  Quick Show
                </Link>
              </div>
              <div className="mt-2 flex flex-col">
                <span className="text-sm">color slider</span>
                <span className="text-sm">New Markdown</span>
                <span className="text-sm">UGG®</span>
                <span className="text-sm">$112.00 – $160.00Current</span>
                (Up to 30% off select items)
                <span className="text-sm">Up to 30% off select items.</span>
                <span className="line-through">$160.00</span>

                <span className="text-sm">star rating(1934)</span>
              </div>
            </div>
            <div className="p-3 relative">
              <div className="group">
                <Image
                  src={`/samples/last-min-gifts/2.jpg`}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-full object-contain"
                />
                <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-52 left-0 right-0 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black ml-10 mr-10 md:group-hover:block">
                  Quick Show
                </Link>
              </div>
              <div className="mt-2 flex flex-col">
                <span className="text-sm">color slider</span>
                <span className="text-sm">New Markdown</span>
                <span className="text-sm">UGG®</span>
                <span className="text-sm">$112.00 – $160.00Current</span>
                (Up to 30% off select items)
                <span className="text-sm">Up to 30% off select items.</span>
                <span className="line-through">$160.00</span>

                <span className="text-sm">star rating(1934)</span>
              </div>
            </div><div className="p-3 relative">
              <div className="group">
                <Image
                  src={`/samples/last-min-gifts/3.jpg`}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-full object-contain"
                />
                <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-52 left-0 right-0 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black ml-10 mr-10 md:group-hover:block">
                  Quick Show
                </Link>
              </div>
              <div className="mt-2 flex flex-col">
                <span className="text-sm">color slider</span>
                <span className="text-sm">New Markdown</span>
                <span className="text-sm">UGG®</span>
                <span className="text-sm">$112.00 – $160.00Current</span>
                (Up to 30% off select items)
                <span className="text-sm">Up to 30% off select items.</span>
                <span className="line-through">$160.00</span>

                <span className="text-sm">star rating(1934)</span>
              </div>
            </div><div className="p-3 relative">
              <div className="group">
                <Image
                  src={`/samples/last-min-gifts/4.jpg`}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-full object-contain"
                />
                <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-52 left-0 right-0 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black ml-10 mr-10 md:group-hover:block">
                  Quick Show
                </Link>
              </div>
              <div className="mt-2 flex flex-col">
                <span className="text-sm">color slider</span>
                <span className="text-sm">New Markdown</span>
                <span className="text-sm">UGG®</span>
                <span className="text-sm">$112.00 – $160.00Current</span>
                (Up to 30% off select items)
                <span className="text-sm">Up to 30% off select items.</span>
                <span className="line-through">$160.00</span>

                <span className="text-sm">star rating(1934)</span>
              </div>
            </div><div className="p-3 relative">
              <div className="group">
                <Image
                  src={`/samples/last-min-gifts/5.jpg`}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-full object-contain"
                />
                <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-52 left-0 right-0 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black ml-10 mr-10 md:group-hover:block">
                  Quick Show
                </Link>
              </div>
              <div className="mt-2 flex flex-col">
                <span className="text-sm">color slider</span>
                <span className="text-sm">New Markdown</span>
                <span className="text-sm">UGG®</span>
                <span className="text-sm">$112.00 – $160.00Current</span>
                (Up to 30% off select items)
                <span className="text-sm">Up to 30% off select items.</span>
                <span className="line-through">$160.00</span>

                <span className="text-sm">star rating(1934)</span>
              </div>
            </div><div className="p-3 relative">
              <div className="group">
                <Image
                  src={`/samples/last-min-gifts/6.jpg`}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-full object-contain"
                />
                <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-52 left-0 right-0 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black ml-10 mr-10 md:group-hover:block">
                  Quick Show
                </Link>
              </div>
              <div className="mt-2 flex flex-col">
                <span className="text-sm">color slider</span>
                <span className="text-sm">New Markdown</span>
                <span className="text-sm">UGG®</span>
                <span className="text-sm">$112.00 – $160.00Current</span>
                (Up to 30% off select items)
                <span className="text-sm">Up to 30% off select items.</span>
                <span className="line-through">$160.00</span>

                <span className="text-sm">star rating(1934)</span>
              </div>
            </div><div className="p-3 relative">
              <div className="group">
                <Image
                  src={`/samples/last-min-gifts/7.jpg`}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-full object-contain"
                />
                <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-52 left-0 right-0 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black ml-10 mr-10 md:group-hover:block">
                  Quick Show
                </Link>
              </div>
              <div className="mt-2 flex flex-col">
                <span className="text-sm">color slider</span>
                <span className="text-sm">New Markdown</span>
                <span className="text-sm">UGG®</span>
                <span className="text-sm">$112.00 – $160.00Current</span>
                (Up to 30% off select items)
                <span className="text-sm">Up to 30% off select items.</span>
                <span className="line-through">$160.00</span>

                <span className="text-sm">star rating(1934)</span>
              </div>
            </div><div className="p-3 relative">
              <div className="group">
                <Image
                  src={`/samples/last-min-gifts/8.jpg`}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-full object-contain"
                />
                <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-52 left-0 right-0 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black ml-10 mr-10 md:group-hover:block">
                  Quick Show
                </Link>
              </div>
              <div className="mt-2 flex flex-col">
                <span className="text-sm">color slider</span>
                <span className="text-sm">New Markdown</span>
                <span className="text-sm">UGG®</span>
                <span className="text-sm">$112.00 – $160.00Current</span>
                (Up to 30% off select items)
                <span className="text-sm">Up to 30% off select items.</span>
                <span className="line-through">$160.00</span>

                <span className="text-sm">star rating(1934)</span>
              </div>
            </div><div className="p-3 relative">
              <div className="group">
                <Image
                  src={`/samples/last-min-gifts/9.jpg`}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-full object-contain"
                />
                <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-52 left-0 right-0 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black ml-10 mr-10 md:group-hover:block">
                  Quick Show
                </Link>
              </div>
              <div className="mt-2 flex flex-col">
                <span className="text-sm">color slider</span>
                <span className="text-sm">New Markdown</span>
                <span className="text-sm">UGG®</span>
                <span className="text-sm">$112.00 – $160.00Current</span>
                (Up to 30% off select items)
                <span className="text-sm">Up to 30% off select items.</span>
                <span className="line-through">$160.00</span>

                <span className="text-sm">star rating(1934)</span>
              </div>
            </div><div className="p-3 relative">
              <div className="group">
                <Image
                  src={`/samples/last-min-gifts/10.jpg`}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-full object-contain"
                />
                <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-52 left-0 right-0 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black ml-10 mr-10 md:group-hover:block">
                  Quick Show
                </Link>
              </div>
              <div className="mt-2 flex flex-col">
                <span className="text-sm">color slider</span>
                <span className="text-sm">New Markdown</span>
                <span className="text-sm">UGG®</span>
                <span className="text-sm">$112.00 – $160.00Current</span>
                (Up to 30% off select items)
                <span className="text-sm">Up to 30% off select items.</span>
                <span className="line-through">$160.00</span>

                <span className="text-sm">star rating(1934)</span>
              </div>
            </div><div className="p-3 relative">
              <div className="group">
                <Image
                  src={`/samples/last-min-gifts/11.jpg`}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-full object-contain"
                />
                <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-52 left-0 right-0 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black ml-10 mr-10 md:group-hover:block">
                  Quick Show
                </Link>
              </div>
              <div className="mt-2 flex flex-col">
                <span className="text-sm">color slider</span>
                <span className="text-sm">New Markdown</span>
                <span className="text-sm">UGG®</span>
                <span className="text-sm">$112.00 – $160.00Current</span>
                (Up to 30% off select items)
                <span className="text-sm">Up to 30% off select items.</span>
                <span className="line-through">$160.00</span>

                <span className="text-sm">star rating(1934)</span>
              </div>
            </div><div className="p-3 relative">
              <div className="group">
                <Image
                  src={`/samples/last-min-gifts/12.jpg`}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-full object-contain"
                />
                <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-52 left-0 right-0 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black ml-10 mr-10 md:group-hover:block">
                  Quick Show
                </Link>
              </div>
              <div className="mt-2 flex flex-col">
                <span className="text-sm">color slider</span>
                <span className="text-sm">New Markdown</span>
                <span className="text-sm">UGG®</span>
                <span className="text-sm">$112.00 – $160.00Current</span>
                (Up to 30% off select items)
                <span className="text-sm">Up to 30% off select items.</span>
                <span className="line-through">$160.00</span>

                <span className="text-sm">star rating(1934)</span>
              </div>
            </div>

          </Slider>
        </div>
      </div>
    </section>
  )
}