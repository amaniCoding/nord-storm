'use client'
import Link from "next/link"
import StarRatings from "react-star-ratings"
import Image from "next/image"
import {  dummyText, shuffleArray } from "../libs/placeholder"
export default function ShoppingSeeder() {
    const shuffle = shuffleArray(dummyText);
  return (
    <>
      {shuffle.map((el, i) => {
        return (
          <div className="bg-white" key={i}>
            <div className="group relative">
              <Link href={`/product/name/143`}>
                <div className="hidden absolute top-0 bottom-0 left-0 right-0 bg-black/15 group-hover:block"></div>

                <Image
                  src={`/samples/back/${i + 1}.jpg`}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full"
                />
              </Link>
              <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 w-3/4 right-1/2 translate-x-1/2 text-center absolute bottom-3  z-[100] hover:bg-white border-2 border-slate-400 hover:border-black md:group-hover:block">
                Quick Show
              </Link>
            </div>
            <div className="mt-1 mx-4">

              <div className="my-1">
                <span className="block">{el.desc.substring(5, 67)}</span>
                <span className="block">{el.brand}®</span>
                <span className="block font-bold">{el.price.original}</span>
                <span className="line-through block">{el.price.off}</span>
              </div>
              <div className="flex items-center space-x-4">
                    {
                      el.colors.map((color, i) => {
                        return <div key={i} className={`brightness-50 w-3 h-3 outline outline-1 outline-offset-2 outline-red-500 rounded-full  ${color}`}></div>
                      })
                    }
                  </div>
              <div className="flex items-center space-x-2">
                <div>
                  <StarRatings
                    rating={el.rating}
                    starDimension="18px"
                    starRatedColor="#FF9529"
                    starSpacing="0"
                    numberOfStars={5}
                    name='rating'
                  />
                </div>

                <p className="block">({el.ratingCount})</p>
              </div>


            </div>
          </div>
        )
      })
      }
    </>
  )
}