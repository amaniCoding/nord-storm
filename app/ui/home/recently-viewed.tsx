'use client'
import SliderSeederLarge from "@/app/components/slider-seeder-large";
export default function RecentlyViewed() {
  return (
    <section className=" bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
      <p className="pl-3 mt-1 pt-3 font-semibold">Here's What Caught Your Eye</p>
        
      <p className="font-semibold pl-3 pb-3">Recently viewed</p>
        <SliderSeederLarge />
      </div>
    </section>
  )
}