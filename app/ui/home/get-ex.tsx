'use client'
import Image from "next/image";
export default function GetEx() {
  //react/no-unescaped-entities
  return (
    <section className="p-3">
      <div className="max-w-screen-xl mx-auto">
        <p className="my-3 font-semibold text-center">Get Excited</p>
        <p className="mb-2 text-center">
          Discover the latest stories from The Thread, plus more we're loving in fashion, beauty and lifestyle.
        </p>
        <p className="mb-2 text-center">
          Explore The Thread
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
          <div className="p-1">
            <Image
              src={"/samples/get-excited/1.jpg"}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
            <div className="flex flex-col space-y-1 mt-3">
              <p className="font-bold">Honoring Hanukkah: Sophie Cohen's Take on Family & Tradition</p>
              <div className="flex space-x-3">
                <p className="text-sm">Her approach to keeping the holidays vibrant and cherishing what makes them special.</p>

              </div>
              <p>Read the Story</p>
            </div>
          </div>
          <div className="p-1">
            <Image
              src={"/samples/get-excited/2.jpg"}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
            <div className="flex flex-col space-y-1 mt-3">
              <p className="font-bold">The Most Wished-For Gifts</p>
              <div className="flex space-x-3">
                <p className="text-sm">Irresistibly cozy favorites for the whole family—and the home.</p>
              </div>
              <p>Read the Story</p>
            </div>
          </div>
          <div className="p-1">
            <Image
              src={"/samples/get-excited/3.jpg"}
              alt="something is happening"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-auto object-contain"
            />
            <div className="flex flex-col space-y-1 mt-3">
              <p className="font-bold">'Tis the Season to Get Dressed Up</p>
              <div className="flex space-x-3">
                <p className="text-sm">Shop Women's Holiday Outfits Shop Men's Holiday Outfits</p>
              </div>
              <p>Read the Story</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}