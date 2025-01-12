'use client'
import SliderSeederLarge from "@/app/components/slider-seeder-large";
import SliderSeederMobile from "@/app/components/slider-seeder-mobile";
export default function SalePics() {
  return (
    <section className=" bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <p className="my-3 font-semibold">Sale Picks for You</p>

        <div className="md:flex hidden md:space-x-10 border-b-2 border-b-gray-300 pb-3 mb-4 bg-white p-3">
          <span className="border-b-4 border-b-black">New Markdowns</span>
          <span>Designer Sale Clothing, Shoes & Accessories</span>
          <span>Sale Cold-Weather Clothing, Shoes & Accessories</span>
          <span>Limited-Time Sale</span>
          <span>Beauty & Fragrance Sale</span>
        </div>
        <SliderSeederMobile>
          <span className="font-bold text-lg text-center cursor-pointer md:border-b-4 border-b-black">New Markdowns</span>
          <span className="font-bold text-lg text-center cursor-pointer">Designer Sale Clothing, Shoes & Accessories</span>
          <span className="font-bold text-lg text-center cursor-pointer">Sale Cold-Weather Clothing, Shoes & Accessories</span>
          <span className="font-bold text-lg text-center cursor-pointer">Limited-Time Sale</span>
          <span className="font-bold text-lg text-center cursor-pointer">Beauty & Fragrance Sale</span>
        </SliderSeederMobile>
        <SliderSeederLarge photoName="sale-pics-for-you" />
      </div>
    </section>
  )
}