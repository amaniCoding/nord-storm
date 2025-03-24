'use client'
import SliderSeederLarge from "@/app/components/slider-seeder-large"
import SliderSeederMobile from "@/app/components/slider-seeder-mobile"
export default function Gifts() {
  return (
    <section className="md:p-4 p-6">
      <div className="max-w-screen-xl mx-auto">
      <p className="my-3 font-semibold px-5">Gifts</p>
        <div className="md:flex hidden md:space-x-10 space-x-10 border-b-2 border-b-gray-300 pb-3 mb-4 bg-white p-3">
          <span className="font-bold text-lg cursor-pointer border-b-4 border-b-black">Gift For Her</span>
          <span>Gift For Him</span>
          <span>Gift For Kids</span>
          <span>Gift For Anyone</span>
          <span>UGG Gifts</span>
          <span>Our Favourite Gifts</span>
        </div>
        <SliderSeederMobile>
        <span className="font-bold text-lg cursor-pointer md:border-b-4 border-b-black text-center">Gift For Her</span>
            <span className="font-bold text-lg cursor-pointer text-center">Gift For Him</span>
            <span className="font-bold text-lg cursor-pointer text-center">Gift For Kids</span>
            <span className="font-bold text-lg cursor-pointer text-center">Gift For Anyone</span>
            <span className="font-bold text-lg cursor-pointer text-center">UGG Gifts</span>
            <span className="font-bold text-lg cursor-pointer text-center">Our Favourite Gifts</span>
        </SliderSeederMobile>
        <SliderSeederLarge photoName="last-min-gifts"/>
      </div>
    </section>
  )
}