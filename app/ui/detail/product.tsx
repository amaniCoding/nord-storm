'use client'
import SliderSeederLarge from "@/app/components/slider-seeder-large";
import YouMayAlsoLike from "@/app/components/you-may-like/you-may-like";
import { EnvelopeIcon, GifIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/16/solid";
import { GiftIcon, HomeIcon, PrinterIcon, SignalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { PiSignature } from "react-icons/pi";
import StarRatings from "react-star-ratings";

export default function Product() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto py-1 px-3">
        <div className="grid grid-cols-12 gap-4 pb-4">
          <div className="md:col-span-6 col-span-12">
            <div className="grid md:grid-cols-2 grid-cols-2">
              <div className="p-1">
                <Image
                  src={"/samples/sale-pics-for-you/1.jpg"}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-1">
                <Image
                  src={"/samples/sale-pics-for-you/2.jpg"}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-1">
                <Image
                  src={"/samples/sale-pics-for-you/3.jpg"}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-1">
                <Image
                  src={"/samples/sale-pics-for-you/4.jpg"}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-1">
                <Image
                  src={"/samples/sale-pics-for-you/5.jpg"}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-1">
                <Image
                  src={"/samples/sale-pics-for-you/6.jpg"}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-1">
                <Image
                  src={"/samples/sale-pics-for-you/7.jpg"}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-1">
                <Image
                  src={"/samples/sale-pics-for-you/8.jpg"}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-1">
                <Image
                  src={"/samples/sale-pics-for-you/9.jpg"}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-1">
                <Image
                  src={"/samples/sale-pics-for-you/10.jpg"}
                  alt="something is happening"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            <div className="p-1 md:flex hidden flex-col space-y-3  sticky top-0">
              <div className="flex items-center">
                <p>Star rating</p>
                <p>75</p>
                <p>drop down</p>
              </div>
              <div className="flex flex-col spa-y-1">
                <p>$76.50Current Price $76.50
                  (70% off)</p>
                <p>$255.00Previous Price $255.00</p>
              </div>
              <p>Color: Vintage Cream</p>
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-lg p-1 border-2 border-black">
                  <Image
                    src={"/samples/sale-pics-for-you/2.jpg"}
                    alt="something is happening"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-14 h-14 rounded-lg p-1 border-2 border-black">
                  <Image
                    src={"/samples/sale-pics-for-you/4.jpg"}
                    alt="something is happening"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-14 h-14 rounded-lg p-1 border-2 border-black">
                  <Image
                    src={"/samples/sale-pics-for-you/6.jpg"}
                    alt="something is happening"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="p-1">Customers say the fit runs slightly small.
              </p>
              <div className="p-1">
                <select className="border border-gray-800 p-4 w-full">
                  <option value="">X-Small</option>
                </select>
              </div>
              <p className="p-1">61 people are viewing</p>
              <div className="flex space-x-3">
                <HomeIcon className="w-10 h-10 stroke-black" />
                <div className="flex flex-col space-y-2">
                  <p>Free returns anytime</p>
                  <p>Sold by Nordstrom</p>
                </div>
              </div>
              <button className="w-full py-3 bg-cyan-800 rounded-md text-white flex items-center justify-center space-x-3">
                <ShoppingBagIcon className="w-6 h-7 stroke-white" />
                <span>Add to Bag</span>
              </button>
              <button className="w-full py-3 bg-cyan-800 rounded-md text-white flex items-center justify-center space-x-3">
                <HeartIcon className="w-6 h-6 stroke-white" />
                <span>Add To Wish List</span>
              </button>
              <p className="p-1">Details & care</p>
              <p className="p-1">A bold cutout is softened by an elegant cowl neck on a satin minidress cut on the bias and fitted with the corsetry boning for a cinched waist.</p>
              <ul className="list-disc pl-8 leading-relaxed">
                <li>Exclusive retailer</li>
                <li>32" length (size Small)</li>
                <li>Hidden back-zip closure</li>
                <li>Cowl neck</li>
                <li>Long sleeves</li>
                <li>Lined</li>
                <li>100% polyester</li>
                <li>Dry clean</li>
                <li>Imported</li>
                <li>Item #7152383</li>
              </ul>
              <div className="p-1">
                <p className="font-bold text-xl">Size Info</p>
                <ul className="list-disc pl-8 leading-relaxed">
                  <li>Runs small; order one size up</li>
                  <li>XS=2-4, S=4-6, M=6-8, L=8-10, XL (L+)=10-12.</li>
                  <li>Get the fit you want. Book an appointment with our onsite experts or stop by your nearest store.</li>
                  <li>Learn more about alterations.</li>
                </ul>
              </div>
              <div className="p-1">
                <p className="font-bold text-xl">
                  Shipping & returns
                </p>
                <p className="mt-3">
                  Free shipping. Free returns. All the time. Purchases made online can also be returned or exchanged at any Nordstrom store, free of charge. Read more about our shipping & returns policies.
                </p>
              </div>
              <div className="p-1 flex-col space-y-4">
                <p className="font-bold text-xl">
                  Gift Options
                </p>
                <p className="mt-3">Choose your gift options at Checkout. Some items may not be eligible for all gift options</p>
                <p>Free Pickup</p>
                <div className="p-1">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-3">
                      <PrinterIcon className="w-6 h-6 stroke-black" />
                      <span>Printed gift message (free)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GiftIcon className="w-6 h-6 stroke-black" />
                      <span>Nordstrom gift box (free)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GiftIcon className="w-6 h-6 stroke-black" />
                      <span>Fabric gift bag ($5)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <PiSignature className="w-6 h-6 stroke-black" />
                      <span>Signature gift wrap ($5)</span>
                    </div>
                  </div>
                </div>
                <div className="p-1 flex-col space-y-4">
                  <p>Delivery</p>
                  <div className="flex items-center space-x-3">
                    <EnvelopeIcon className="w-6 h-6 stroke-black" />
                    <span>Email gift message (free)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PrinterIcon className="w-6 h-6 stroke-black" />
                    <span>Printed gift message (free)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GiftIcon className="w-6 h-6 stroke-black" />
                    <span>Fabric gift bag ($5)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GifIcon className="w-6 h-6 stroke-black" />
                    <span>DIY Nordstrom gift box ($5)</span>
                  </div>
                  <p>Need help finding the perfect gift? We've got you covered.
                  </p>
                  <button className="block p-2 border-2 border-black rounded-md hover:scale-105 transition duration-200 ease-in-out w-60">Shop Gifts</button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 md:hidden gap-2">
              <div className="col-span-7">
                <div className="p-1 flex flex-col space-y-3">
                  <div className="flex items-center">
                    <p>Star rating</p>
                    <p>75</p>
                    <p>drop down</p>
                  </div>
                  <div className="flex flex-col spa-y-1">
                    <p>$76.50Current Price $76.50
                      (70% off)</p>
                    <p>$255.00Previous Price $255.00</p>
                  </div>
                  <p>Color: Vintage Cream</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 rounded-lg p-1 border-2 border-black">
                      <Image
                        src={"/samples/sale-pics-for-you/2.jpg"}
                        alt="something is happening"
                        width={0}
                        height={0}
                        sizes="100vh"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-14 h-14 rounded-lg p-1 border-2 border-black">
                      <Image
                        src={"/samples/sale-pics-for-you/4.jpg"}
                        alt="something is happening"
                        width={0}
                        height={0}
                        sizes="100vh"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-14 h-14 rounded-lg p-1 border-2 border-black">
                      <Image
                        src={"/samples/sale-pics-for-you/6.jpg"}
                        alt="something is happening"
                        width={0}
                        height={0}
                        sizes="100vh"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <p className="p-1">Customers say the fit runs slightly small.
                  </p>
                  <div className="p-1">
                    <select className="border border-gray-800 p-4 w-full">
                      <option value="">X-Small</option>
                    </select>
                  </div>
                  <p className="p-1">61 people are viewing</p>
                  <div className="flex space-x-3">
                    <HomeIcon className="w-10 h-10 stroke-black" />
                    <div className="flex flex-col space-y-2">
                      <p>Free returns anytime</p>
                      <p>Sold by Nordstrom</p>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-cyan-800 rounded-md text-white flex items-center justify-center space-x-3">
                    <ShoppingBagIcon className="w-6 h-7 stroke-white" />
                    <span>Add to Bag</span>
                  </button>
                  <button className="w-full py-2 bg-cyan-800 rounded-md text-white flex items-center justify-center space-x-3">
                    <HeartIcon className="w-6 h-6 stroke-white" />
                    <span>Add To Wish List</span>
                  </button>
                  <p className="md:p-1">Details & care</p>
                  <p className="md:p-1">A bold cutout is softened by an elegant cowl neck on a satin minidress cut on the bias and fitted with the corsetry boning for a cinched waist.</p>
                  <ul className="list-disc md:pl-16 pl-2 leading-relaxed">
                    <li>Exclusive retailer</li>
                    <li>32" length (size Small)</li>
                    <li>Hidden back-zip closure</li>
                    <li>Cowl neck</li>
                    <li>Long sleeves</li>
                    <li>Lined</li>
                    <li>100% polyester</li>
                    <li>Dry clean</li>
                    <li>Imported</li>
                    <li>Item #7152383</li>
                  </ul>
                  <div className="p-1">
                    <p className="font-bold text-xl">Size Info</p>
                    <ul className="list-disc md:pl-16 pl-2 leading-relaxed">
                      <li>Runs small; order one size up</li>
                      <li>XS=2-4, S=4-6, M=6-8, L=8-10, XL (L+)=10-12.</li>
                      <li>Get the fit you want. Book an appointment with our onsite experts or stop by your nearest store.</li>
                      <li>Learn more about alterations.</li>
                    </ul>
                  </div>
                  <div className="p-1">
                    <p className="font-bold text-xl">
                      Shipping & returns
                    </p>
                    <p className="mt-3">
                      Free shipping. Free returns. All the time. Purchases made online can also be returned or exchanged at any Nordstrom store, free of charge. Read more about our shipping & returns policies.
                    </p>
                  </div>
                  <div className="p-1 flex-col space-y-4">
                    <p className="font-bold text-xl">
                      Gift Options
                    </p>
                    <p className="mt-3">Choose your gift options at Checkout. Some items may not be eligible for all gift options</p>
                    <p>Free Pickup</p>
                    <div className="p-1">
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-3">
                          <PrinterIcon className="w-6 h-6 stroke-black" />
                          <span>Printed gift message (free)</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <GiftIcon className="w-6 h-6 stroke-black" />
                          <span>Nordstrom gift box (free)</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <GiftIcon className="w-6 h-6 stroke-black" />
                          <span>Fabric gift bag ($5)</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <SignalIcon className="w-6 h-6 stroke-black" />
                          <span>Signature gift wrap ($5)</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-1 flex-col space-y-4">
                      <p>Delivery</p>
                      <div className="flex items-center space-x-3">
                        <EnvelopeIcon className="w-6 h-6 stroke-black" />
                        <span>Email gift message (free)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <PrinterIcon className="w-6 h-6 stroke-black" />
                        <span>Printed gift message (free)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <GiftIcon className="w-6 h-6 stroke-black" />
                        <span>Fabric gift bag ($5)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <GifIcon className="w-6 h-6 stroke-black" />
                        <span>DIY Nordstrom gift box ($5)</span>
                      </div>
                      <p>Need help finding the perfect gift? We've got you covered.
                      </p>
                      <button className="block md:p-3 p-1 border-2 border-black rounded-md hover:scale-105 transition duration-200 ease-in-out md:w-60">Shop Gifts</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-5">
                <div>
                <p className="my-2 text-center font-bold">You may also like</p>
                <YouMayAlsoLike/>
                </div>
              </div>
            </div>
          </div>
          {/** You might also like for large screen */}
          <div className="md:col-span-2 md:block hidden col-span-12 sticky top-0">
            <div className="sticky top-2">
              <p className="my-2 text-center font-bold">You may also like</p>
              <YouMayAlsoLike/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}