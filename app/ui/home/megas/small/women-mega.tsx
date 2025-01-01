'use client'
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
export default function SmallWomenMega(props: { onClose: Dispatch<SetStateAction<boolean>>, isSmallMegaShown: boolean, smallMegaToShow: string | null }) {
  return (
    //react/no-unescaped-entities
      <div className={`md:hidden block h-screen transition duration-200 ease-in-out bg-white fixed z-20 top-0 left-0 overflow-y-scroll socrollabar scroll_content pt-5 pl-5 ${props.isSmallMegaShown && props.smallMegaToShow === 'women' ? 'translate-x-0' : '-translate-x-full'}`}>
        <ArrowLeftIcon className="w-9 h-9 absolute top-2 right-4 p-1 cursor-pointer hover:bg-gray-200 rounded-full" onClick={() => { props.onClose(false) }} />
        <span className="block p-2">Women: Get Inspired</span>
        <span className="block p-2">New Arrivals</span>
        <span className="block p-2">Women's Sale</span>
        <span className="block p-2">Under $100</span>
        <span className="block p-2">Women's 2024 Fashion Favorites</span>
        <span className="block p-2">On Trend: Winter Boho</span>
        <span className="block p-2">Cold-Weather Shop</span>
        <span className="block p-2">Ski Shop</span>
        <span className="block p-2">Women's UGG Shop</span>
        <span className="block p-2">Nordstrom Made</span>
        <span className="block p-2">Gifts for Her</span>
        <span className="block p-2">Beauty Gifts</span>
        <span className="block p-2">Cozy Gifts</span>
        <span className="block p-2">Stocking Stuffers</span>
        <span className="block p-2">Gifts Under $100</span>
        <span className="font-bold">Clothing</span>
        <Link className="block p-2" href={`/browse/women/clothing/activewear`}>Activewear</Link>
        <Link className="block p-2" href={`/browse/women/clothing/coats-jackets`}>Coats & Jackets</Link>
        <Link className="block p-2" href={`/browse/women/clothing/dress`}>Dresses</Link>
        <Link className="block p-2" href={`/browse/women/clothing/jeans`}>Jeans & Denim</Link>
        <Link className="block p-2" href={`/browse/women/clothing/jumpsuits-rompers`}>Jumpsuits & Rompers</Link>
        <Link className="block p-2" href={`/browse/women/clothing/lingerie`}>Lingerie, Hosiery & Shapewear</Link>
        <Link className="block p-2" href={`/browse/women/clothing/loungewear`}>Loungewear</Link>
        <Link className="block p-2" href={`/browse/women/clothing/pants-leggings`}>Pants & Leggings</Link>
        <Link className="block p-2" href={`/browse/women/clothing/shorts`}>Shorts</Link>
        <Link className="block p-2" href={`/browse/women/clothing/skirts`}>Skirts</Link>
        <Link className="block p-2" href={`/browse/women/clothing/sleepwear`}>Sleepwear</Link>
        <Link className="block p-2" href={`/browse/women/clothing/suits-separates`}>Suits & Separates</Link>
        <Link className="block p-2" href={`/browse/women/clothing/weaters`}>Sweaters</Link>
        <Link className="block p-2" href={`/browse/women/clothing/sweatshirts-hoodies`}>Sweatshirts & Hoodies</Link>
        <Link className="block p-2" href={`/browse/women/clothing/swimsuits`}>Swimsuits & Cover-Ups</Link>
        <Link className="block p-2" href={`/browse/women/clothing/tops`}>Tops</Link>
        <Link className="block p-2" href={`/browse/women/clothing/plus-size`}>Plus-Size Clothing</Link>
        <span className="block p-2">Dresses</span>
        <span className="block p-2">Bridesmaid</span>
        <span className="block p-2">Cocktail & Party</span>
        <span className="block p-2">Daytime Events</span>
        <span className="block p-2">Formal</span>
        <span className="block p-2">Holiday</span>
        <span className="block p-2">Mother of the Bride or Groom</span>
        <span className="block p-2">Sweater</span>
        <span className="block p-2">Wedding Guest</span>
        <span className="block p-2">Shoes</span>
        <span className="block p-2">Boots</span>
        <span className="block p-2">Clogs</span>
        <span className="block p-2">Comfort</span>
        <span className="block p-2">Flats</span>
        <span className="block p-2">Heels</span>
        <span className="block p-2">Sandals</span>
        <span className="block p-2">Slippers</span>
        <span className="block p-2">Sneakers</span>
        <span className="block p-2">Handbags</span>
        <span className="block p-2">Accessories</span>
        <span className="block p-2">Jewelry</span>
        <span className="block p-2">Beauty</span>
        <span className="block p-2">Makeup</span>
        <span className="block p-2">Skin Care</span>
        <span className="block p-2">Fragrance</span>
        <span className="block p-2">Hair Care</span>
        <span className="block p-2">Designer</span>
        <span className="block p-2">Shop by Occasion</span>
        <span className="block p-2">Holiday Outfits</span>
        <span className="block p-2">Vacation & Resort</span>
        <span className="block p-2">Work</span>
        <span className="block p-2">Wedding Shop</span>
        <span className="block p-2">Wedding Guest</span>
        <span className="block p-2">Contemporary</span>
        <span className="block p-2">Maternity</span>
        <span className="block p-2">Young Adult</span>
        <Image
          src={`/women/wo-1.jpg`}
          alt="something is happening"
          width={0}
          height={0}
          sizes="100vh"
          className="w-full h-auto object-contain"
        />
        <span className="block p-2">Women's Sale</span>
      </div>

  )
}