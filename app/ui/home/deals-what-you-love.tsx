'use client'
import SliderSeederLarge from "@/app/components/slider-seeder-large";
export default function DealsForYou() {
  return (
    <section className=" bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <p className="my-3 text-xl font-bold">Great Deals on What You Love</p>
        <p className="mb-2">
          Items similar to what you've browsed are on sale
        </p>
        <SliderSeederLarge photoName="great-deals" />
      </div>
    </section>
  )
}