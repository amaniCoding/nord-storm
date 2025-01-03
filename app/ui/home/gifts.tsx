'use client'
import SliderSeederLarge from "@/app/components/slider-seeder-large"
import SliderSeederMobile from "@/app/components/slider-seeder-mobile"
export default function Gifts() {
  return (
    <section className="">
      <div className="max-w-screen-lg mx-auto py-1 px-3">
        <p className="text-xl md:font-bold gifts">Gifts</p>
        <div className="md:flex hidden md:space-x-10 space-x-10 border-b-4 border-b-gray-300 pb-3 mb-4">
          <span className="font-bold text-lg cursor-pointer border-b-4 border-b-black">Gift For Her</span>
          <span>Gift For Him</span>
          <span>Gift For Kids</span>
          <span>Gift For Anyone</span>
          <span>UGG Gifts</span>
          <span>Our Favourite Gifts</span>
        </div>
        <SliderSeederMobile>
        <span className="font-bold text-lg cursor-pointer md:border-b-4 border-b-black">Gift For Her</span>
            <span className="font-bold text-lg cursor-pointer">Gift For Him</span>
            <span className="font-bold text-lg cursor-pointer">Gift For Kids</span>
            <span className="font-bold text-lg cursor-pointer">Gift For Anyone</span>
            <span className="font-bold text-lg cursor-pointer">UGG Gifts</span>
            <span className="font-bold text-lg cursor-pointer">Our Favourite Gifts</span>
        </SliderSeederMobile>
        <SliderSeederLarge photoName="last-min-gifts"/>
      </div>
    </section>
  )
}