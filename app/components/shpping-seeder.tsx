'use client'
import Link from "next/link"
import StarRatings from "react-star-ratings"
import Image from "next/image"
import ColorSlider from "./color-slider"
import { colorsSeeder } from "../libs/placeholder"
export default function ShoppingSeeder() {
  return (
    <>
      {Array.from(Array(10).keys()).map((_, i) => {
        return (
          <div className="py-1 px-3 bg-white" key={i}>
            <div className="group relative">
              <Link href={`/product/name/143`}>
                <div className="hidden absolute top-0 bottom-0 left-0 right-0 bg-black/15 group-hover:block"></div>

                <Image
                  src={`/samples/great-deals/${i + 1}.jpg`}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-full object-contain"
                />
              </Link>
              <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-3 right-1/2 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black w-1/2 translate-x-1/2 md:group-hover:block">
                Quick Show
              </Link>
            </div>
            <div className="mt-1">

              <div className="my-1">
                <span className="block">New Markdown</span>
                <span className="block">UGG®</span>
                <span className="block font-bold">$112.00</span>
                <span className="line-through block">$160.00</span>
              </div>
              <ColorSlider colors={colorsSeeder} />
              <div className="flex items-center space-x-2">
                <div>
                  <StarRatings
                    rating={5}
                    starDimension="18px"
                    starRatedColor="#FF9529"
                    starSpacing="0"
                    numberOfStars={5}
                    name='rating'
                  />
                </div>

                <p className="block">(325)</p>
              </div>


            </div>
          </div>
        )
      })
      }
    </>
  )
}