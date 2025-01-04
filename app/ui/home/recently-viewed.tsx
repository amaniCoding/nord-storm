'use client'
import SliderSeederLarge from "@/app/components/slider-seeder-large";
export default function RecentlyViewed() {
  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto py-5 px-3">
        <p className="my-3 md:text-xl md:font-bold md:text-left text-center">Here's What Caught Your Eye</p>
        <p className="mb-2">
          Recently viewed
        </p>
        <SliderSeederLarge photoName="great-deals" />
      </div>
    </section>
  )
}