'use client'
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";
export default function MenMega(props: {onClose: Dispatch<SetStateAction<boolean>>}) {
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
        <div className="grid md:grid-cols-6 grid-cols-1 gap-4">
        <XMarkIcon className="w-8 h-8 absolute top-1 right-4 p-1 cursor-pointer" onClick={() => {props.onClose(false)}}/>
          <div className="p-1">
            <div className="flex flex-col space-y-2">
              <span>Men: Get Inspired</span>
              <span>New Arrivals</span>
              <span>Men's Sale</span>
              <span>Under $100</span>
              <span>Bestsellers</span>
              <span>Cold-Weather Shop</span>
              <span>Men's 2024 Fashion Favorites</span>
              <span>Wardrobe Essentials</span>
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
              <span>Clothing</span>
              <span>Activewear</span>
              <span>Blazers & Sport Coats</span>
              <span>Coats & Jackets</span>
              <span>Dress Shirts</span>
              <span>Jeans</span>
              <span>Lounge, Pajamas & Robes</span>
              <span>Pants</span>
              <span>Polo Shirts</span>
              <span>Shirts</span>
              <span>Shorts</span>
              <span>Suits & Separates</span>
              <span>Sweaters</span>
              <span>Sweatshirts & Hoodies</span>
              <span>Swimwear</span>
              <span>T-Shirts</span>
              <span>Underwear, Undershirts & Socks</span>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-2">
              Shoes
              <span>Athletic</span>
              <span>Boots</span>
              <span>Comfort</span>
              <span>Dress Shoes</span>
              <span>Loafers & Slip-Ons</span>
              <span>Oxfords & Derbys</span>
              <span>Sandals & Flip-Flops</span>
              <span>Sneakers</span>
              <span>Slippers</span>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-2">
              <span>Bags</span>
              <span>Belts</span>
              <span>Hats</span>
              <span>Jewelry</span>
              <span>Sunglasses & Eyewear</span>
              <span>Ties & Pocket Squares</span>
              <span>Wallets & Card Cases</span>
              <span>Watches</span>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-2">
              <span> Big & Tall</span>
              <span>Designer</span>
              <span>Grooming & Cologne</span>
              <span>Advanced Modern</span>
              <span>Shop by Occasion</span>
              <span>Holiday Outfits</span>
              <span>Work</span>
              <span>Wedding Guest & Cocktail</span>
              <span>Vacation & Resort</span>
              <span>Young Adult</span>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-2">
              <Image
                src={"/samples/men/m-1.jpg"}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full object-contain"
              />
              <span>Men's Sale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}