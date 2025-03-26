'use client'
import Link from "next/link";
import Image from "next/image";
import { dummyText, shuffleArray } from "@/app/libs/placeholder";
import { Rating } from "react-simple-star-rating";
import QuickShow from "@/app/ui/detail/quick-show";
import { useCallback, useState } from "react";
export default function YouMayAlsoLike() {
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


      {dummyProduct.map((el, i) => {
        return (
          <div className="" key={i}>
            <div className="group relative ">
              <Link href={`/product/name/143`}>
                <div className="hidden absolute top-0 bottom-0 left-0 right-0 bg-black/15 group-hover:block"></div>

                <Image
                  src={`${el.image}`}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full object-contain"
                />
              </Link>
              <button onClick={() => { handelShowQuickShow(el) }} className="hidden bg-gray-50/95 p-2 text-center absolute bottom-3 right-1/2 z-[100] hover:bg-white border-2 border-slate-400 hover:border-black w-3/4 translate-x-1/2 md:group-hover:block">
                Quick Show
              </button>
            </div>
            <div className="mt-2 flex flex-col">
              <div className="my-1">
                <span className="block font-semibold">{el.desc.substring(4, 70)}</span>
                <span className="block">&copy;{el.brand}</span>
                <span className="block">{el.price.original}</span>
                <span className="line-through block">{el.price.off}</span>
              </div>

              <div className="flex items-center space-x-4">
                {
                  el.colors.map((color, i) => {
                    return <div key={i} className={`brightness-50 w-3 h-3 outline outline-1 outline-offset-2 outline-red-500 rounded-full  ${color}`}></div>
                  })
                }
              </div>

              <div className="flex space-x-2">
                <Rating initialValue={el.rating} size={20} allowFraction readonly SVGclassName="inline" />



                <span className="mt-0.5">({el.ratingCount})</span>
              </div>
            </div>
          </div>
        )
      })
      }

      <QuickShow isShownQuickShow={showQuickShow} handelDismissQuickShow={handelDismissQuickShow} productForQuickShow={productForQuickShow} />

    </>
  )
}