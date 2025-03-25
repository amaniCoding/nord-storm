'use client'
import SliderSeederLarge from "@/app/components/slider-seeder-large";
export default function RecentlyViewed() {
  return (
    <section className=" bg-gray-50 p-4">
      <div className="max-w-screen-xl mx-auto">
      <p className="my-3 font-semibold pl-4">Here's What Caught Your Eye</p>
        
      <p className="my-3 font-semibold pl-4">Recently viewed</p>
        <SliderSeederLarge />
      </div>
    </section>
  )
}