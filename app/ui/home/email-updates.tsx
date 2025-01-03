'use client'
export default function EmailUpdates() {
  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto py-5 px-3">
        <p className="md:hidden block my-2">Get Email Updates:</p>
        <div className="flex items-center md:justify-end space-x-3">
          <span className="font-bold md:block hidden">Get Email Updates:</span>
          <input className="pl-3 py-2 w-56 border border-gray-300" placeholder="Email Address"></input>
          <button className="md:w-44 w-auto text-center inline-block py-2 px-2 bg-black text-white">Sign Up</button>
        </div>
      </div>
    </section>
  )
}