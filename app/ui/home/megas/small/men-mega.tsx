'use client'
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
export default function SmallMenMega(props: { onClose: Dispatch<SetStateAction<boolean>>, isSmallMegaShown: boolean, smallMegaToShow: string | null }) {
  //react/no-unescaped-entities
  return (
    <div className={`block md:hidden h-screen transition duration-200 ease-in-out bg-white fixed z-20 top-0 left-0 overflow-y-scroll socrollabar scroll_content pt-5 pl-5 ${props.isSmallMegaShown && props.smallMegaToShow === 'men' ? 'translate-x-0' : '-translate-x-full'}`}>
      <ArrowLeftIcon className="w-9 h-9 absolute top-2 right-4 p-1 cursor-pointer hover:bg-gray-200 rounded-full" onClick={() => { props.onClose(false) }} />
      <span className="block p-2">Men: Get Inspired</span>
      <span className="block p-2">New Arrivals</span>
      <span className="block p-2">Men's Sale</span>
      <span className="block p-2">Under $100</span>
      <span className="block p-2">Bestsellers</span>
      <span className="block p-2">Cold-Weather Shop</span>
      <span className="block p-2">Men's 2024 Fashion Favorites</span>
      <span className="block p-2">Wardrobe Essentials</span>
      <span className="block p-2">Ski Shop</span>
      <span className="block p-2">Women's UGG Shop</span>
      <span className="block p-2">Nordstrom Made</span>
      <span className="block p-2">Gifts for Her</span>
      <span className="block p-2">Beauty Gifts</span>
      <span className="block p-2">Cozy Gifts</span>
      <span className="block p-2">Stocking Stuffers</span>
      <span className="block p-2">Gifts Under $100</span>
      <span className="block p-2">Clothing</span>
      <span className="block p-2">Activewear</span>
      <span className="block p-2">Blazers & Sport Coats</span>
      <span className="block p-2">Coats & Jackets</span>
      <span className="block p-2">Dress Shirts</span>
      <span className="block p-2">Jeans</span>
      <span className="block p-2">Lounge, Pajamas & Robes</span>
      <span className="block p-2">Pants</span>
      <span className="block p-2">Polo Shirts</span>
      <span className="block p-2">Shirts</span>
      <span className="block p-2">Shorts</span>
      <span className="block p-2">Suits & Separates</span>
      <span className="block p-2">Sweaters</span>
      <span className="block p-2">Sweatshirts & Hoodies</span>
      <span className="block p-2">Swimwear</span>
      <span className="block p-2">T-Shirts</span>
      <span className="block p-2">Underwear, Undershirts & Socks</span>
      Shoes
      <span className="block p-2">Athletic</span>
      <span className="block p-2">Boots</span>
      <span className="block p-2">Comfort</span>
      <span className="block p-2">Dress Shoes</span>
      <span className="block p-2">Loafers & Slip-Ons</span>
      <span className="block p-2">Oxfords & Derbys</span>
      <span className="block p-2">Sandals & Flip-Flops</span>
      <span className="block p-2">Sneakers</span>
      <span className="block p-2">Slippers</span>
      <span className="block p-2">Bags</span>
      <span className="block p-2">Belts</span>
      <span className="block p-2">Hats</span>
      <span className="block p-2">Jewelry</span>
      <span className="block p-2">Sunglasses & Eyewear</span>
      <span className="block p-2">Ties & Pocket Squares</span>
      <span className="block p-2">Wallets & Card Cases</span>
      <span className="block p-2">Watches</span>
      <span className="block p-2"> Big & Tall</span>
      <span className="block p-2">Designer</span>
      <span className="block p-2">Grooming & Cologne</span>
      <span className="block p-2">Advanced Modern</span>
      <span className="block p-2">Shop by Occasion</span>
      <span className="block p-2">Holiday Outfits</span>
      <span className="block p-2">Work</span>
      <span className="block p-2">Wedding Guest & Cocktail</span>
      <span className="block p-2">Vacation & Resort</span>
      <span className="block p-2">Young Adult</span>
      <Image
        src={`/samples/men.jpg`}
        alt="something is happening"
        width={0}
        height={0}
        sizes="100vh"
        className="w-full h-full object-contain"
      />
      <span className="block p-2">Men's Sale</span>
    </div>
  )
}