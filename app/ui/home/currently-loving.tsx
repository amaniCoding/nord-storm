'use client'
import SliderSeederLarge from "@/app/components/slider-seeder-large";
export default function Lovings() {
  return (
    <section className="p-4">
      <div className="max-w-screen-xl">
        <p className="my-3 font-semibold text-center">Currenly Loving</p>
        <p className="mb-2 text-center">
          Explore favorite looks from Instagram. Tag @Nordstrom to show us your finds.
        </p>

        <SliderSeederLarge photoName="currently-loving"/>
      </div>
    </section>
  )
}