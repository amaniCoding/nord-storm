'use client'
import SliderSeederLarge from "@/app/components/slider-seeder-large";
export default function Lovings() {
  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto py-1 px-3">
        <p className="mb-2 text-xl text-center font-bold">
          Currenly Loving
        </p>
        <p className="mb-2 text-center">
          Explore favorite looks from Instagram. Tag @Nordstrom to show us your finds.
        </p>

        <SliderSeederLarge photoName="currently-loving"/>
      </div>
    </section>
  )
}