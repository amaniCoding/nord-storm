import CategorySideBar from "@/app/ui/home/sidebar/sidebar";
import SubCategory from "@/app/ui/home/sidebar/sub-category";
import Image from "next/image";
import Link from "next/link";

export default async function Page(props: { params: Promise<{ cat: string }> }) {
  const params = await props.params;
  const cat = params.cat


  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-start p-5 space-x-5">
          <Link href={`/`}>Home /</Link>
          <Link href={`../`}>Women /</Link>
          <Link href={`./`}>Clothing /</Link>
          <span className="font-bold">{cat}</span>
        </div>
    
        <div className="flex space-x-4">
          <div className="w-1/5 h-screen overflow-auto p-3 socrollabar scroll_content sticky top-0 z-20 md:block hidden">
          <CategorySideBar/>
          </div>
          <div className="w-4/5 grow">
            <div className="px-4">
              <div className="md:hidden block">
                <SubCategory/>
              </div>
              <div className="md:flex hidden space-x-9 border-b border-gray-400 pb-3">
                <span className="font-sans">All Skirts</span>
                <span className="font-sans">Denim</span>
                <span className="font-sans">Leather</span>
                <span className="font-sans">Maxi</span>
                <span className="font-sans">Midi</span>
                <span className="font-sans">Mini</span>
                <span className="font-sans">Slip</span>
                <span className="font-sans">Juniors</span>
              </div>
              <div className="flex items-center justify-between p-2">
                <span>1250 items</span>
                <select className="border border-gray-300 p-3 w-44">
                  <option value="">Sort Featured</option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
              {
                Array.from(Array(60).keys()).map(el => {
                  return (
                    <div className="p-3 bg-orange-200" key={el}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      <Image
                        src={`/samples/recently-viewed/1.jpg`}
                        alt="something is happening"
                        width={0}
                        height={0}
                        sizes="100vh"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}