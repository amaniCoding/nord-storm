'use client'
export default function ExploreMore() {
  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-2xl p-3 font-bold text-center">Explore More</p>
        <div className="grid lg:px-0 px-2 lg:grid-cols-6 grid-cols-2 lg:gap-7 gap-3">
          <div>
            <div className="w-full h-56 rounded-2xl bg-gradient-to-tl from-blue-500 to-green-500 flex items-center justify-center">
              <span className="text-xl font-serif text-white">
              Stocking Stuffers
              </span>

            </div>
            <p className="mt-3 text-center">Stocking Stuffers</p>
          </div>
          <div>
            <div className="w-full h-56 rounded-2xl bg-gradient-to-tl from-yellow-300 to-red-700 flex items-center justify-center">
              <span className="text-xl font-serif text-white">
              Gifts Under $50
              </span>

            </div>
            <p className="mt-3 text-center">Gifts Under $50</p>
          </div>
          <div>
            <div className="w-full h-56 rounded-2xl bg-gradient-to-tl from-blue-300 to-white flex items-center justify-center">
              <span className="text-xl font-serif text-black">
              Gifts Under $100
              </span>

            </div>
            <p className="mt-3 text-center">Gifts Under $100</p>
          </div>
          <div>
            <div className="w-full h-56 rounded-2xl bg-gradient-to-tl from-red-300 to-white flex items-center justify-center">
              <span className="text-xl font-serif text-black">
              Gifts on Sale
              </span>

            </div>
            <p className="mt-3 text-center">Gifts on Sale</p>
          </div>
          <div>
            <div className="w-full h-56 rounded-2xl bg-gradient-to-tl from-green-300 to-blue-950 flex items-center justify-center">
              <span className="text-xl font-serif text-white">
              Luxe Gifts
              </span>

            </div>
            <p className="mt-3 text-center">Luxe Gifts</p>
          </div>
          <div>
            <div className="w-full h-56 rounded-2xl bg-gradient-to-tl from-indigo-800 to-white flex items-center justify-center">
              <span className="text-xl text-center font-serif text-white">
              Beauty Gifts Under $100
              </span>

            </div>
            <p className="mt-3 text-center">Beauty Gifts Under $100</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}