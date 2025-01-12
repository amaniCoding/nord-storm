'use client'
import SliderSeederLarge from "@/app/components/slider-seeder-large";
export default function RecentlyViewed() {
  return (
    <section className=" bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
      <p className="my-3 font-semibold">Here's What Caught Your Eye</p>
        
      <p className="my-3 font-semibold">
          Recently viewed
        </p>
        <SliderSeederLarge photoName="great-deals" />
      </div>
    </section>
  )
}