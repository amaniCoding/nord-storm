import ShoppingSeeder from "@/app/components/shpping-seeder";
import CategorySideBar from "@/app/ui/home/sidebar/sidebar";
import SubCategory from "@/app/ui/home/sidebar/sub-category";

import Link from "next/link";


export default async function Page(props: { params: Promise<{ cat: string }> }) {
  const params = await props.params;
  const cat = params.cat


  return (
    <section>
      <div className="max-w-screen-xl mx-auto">

        <div className="lg:pl-0 pl-4 my-2">
          <Link href={`/`}>Home /</Link>
          <Link href={`../`}>Women /</Link>
          <Link href={`./`}>Clothing /</Link>
          <span className="font-bold">{cat}</span>
        </div>


        <div className="grid grid-cols-12 mt-6 gap-2">

          <div className="lg:col-span-2 col-span-12">
            <div className="sticky top-0 z-[100] h-screen socrollabar overflow-y-scroll ">
              <CategorySideBar />
            </div>
          </div>
          <div className="lg:col-span-10 col-span-12">
            <div className="h-[34425px]">
              <div className="px-4">

                <SubCategory />
                <div className="flex items-center justify-between p-2">
                  <span>1250 items</span>
                  <select className="border border-gray-300 p-3 w-44">
                    <option value="">Sort Featured</option>
                  </select>
                </div>

              </div>
              <div className="">
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
                  <ShoppingSeeder />
                  <ShoppingSeeder />
                  <ShoppingSeeder />
                  <ShoppingSeeder />
                  <ShoppingSeeder />
                  <ShoppingSeeder />
                  <ShoppingSeeder />
                  <ShoppingSeeder />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}