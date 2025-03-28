'use client'
import SliderSeederLarge from "@/app/components/slider-seeder-large";
export default function Lovings() {
  return (
    <section className="">
      <div className="max-w-screen-xl">
        <p className="pl-3 pt-3 font-semibold text-center">Currenly Loving</p>
        <p className="mt-1 pl-3 text-center">
          Explore favorite looks from Instagram. Tag @Nordstrom to show us your finds.
        </p>

        <SliderSeederLarge/>
      </div>
    </section>
  )
}