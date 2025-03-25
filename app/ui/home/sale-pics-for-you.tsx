'use client'
// import { ColorSliderPics } from "@/app/components/color-slider";
import Image from "next/image";
import SliderSeederMobile from "@/app/components/slider-seeder-mobile";
import { colorsSeeder3 } from "@/app/libs/placeholder";

import Link from "next/link";
import { Rating } from "react-simple-star-rating";
export default function SalePics() {
  return (
    <section className="p-4">
      <div className="max-w-screen-xl mx-auto">
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <p className="my-3 font-semibold pl-4">Sale Picks for You</p>

        <div className="md:flex hidden md:space-x-10 border-b-2 border-b-gray-300 pb-3 mb-4 bg-white p-3">
          <span className="border-b-4 border-b-black">New Markdowns</span>
          <span>Designer Sale Clothing, Shoes & Accessories</span>
          <span>Sale Cold-Weather Clothing, Shoes & Accessories</span>
          <span>Limited-Time Sale</span>
          <span>Beauty & Fragrance Sale</span>
        </div>
        <SliderSeederMobile>
          <span className="font-bold text-lg text-center cursor-pointer md:border-b-4 border-b-black">New Markdowns</span>
          <span className="font-bold text-lg text-center cursor-pointer">Designer Sale Clothing, Shoes & Accessories</span>
          <span className="font-bold text-lg text-center cursor-pointer">Sale Cold-Weather Clothing, Shoes & Accessories</span>
          <span className="font-bold text-lg text-center cursor-pointer">Limited-Time Sale</span>
          <span className="font-bold text-lg text-center cursor-pointer">Beauty & Fragrance Sale</span>
        </SliderSeederMobile>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 py-6">
          {Array.from(Array(12).keys()).map((_, i) => {
            return (
              <div className="shadow-sm p-3" key={i}>
                <div className="group relative ">
                  <Link href={`/product/name/143`}>
                    <div className="hidden absolute top-0 bottom-0 left-0 right-0 bg-black/15 group-hover:block"></div>

                    <Image
                      src={`/samples/sale-pics-for-you/${i + 1}.jpg`}
                      alt="something is happening"
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-full object-contain"
                    />
                  </Link>
                  <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-3 right-1/2 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black w-3/4 translate-x-1/2 md:group-hover:block">
                    Quick Show
                  </Link>
                </div>
                <div className="mt-1">

                  <div className="my-1">
                    <span className="block">UGG®</span>
                    <span className="block font-bold">$112.00</span>
                    <span className="line-through block">$160.00</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    {
                      colorsSeeder3.map((color, i) => {
                        return <div key={i} className={`brightness-50 w-3 h-3 outline outline-1 outline-offset-2 outline-red-500 rounded-full  ${color.colorcode}`}></div>
                      })
                    }
                  </div>
                  {/* <ColorSliderPics colors={colorsSeeder3} /> */}
                  <div className="flex space-x-2">
                    <Rating initialValue={4.3} size={20} allowFraction readonly SVGclassName="inline" />



                    <span className="">(325)</span>
                  </div>


                </div>
              </div>
            )
          })
          }
        </div>
        <button className="block px-2 w-28 py-2 bg-black text-white rounded-3xl">Show All</button>

      </div>
    </section>
  )
}


const duumyText = [
  {

  }
]