'use client'
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";
export default function WomenMega(props: { onClose: Dispatch<SetStateAction<boolean>> }) {
  //react/no-unescaped-entities
  useEffect(() => {
    window.onscroll = () => {
      if(window.scrollY > 800) {
        props.onClose(false);
      }
    }
  },[props])
  return (
    <section>
      <div className="my-1 pt-9 px-5 pb-5 relative md:block hidden">
        <XMarkIcon className="w-8 h-8 absolute top-1 right-4 p-1 cursor-pointer" onClick={() => { props.onClose(false) }} />
        <div className="grid md:grid-cols-6 grid-cols-1 gap-4">
          <div className="p-1">
            <div className="flex flex-col space-y-2">
              <span>Women: Get Inspired</span>
              <span>New Arrivals</span>
              <span>Women's Sale</span>
              <span>Under $100</span>
              <span>Women's 2024 Fashion Favorites</span>
              <span>On Trend: Winter Boho</span>
              <span>Cold-Weather Shop</span>
              <span>Ski Shop</span>
              <span>Women's UGG Shop</span>
              <span>Nordstrom Made</span>
              <span>Gifts for Her</span>
              <span>Beauty Gifts</span>
              <span>Cozy Gifts</span>
              <span>Stocking Stuffers</span>
              <span>Gifts Under $100</span>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-2">
              <span className="font-bold">Clothing</span>
              <Link href={"/browse/women/clothing/activewear"}>Activewear</Link>
              <Link href={"/browse/women/clothing/coats-jackets"}>Coats & Jackets</Link>
              <Link href={"/browse/women/clothing/dress"} onClick={() => {props.onClose(false)}}>Dresses</Link>
              <Link href={"/browse/women/clothing/jeans"}>Jeans & Denim</Link>
              <Link href={"/browse/women/clothing/jumpsuits-rompers"}>Jumpsuits & Rompers</Link>
              <Link href={"/browse/women/clothing/lingerie"}>Lingerie, Hosiery & Shapewear</Link>
              <Link href={"/browse/women/clothing/loungewear"}>Loungewear</Link>
              <Link href={"/browse/women/clothing/pants-leggings"}>Pants & Leggings</Link>
              <Link href={"/browse/women/clothing/shorts"}>Shorts</Link>
              <Link href={"/browse/women/clothing/skirts"}>Skirts</Link>
              <Link href={"/browse/women/clothing/sleepwear"}>Sleepwear</Link>
              <Link href={"/browse/women/clothing/suits-separates"}>Suits & Separates</Link>
              <Link href={"/browse/women/clothing/weaters"}>Sweaters</Link>
              <Link href={"/browse/women/clothing/sweatshirts-hoodies"}>Sweatshirts & Hoodies</Link>
              <Link href={"/browse/women/clothing/swimsuits"}>Swimsuits & Cover-Ups</Link>
              <Link href={"/browse/women/clothing/tops"}>Tops</Link>
              <Link href={"/browse/women/clothing/plus-size"}>Plus-Size Clothing</Link>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-2">
              <span>Dresses</span>
              <span>Bridesmaid</span>
              <span>Cocktail & Party</span>
              <span>Daytime Events</span>
              <span>Formal</span>
              <span>Holiday</span>
              <span>Mother of the Bride or Groom</span>
              <span>Sweater</span>
              <span>Wedding Guest</span>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-2">
              <span>Shoes</span>
              <span>Boots</span>
              <span>Clogs</span>
              <span>Comfort</span>
              <span>Flats</span>
              <span>Heels</span>
              <span>Sandals</span>
              <span>Slippers</span>
              <span>Sneakers</span>
              <span>Handbags</span>
              <span>Accessories</span>
              <span>Jewelry</span>
              <span>Beauty</span>
              <span>Makeup</span>
              <span>Skin Care</span>
              <span>Fragrance</span>
              <span>Hair Care</span>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-2">
              <span>Designer</span>
              <span>Shop by Occasion</span>
              <span>Holiday Outfits</span>
              <span>Vacation & Resort</span>
              <span>Work</span>
              <span>Wedding Shop</span>
              <span>Wedding Guest</span>
              <span>Contemporary</span>
              <span>Maternity</span>
              <span>Young Adult</span>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-2">
              <Image
                src={"/samples/women/wo-1.jpg"}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <span>Women's Sale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}