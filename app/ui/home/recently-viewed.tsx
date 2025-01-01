'use client'
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function RecentlyViewed() {
  const settings = {
    dots: true,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto py-5 px-3">
        <p className="my-3 text-xl font-bold">Here's What Caught Your Eye</p>
        <p className="mb-2">
        Recently viewed
        </p>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="p-3">
              <Image
                src={`/samples/recently-viewed/1.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-3">
              <Image
                src={`/samples/recently-viewed/2.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-3">
              <Image
                src={`/samples/recently-viewed/3.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-3">
              <Image
                src={`/samples/recently-viewed/4.jpg`}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}