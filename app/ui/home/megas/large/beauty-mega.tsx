'use client'
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";
export default function BeautyMega(props: {onClose: Dispatch<SetStateAction<boolean>>}) {
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
              <span>Beauty: Get Inspired</span>
              <span>New Arrivals</span>
              <span>Beauty Sale</span>
              <span>Gifts with Purchase</span>
              <span>Bestsellers</span>
              <span>Designer Beauty</span>
              <span>Natural Beauty</span>
              <span>Nordstrom Exclusives</span>
              <span>Travel & Mini Sizes</span>
              <span>Wellness</span>
              <span>Young Adult Beauty</span>
              <span>Beauty Release Calendar</span>
              <span>Beauty Services, Experts & Videos</span>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-2">
              <span>Fragrance</span>
              <span>Cologne</span>
              <span>Designer Fragrance</span>
              <span>Perfume</span>
              <span>Rollerball & Travel Size</span>
              <span>Body Mist & Hair Mist</span>
              <span>Candles & Diffusers</span>
              <span>Gifts & Sets</span>
              <span>Fragrance Gifts & Sets</span>
              <span>Hair Care Gifts & Sets</span>
              <span>Makeup Gifts & Sets</span>
              <span>Skin Care Gifts & Sets</span>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-2">
              <span>Beauty Brands</span>
              <span>Bobbi Brown</span>
              <span>CHANEL</span>
              <span>Charlotte Tilbury</span>
              <span>Clinique</span>
              <span>DIOR</span>
              <span>Estée Lauder</span>
              <span>Jo Malone London</span>
              <span>La Mer</span>
              <span>La Prairie</span>
              <span>Lancôme</span>
              <span>Le Labo</span>
              <span>MAC Cosmetics</span>
              <span>Maison Francis Kurkdjian</span>
              <span>PAT McGRATH LABS</span>
              <span>Prada</span>
              <span>TOM FORD</span>
              <span>Trish McEvoy</span>
              <span>Westman Atelier</span>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-2">
             <span>Makeup</span>
             <span>Blush</span>
             <span>Bronzer</span>
             <span>Brushes & Tools</span>
             <span>Concealer</span>
             <span>Eyebrows</span>
             <span>Eyeliner</span>
             <span>Eyeshadow</span>
             <span>Foundation</span>
             <span>Highlighter</span>
             <span>Lipstick, Lip Gloss & Liner</span>
             <span>Mascara</span>
             <span>Nail Polish & Care</span>
             <span>Palettes</span>
             <span>Powder & Setting Spray</span>
             <span>Primer</span>
             <span>Tools, Brushes & Makeup Bags</span>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-2">
              <span>Skin Care</span>
              <span>Cleansers</span>
              <span>Exfoliators & Peels</span>
              <span>Eye Creams & Treatments</span>
              <span>Facial Masks</span>
              <span>Face Mists & Essences</span>
              <span>Face Moisturizers</span>
              <span>Lip Balms & Treatments</span>
              <span>Serums & Treatments</span>
              <span>Self Tanners</span>
              <span>Sunscreen</span>
              <span>Toners</span>
              <span>Tools & Devices</span>
              <span>Hair Care</span>
              <span>Bath & Body</span>
              <span>Men's Grooming</span>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-2">
              <Image
                src={"/samples/beauty/b-1.jpg"}
                alt="something is happening"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-auto object-contain"
              />
              <span>Men's Sale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}