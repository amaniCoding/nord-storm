'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import Link from "next/link";

export default function CustomerPhotos(props: { photoName: string, numberOfSlides?: number }) {

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
        slidesToScroll: props.numberOfSlides || 1,
        arrows: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: props.numberOfSlides || 1,
                    slidesToScroll: props.numberOfSlides || 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    centerMode: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: props.numberOfSlides || 1,
                    slidesToScroll: props.numberOfSlides || 1,
                    initialSlide: 2,
                    dots: false,
                    arrows: false,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: props.numberOfSlides || 1,
                    slidesToScroll: props.numberOfSlides || 1,
                    dots: false,
                    arrows: false,
                    centerMode: true,
                }
            }
        ]
    };
    return (
        <div className="relative slider-container">
            <ArrowLeftIcon onClick={handelPrev} className="md:flex hidden md:w-10 md:h-10 w-8 h-8  items-center justify-center absolute top-1/2 bg-black/55 shadow-md rounded-full left-1 z-20  cursor-pointer p-2 stroke-white font-bold transition duration-300 ease-out dark:bg-slate-800 dark:stroke-white md " />
            <ArrowRightIcon onClick={handelNext} className="md:flex hidden md:w-10 md:h-10 w-8 h-8  items-center justify-center absolute top-1/2 bg-black/55 shadow-md rounded-full right-1 z-20  cursor-pointer p-2 stroke-white font-bold transition duration-300 ease-out dark:bg-slate-800 dark:stroke-white " />

            <div className="large-color">
                <Slider {...settings} ref={sliderRef}>
                    {Array.from(Array(10).keys()).map((_, i) => {
                        return (
                            <div className="" key={i}>
                                    <Image
                                        src={`/samples/${props.photoName}/${i + 1}.jpg`}
                                        alt="something is happening"
                                        width={0}
                                        height={0}
                                        sizes="100vh"
                                        className="w-full"
                                    />
                            </div>
                        )
                    })
                    }
                </Slider>
            </div>
        </div>
    )
}