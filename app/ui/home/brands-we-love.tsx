'use client'
import Image from "next/image";
export default function Brands() {
  //react/no-unescaped-entities
  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto py-1 px-3">
        <p className="text-xl my-2 font-bold text-center">Brands We Love</p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
          <div className="p-1">
            <Image
              src={"/samples/brands-we-love/1.jpg"}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
            <div className="flex flex-col space-y-1 mt-2">
              <p className="font-bold">MOTHER</p>
              <p>From cult-favorite denim to inspired collections, MOTHER's '70s vibe is always witty and irreverent.</p>
              <div className="flex space-x-3">
                <p>Discover MOTHER</p>
                <p>Shop All</p>
              </div>
            </div>
          </div>
          <div className="p-1">
            <Image
              src={"/samples/brands-we-love/2.jpg"}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
            <div className="flex flex-col space-y-1 mt-2">
              <p className="font-bold">Nuna</p>
              <p>With thoughtful design in every detail, Nuna is designed around your life.</p>
              <div className="flex space-x-3">
                <p>Discover Nuna</p>
                <p>Shop All</p>
              </div>
            </div>
          </div>
          <div className="p-1">
            <Image
              src={"/samples/brands-we-love/3.jpg"}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
            <div className="flex flex-col space-y-1 mt-2">
              <p className="font-bold">Tory Burch</p>
              <p>A season of glamorous escape and fashion to make you dream.</p>
              <div className="flex space-x-3">
                <p>Discover Tory Burch</p>
                <p>Shop All</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}