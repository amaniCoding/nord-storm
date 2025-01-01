import { MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/16/solid";
import { UserIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  return (
    <nav>
      <div className="max-w-screen-xl mx-auto md:p-4 p-3 border-b-2 border-b-gray-300">
        <div className="relative md:flex md:flex-row flex-col md:items-center justify-between space-x-4 hidden">
          <span className="text-2xl font-bold">NordStorm</span>
          <input className="md:pl-14 pl-10 py-3 border-2 border-gray-300 grow rounded-lg" placeholder="Search for products and brands"
          />
          <MagnifyingGlassIcon className="absolute md:left-36 md:top-1/2 w-7 h-7 md:-translate-y-1/2 left-2 top-11 text-gray-500 peer-focus:text-gray-900" />

          <div className="flex items-center">
            <UserIcon className="w-8 h-8" />
            <span className="font-semibold">Sign in</span>
          </div>
          <ShoppingBagIcon className="w-8 h-8" />
        </div>
        <div className="relative md:hidden flex items-center justify-between">
          <span className="text-2xl font-bold">NordStorm</span>
          <div className="flex items-center">
            <UserIcon className="w-8 h-8" />
            <span className="font-semibold">Sign in</span>
            <ShoppingBagIcon className="w-8 h-8" />
          </div>
          
        </div>
      </div>
    </nav>
  )
}