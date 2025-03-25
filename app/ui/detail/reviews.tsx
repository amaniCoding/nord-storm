'use client'
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import RecentlyViewed from "../home/recently-viewed";
import SliderMobile from "@/app/components/slider-seeder-mobile";
import SliderSeederLarge from "@/app/components/slider-seeder-large";
import CustomerPhotos from "@/app/components/customer-photos";

export default function Reviews() {
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
    <section className="md:p-4 p-2">
      <div className="md:max-w-screen-xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-center my-2">Reviews</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0">
          <div className="border border-gray-300 p-3">
            <p className="font-bold md:text-xl mb-2">Most helpful positive review</p>
            <div className="  flex flex-col space-y-3">
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

          <div className="border border-gray-300 p-3">
            <p className="font-bold md:text-xl mb-2">Most helpful positive review</p>
            <div className=" flex flex-col space-y-3">
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
        <CustomerPhotos photoName="sale-pics-for-you" />
      </div>
      <div className="md:max-w-screen-xl max-w-full mx-auto">

        <div className="grid grid-cols-12 md:gap-10 gap-0">
          <div className="md:col-span-3 col-span-12">

            <div className="main-container sticky top-0 pt-3">
              <div className="my-3 w-full flex flex-col space-y-4 pb-5 border-b border-b-gray-300">
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="w-6 h-6 flex-none" />
                  <span className="flex-none">5 stars</span>
                  <div className="relative h-4 rounded-md bg-slate-300 grow">
                    <div className="absolute top-0 bottom-0 left-0 bg-black w-[35%]"></div>
                  </div>
                  <span className="flex-none">35%</span>

                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="w-6 h-6 flex-none" />
                  <span className="flex-none">4 stars</span>
                  <div className="relative h-4 rounded-md bg-slate-300 grow">
                    <div className="absolute top-0 bottom-0 left-0 bg-black w-[16%]"></div>
                  </div>
                  <span className="flex-none">16%</span>

                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="w-6 h-6 flex-none" />
                  <span className="flex-none">3 stars</span>
                  <div className="relative h-4 rounded-md bg-slate-300 grow">
                    <div className="absolute top-0 bottom-0 left-0 bg-black w-[11%]"></div>
                  </div>
                  <span className="flex-none">11%</span>

                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="w-6 h-6 flex-none" />
                  <span className="flex-none">2 stars</span>
                  <div className="relative h-4 rounded-md bg-slate-300 grow">
                    <div className="absolute top-0 bottom-0 left-0 bg-black w-[14%]"></div>
                  </div>
                  <span className="flex-none">14%</span>

                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="w-6 h-6 flex-none" />
                  <span className="flex-none">1 star</span>
                  <div className="relative h-4 rounded-md bg-slate-300 grow">
                    <div className="absolute top-0 bottom-0 left-0 bg-black w-[23%]"></div>
                  </div>
                  <span className="flex-none">23%</span>

                </div>
              </div>


              <div className="pb-5 mt-3 border-b border-b-gray-300">
                <p className="my-2">Pros</p>
                <div className="flex flex-wrap">
                  <button className="rounded-3xl mr-2 mb-2 inline-block px-3 py-1 border-2 border-y-gray-300 hover:bg-gray-300 transition duration-300 ease-in-out">fit(11)</button>
                  <button className="rounded-3xl mr-2 mb-2 inline-block px-3 py-1 border-2 border-y-gray-300 hover:bg-gray-300 transition duration-300 ease-in-out ">flattering(11)</button>
                  <button className="rounded-3xl mr-2 mb-2 inline-block px-3 py-1 border-2 border-y-gray-300 hover:bg-gray-300 transition duration-300 ease-in-out">appearance(11)</button>
                  <button className="rounded-3xl mr-2 mb-2 inline-block px-3 py-1 border-2 border-y-gray-300 hover:bg-gray-300 transition duration-300 ease-in-out">cute(11)</button>
                  <button className="rounded-3xl mr-2 mb-2 inline-block px-3 py-1 border-2 border-y-gray-300 hover:bg-gray-300 transition duration-300 ease-in-out">quality(11)</button>
                </div>
                <p className="my-2">Cons</p>
                <div className="flex flex-wrap">
                  <button className="rounded-3xl mr-2 mb-2 inline-block px-3 py-1 border-2 border-y-gray-300 hover:bg-gray-300 transition duration-300 ease-in-out">small(11)</button>
                  <button className="rounded-3xl mr-2 mb-2 inline-block px-3 py-1 border-2 border-y-gray-300 hover:bg-gray-300 transition duration-300 ease-in-out">short(11)</button>
                  <button className="rounded-3xl mr-2 mb-2 inline-block px-3 py-1 border-2 border-y-gray-300 hover:bg-gray-300 transition duration-300 ease-in-out">material(23)</button>
                  <button className="rounded-3xl mr-2 mb-2 inline-block px-3 py-1 border-2 border-y-gray-300 hover:bg-gray-300 transition duration-300 ease-in-out">comfort(11)</button>

                </div>
              </div>



              <div className="pb-5 mt-3 border-b border-b-gray-300">
                <div className="flex flex-wrap">
                  <select className="border border-gray-200 px-3 py-1 mr-2 mb-2 block rounded-3xl ">
                    <option value="">Sortby: Most Helpfull</option>
                  </select>
                  <select className="border border-gray-200 px-3 py-1  mr-2 block mb-2 rounded-3xl ">
                    <option value="">Size</option>
                  </select>
                  <select className="border border-gray-200 px-3 py-1 block mr-2 mb-2 rounded-3xl ">
                    <option value="">Color</option>
                  </select>

                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <input type="checkbox" className="w-6 h-6 rounded-lg" /> <span>Photos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-6 h-6 rounded-lg" /> <span>Verified</span>
                  </div>
                </div>
              </div>

              <div className="pb-5 mt-3">
                <div className="relative">
                  <input className="pl-12 px-3 py-1 border-2 border-gray-200 rounded-3xl" placeholder="Search Reviews"
                  />
                  <MagnifyingGlassIcon className="absolute md:left-3  w-7 h-7 -translate-y-1/2 top-1/2 left-2 to1 stroke-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
            </div>
          </div>


          <div className="md:col-span-9 col-span-12">
            <div className="main-container mt-3">
              <div className="my-3 border-b-2 border-b-gray-300 pb-3">
                <div className="grid grid-cols-12">
                  <div className="md:col-span-4 col-span-12">
                    <div className="flex flex-col space-y-3 justify-center pb-3 pt-3">
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
                  <div className="md:col-span-8 col-span-12">
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center space-x-3">
                        <span>Star rating</span>
                        <span>Jan 24, 2023</span>
                      </div>
                      <p>Absolutely Gorgeous</p>
                      <p>This dress was a show stopper! I’m 5’10, 179lbs with an athletic build and I bought a XL. The corset bodice makes the “girls” sit high! The dress is short but I had no problem sitting daintily! I have long arms and the flared sleeves were the perfect ...</p>
                      <span>Show More</span>
                      <div className="grid grid-cols-4 ga">
                        <div className="">
                          <Image
                            src={"/samples/recently-viewed/1.jpg"}
                            alt="something is happening"
                            width={0}
                            height={0}
                            sizes="100vh"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="">
                          <Image
                            src={"/samples/recently-viewed/2.jpg"}
                            alt="something is happening"
                            width={0}
                            height={0}
                            sizes="100vh"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="">
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
                  <div className="md:col-span-4 col-span-12">
                    <div className="flex flex-col space-y-3 justify-center pb-3 pt-3">
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
                  <div className="md:col-span-8 col-span-12">
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center space-x-3">
                        <span>Star rating</span>
                        <span>Jan 24, 2023</span>
                      </div>
                      <p>Absolutely Gorgeous</p>
                      <p>This dress was a show stopper! I’m 5’10, 179lbs with an athletic build and I bought a XL. The corset bodice makes the “girls” sit high! The dress is short but I had no problem sitting daintily! I have long arms and the flared sleeves were the perfect ...</p>
                      <span>Show More</span>
                      <div className="grid grid-cols-4 ga">
                        <div className="">
                          <Image
                            src={"/samples/recently-viewed/1.jpg"}
                            alt="something is happening"
                            width={0}
                            height={0}
                            sizes="100vh"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="">
                          <Image
                            src={"/samples/recently-viewed/2.jpg"}
                            alt="something is happening"
                            width={0}
                            height={0}
                            sizes="100vh"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="">
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
                  <div className="md:col-span-4 col-span-12">
                    <div className="flex flex-col space-y-3 justify-center pb-3 pt-3">
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
                  <div className="md:col-span-8 col-span-12">
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center space-x-3">
                        <span>Star rating</span>
                        <span>Jan 24, 2023</span>
                      </div>
                      <p>Absolutely Gorgeous</p>
                      <p>This dress was a show stopper! I’m 5’10, 179lbs with an athletic build and I bought a XL. The corset bodice makes the “girls” sit high! The dress is short but I had no problem sitting daintily! I have long arms and the flared sleeves were the perfect ...</p>
                      <span>Show More</span>
                      <div className="grid grid-cols-4 ga">
                        <div className="">
                          <Image
                            src={"/samples/recently-viewed/1.jpg"}
                            alt="something is happening"
                            width={0}
                            height={0}
                            sizes="100vh"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="">
                          <Image
                            src={"/samples/recently-viewed/2.jpg"}
                            alt="something is happening"
                            width={0}
                            height={0}
                            sizes="100vh"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="">
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
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="slider-container relative">
          <p className="md:font-bold md:text-xl my-2 md:text-left text-center">Recommended for You</p>
          <div className="md:flex hidden md:space-x-10 space-x-10 border-b-2 border-b-gray-300 mb-1 pb-3">
            <span className="border-b-4 border-b-slate-900">Frequently Bought Together</span>
            <span>More from HOUSE OF CB</span>

          </div>
          <SliderMobile>
            <span className="font-bold text-lg cursor-pointer ">Frequently Bought Together</span>
            <span className=" font-bold text-lg cursor-pointer">More from HOUSE OF CB</span>

          </SliderMobile>

          <section className=" bg-gray-50">
            <div className="max-w-screen-xl mx-auto">
              <SliderSeederLarge photoName="great-deals" />
            </div>
          </section>

        </div>
        <RecentlyViewed />
      </div>
    </section>
  )
}