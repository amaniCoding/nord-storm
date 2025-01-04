'use client'
import ShoppingSeeder from "@/app/components/shpping-seeder";
import CategorySideBar from "@/app/ui/home/sidebar/sidebar";
import SubCategory from "@/app/ui/home/sidebar/sub-category";
import Image from "next/image";
import Link from "next/link";
import StarRatings from "react-star-ratings";

export default async function Page(props: { params: Promise<{ cat: string }> }) {
  const params = await props.params;
  const cat = params.cat


  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
      <div className="max-w-screen-xl mx-auto px-3">
          <Link href={`/`}>Home /</Link>
          <Link href={`../`}>Women /</Link>
          <Link href={`./`}>Clothing /</Link>
          <span className="font-bold">{cat}</span>
        </div>

        <div className="flex space-x-4">
          <div className="w-1/5 h-screen overflow-auto p-3 socrollabar scroll_content sticky top-0 z-20 md:block hidden">
            <CategorySideBar />
          </div>
          <div className="w-4/5 grow">
            <div className="px-4">
              <div className="md:hidden block">
                <CategorySideBar />
              </div>
              <SubCategory />
              <div className="flex items-center justify-between p-2">
                <span>1250 items</span>
                <select className="border border-gray-300 p-3 w-44">
                  <option value="">Sort Featured</option>
                </select>
              </div>

            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
              <ShoppingSeeder/>
              <ShoppingSeeder/>
              <ShoppingSeeder/>
              <ShoppingSeeder/>
              <ShoppingSeeder/>
              <ShoppingSeeder/>
              <ShoppingSeeder/>
              <ShoppingSeeder/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}