'use client'
import SliderSeederLarge from "@/app/components/slider-seeder-large";
export default function DealsForYou() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <p className="pl-3 pt-3 mb-1 text-xl font-bold">Great Deals on What You Love</p>
        <p className="pl-3">
          Items similar to what you've browsed are on sale
        </p>
        <SliderSeederLarge />
      </div>
    </section>
  )
}