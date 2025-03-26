'use client'
// import { ColorSliderPics } from "@/app/components/color-slider";
import Image from "next/image";
import SliderSeederMobile from "@/app/components/slider-seeder-mobile";
import { dummyText, shuffleArray } from "@/app/libs/placeholder";

import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import QuickShow from "../detail/quick-show";
import { useCallback, useState } from "react";
export default function SalePics() {
   
    const [showQuickShow, setShowQuickShow] = useState<boolean>(false);
    const [productForQuickShow, setproductForQuickShow] = useState([]);
      const shuffle = useCallback(() => shuffleArray(dummyText), []);
    
      const [dummyProduct, setDummyProduct] = useState(shuffle);
    const handelShowQuickShow = (product: any) => {
      setShowQuickShow(true);
      setproductForQuickShow(product);
    }

    const handelDismissQuickShow = () => {
      setShowQuickShow(false);
      setproductForQuickShow([]);
    }
  return (
    <>
    <section className="">
      <div className="max-w-screen-xl mx-auto">
        <p className="pl-3 pt-3 font-semibold text-center">Sale Picks for You</p>

        <div className="md:flex hidden md:space-x-10 border-b-2 border-b-gray-300 pb-3 mb-4 bg-white p-3">
          <span className="border-b-4 border-b-black">New Markdowns</span>
          <span>Designer Sale Clothing, Shoes & Accessories</span>
          <span>Sale Cold-Weather Clothing, Shoes & Accessories</span>
          <span>Limited-Time Sale</span>
          <span>Beauty & Fragrance Sale</span>
        </div>
        <SliderSeederMobile>
          <span className="font-bold text-center cursor-pointer text-sm md:border-b-4 border-b-black">New Markdowns</span>
          <span className="font-bold text-center cursor-pointer text-sm">Designer Sale Clothing, Shoes & Accessories</span>
          <span className="font-bold text-center cursor-pointer text-sm">Sale Cold-Weather Clothing, Shoes & Accessories</span>
          <span className="font-bold text-center cursor-pointer text-sm">Limited-Time Sale</span>
          <span className="font-bold text-center cursor-pointer text-sm">Beauty & Fragrance Sale</span>
        </SliderSeederMobile>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 py-6">
          {dummyProduct.map((el, i) => {
            return (
              <div className="shadow-sm" key={i}>
                <div className="group relative ">
                  <Link href={`/product/name/143`}>
                    <div className="hidden absolute top-0 bottom-0 left-0 right-0 bg-black/15 group-hover:block"></div>

                    <Image
                      src={`${el.image}`}
                      alt="something is happening"
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-full"
                    />
                  </Link>
                  <button  onClick={() => {handelShowQuickShow(el)}} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-3 right-1/2 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black w-3/4 translate-x-1/2 md:group-hover:block">
                    Quick Show
                  </button>
                </div>

                  <div className="my-1 lg:px-4 px-2">
                    <p className="font-semibold text-balance">{el.desc.substring(4, 70)}</p>
                    <p className="">&copy;{el.brand}</p>
                    <p className="">{el.price.original}</p>
                    <p className="line-through block">{el.price.off}</p>
                  </div>
                  <div className="flex items-center space-x-4 lg:px-4 px-2">
                    {
                      el.colors.map((color, i) => {
                        return <div key={i} className={`brightness-50 w-3 h-3 outline outline-1 outline-offset-2 outline-red-500 rounded-full  ${color}`}></div>
                      })
                    }
                  </div>
                  {/* <ColorSliderPics colors={colorsSeeder3} /> */}
                  <div className="flex space-x-2 lg:px-4 px-2">
                    <Rating initialValue={el.rating} size={20} allowFraction readonly SVGclassName="inline" />



                    <span className="mt-0.5">({el.ratingCount})</span>
                  </div>
              </div>
            )
          })
          }
        </div>
        <button className="block px-2 w-28 py-2 bg-black text-white rounded-3xl ml-4">Show All</button>

      </div>
    </section>
    <QuickShow isShownQuickShow={showQuickShow} handelDismissQuickShow={handelDismissQuickShow} productForQuickShow={productForQuickShow}/>
    </>
  )
}


const duumyText = [
  {

  }
]