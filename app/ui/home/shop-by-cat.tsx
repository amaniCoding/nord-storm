'use client'
import Image from "next/image";
export default function ShopByCat() {
  return (
    <section className="p-4">
      <div className="max-w-screen-xl mx-auto">
        <p className="my-3 font-semibold">SHOP BY CATEGORY</p>
        <div className="grid md:grid-cols-6 grid-cols-2 md:gap-3 gap-1">
          <div className="p-1">
            <Image
              src={`/samples/shop-by-cat/1.jpg`}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
            <p className="my-1 p-2 font-bold">Women</p>
          </div>
          <div className="p-1">
            <Image
              src={`/samples/shop-by-cat/2.jpg`}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
             <p className="my-1 p-2 font-bold">Men</p>
          </div>
          <div className="p-1">
            <Image
              src={`/samples/shop-by-cat/3.jpg`}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
             <p className="my-1 p-2 font-bold">Kids</p>
          </div>
          <div className="p-1">
            <Image
              src={`/samples/shop-by-cat/4.jpg`}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
            <p className="my-1 p-2 font-bold">Designer</p>
          </div>
          <div className="p-1">
            <Image
              src={`/samples/shop-by-cat/5.jpg`}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
            <p className="my-1 p-2 font-bold">Home</p>
          </div>
          <div className="p-1">
            <Image
              src={`/samples/shop-by-cat/6.jpg`}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
            <p className="my-1 p-2 font-bold">Beauty & Fragrance</p>
          </div>
        </div>
      </div>
    </section>
  )
}