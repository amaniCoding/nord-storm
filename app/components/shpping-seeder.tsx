import Link from "next/link"
import StarRatings from "react-star-ratings"
import Image from "next/image"
import ColorSlider from "./color-slider"
import { colorsSeeder } from "../libs/placeholder"
export default function ShoppingSeeder() {
  return (
    <>
      {
        Array.from(Array(10).keys()).map((_, i) => {
          return (
            <div className="py-2 px-4 relative" key={i}>
            <div className="group">
              <Link href={`/product/name/143`}>
                <Image
                  src={`/samples/great-deals/${i + 1}.jpg`}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-full object-contain"
                />
              </Link>
              <Link href={`/product/name/40/quick-show`} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-44 right-1/2 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black w-1/2 translate-x-1/2 md:group-hover:block">
                Quick Show
              </Link>
            </div>
            <div className="mt-2 flex flex-col mb-2">
              <ColorSlider colors={colorsSeeder} />
              <div className="my-2">
                <span className="block">New Markdown</span>
                <span className="block">UGG®</span>
                <span className="block font-bold">$112.00</span>
                <span className="line-through block">$160.00</span>
              </div>

              <div className="flex space-x-2">
                <StarRatings
                  rating={5}
                  starDimension="18px"
                  starRatedColor="#FF9529"
                  starSpacing="0"
                  numberOfStars={5}
                  name='rating'
                />
                <span>(325)</span>
              </div>
            </div>
          </div>

          )
        })
      }
    </>
  )
}