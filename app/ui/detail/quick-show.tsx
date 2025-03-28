'use client'
import { PlusIcon, ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function QuickShow(props: { isShownQuickShow: boolean, handelDismissQuickShow: () => void, productForQuickShow: any}) {
  return (

    <>
      {
        props.isShownQuickShow && (
          <section className="fixed top-0 left-0 right-0 bottom-0 bg-black/55 overflow-auto scroll_content socrollabar-small z-50">
            <div className="max-w-screen-md bg-white my-12 p-6 mx-auto relative">
              <button onClick={props.handelDismissQuickShow}>
                <XMarkIcon className="absolute top-2 right-2 cursor-pointer stroke-black w-10 h-10 rounded-full hover:bg-gray-200 p-2" />
              </button>
              <div className="grid grid-cols-2">
                <div className="p-3">
                  <Image
                    src={`${props.productForQuickShow.image}`}
                    alt="something is happening"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-full"
                  />
                </div>
                <div className="p-3 flex flex-col space-y-2">
                  <p className="text-xl font-bold">{props.productForQuickShow.desc}</p>
                  <p>brand name</p>
                  <p className="font-bold">{props.productForQuickShow.brand}</p>
                  <p>Stay comfortable from the office to home in this maternity shirtdress that means easy nursing thanks to the button-up design.</p>
                  <p>Color: Dark Green</p>
                  <div className="w-20 h-20 border-2 border-black/75 rounded-lg">
                    <Image
                      src={`/samples/back/5.jpg`}
                      alt="something is happening"
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <select className="border border-gray-800 p-4 w-full">
                    {
                      props.productForQuickShow.size.map((el: string, i: number) => {
                        return (<option value="" key={i}>{el}</option>)
                      })
                    }
                  </select>
                  <div className="flex items-center space-x-3">
                    <ArchiveBoxIcon className="w-7 h-7 stroke-black" />
                    <div className="flex flex-col space-y-1">
                      <p className="font-bold">Free returns anytime</p>
                      <p>Sold by Nordstrom</p>
                    </div>
                  </div>
                  <button className="flex space-x-2 py-4 px-3 bg-black items-center justify-center">
                    <ShoppingBagIcon className="w-6 h-6 stroke-white" />
                    <span className="font-bold text-center rounded-md text-white">Add to bag</span>
                  </button>
                  <div className="flex items-center space-x-2">
                    <PlusIcon className="w-6 h-6 stroke-black" />
                    <span className="underline">Add to Wish List</span>
                  </div>
                  <Link
                    href={`/product/hotting/555`}
                  >
                    See full details
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )
      }

    </>

  )
}