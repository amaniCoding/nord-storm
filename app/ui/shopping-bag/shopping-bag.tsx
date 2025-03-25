'use client'
import Image from "next/image";
import { TruckIcon } from "@heroicons/react/16/solid"
import { FaRegCircleDot } from "react-icons/fa6";
import { ArchiveBoxIcon, GiftIcon, KeyIcon } from "@heroicons/react/24/outline"
import { MdNotInterested } from "react-icons/md";
import SliderSeederLarge from "@/app/components/slider-seeder-large";
import RecentlyViewed from "../home/recently-viewed";

export default function ShoppingBag() {
  return (
    <>
      <section className="bg-gray-100 pb-6">
        <div className="max-w-screen-xl mx-auto py-1 px-3">
          <div className="grid grid-cols-12 gap-3">
            <div className="md:col-span-8 col-span-12">
              <div className="mt-4 p-6 bg-white">
                <div className="flex flex-col space-y-2 ">
                  <p className="text-xl font-bold">Guest Shopping Bag (1)</p>
                  <div className="flex space-x-2 items-center">
                    <span>Items in your bag are not on hold.</span>
                    <span className="flex space-x-2">
                      <GiftIcon className="w-6 h-6 stroke-black" />
                      <span>Choose gift options when you check out.</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-4 bg-white p-6">
                <p>Sign in to check out faster and track your order easily.</p>
              </div>
              <div className="mt-4 p-6 bg-white">
                <div className="flex items-center space-x-3 border-b-2 border-b-gray-300 pb-3">
                  <TruckIcon className="w-8 h-8 stroke-black" />
                  <div className="flex flex-col space-y-2">
                    <span className="text-xl font-bold">Shipping (1 item) to Ethiopia</span>
                    <span>International shipping</span>
                  </div>
                </div>
                <div className="grid grid-cols-12">

                  <div className="md:col-span-3 col-span-12">
                    <div className="p-1">
                      <Image
                        src={`/samples/sale-pics-for-you/4.jpg`}
                        alt="something is happening"
                        width={0}
                        height={0}
                        sizes="100vh"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-3 col-span-12">
                    <div className="p-1">

                      <div className="mb-2">
                        <p>Dress the Population</p>
                        <p>Alicia Mixed Media Midi Dress</p>
                      </div>
                      <div className="mb-2">
                        <p>Size: Medium</p>
                        <p>Color: ELECTRIC BLUE</p>
                        <p>Item: 5413220</p>
                      </div>
                      <div className="mb-2">
                        <select className="p-2 w-full focus:border border-gray-800">
                          <option value="">Qty 1</option>
                        </select>
                      </div>
                      <div className="flex items-center space-x-3 ">
                        <ArchiveBoxIcon className="w-7 h-7 stroke-black" />
                        <div>
                          <p className="text-sm md:text-nowrap font-bold">Free returns anytime</p>
                          <p className="text-sm md:text-nowrap">Sold by Nordstrom</p>
                        </div>
                      </div>
                      <div className="mb-2">
                        <p>Remove</p>
                        <p>Save for later</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5 col-span-12">
                    <div className="p-1">

                      <div className="flex space-x-2">
                        <MdNotInterested className="w-7 h-7" />
                        <span className="w-full">Not available for pickup</span>
                      </div>
                    </div>
                    <div className="p-1">
                      <div className="flex space-x-2">
                        <FaRegCircleDot className="w-7 h-7" />
                        <span className="w-full">
                          International orders usually arrive within 5–13 business days. We'll give you shipping dates in checkout.</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-1 col-span-12">
                    <div className="p-1">
                      <p>$198.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-white p-6">
                <p className="py-3 text-xl font-bold border-b-2 border-b-gray-500">
                  Saved for later (0 items)
                </p>
                <p className="py-3">Have an account? Sign in to view any items you’ve saved.</p>
                <button className="py-2 px-3 inline-block border-2 border-gray-600 w-80 cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out ">Sign In</button>
              </div>
              <div className="mt-4 p-6 bg-white">
                <p className="text-xl font-bold">
                  More from Dress the Population
                </p>
                <SliderSeederLarge numberOfSlides={4} />
              </div>
            </div>
            <div className="md:col-span-4 col-span-12">
              <div className="sticky top-3">
                <div className="bg-white p-6 mt-4">
                  <p className="text-xl font-bold">Order summary</p>
                  <div className="flex space-x-3 bg-blue-200 p-2 rounded-md">
                    <KeyIcon className="w-8 h-8 stroke-black" />
                    <div className="w-full">
                      <span className="font-bold text-sm mb-2">You'll check out through ESW</span>
                      <span className="text-sm">Selecting <span className="font-bold">Check Out</span> will take you to ESW checkout, where our international shipping partner will process your payment and fulfill your order.</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3 mb-3">
                    <span>Subtotal</span>
                    <span>
                      $198.00</span>
                  </div>
                  <button className="p-3 text-center block w-full bg-black text-white mb-3">Check Out</button>
                  <p className="text-center">Shipping to Ethiopia Change</p>
                </div>
                <div className="bg-white mt-4 p-6">
                  <p className="text-xl font-bold mb-3">
                    People Also Viewed
                  </p>
                  <SliderSeederLarge numberOfSlides={2} />
                </div>
                <div className="bg-white mt-5 p-5">
                  <p>Nordy Club members earn 3X the points on beauty! See restrictions.</p>
                </div>
                <div className="p-5">
                  <p className="text-sm">Have a question? Call 1.888.282.6060 or chat with us</p>
                  <p className="text-sm">Accepted payment methods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RecentlyViewed />
    </>
  )
}