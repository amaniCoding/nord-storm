import { HomeModernIcon } from "@heroicons/react/16/solid";
import { GiftIcon } from "@heroicons/react/16/solid";
import { LifebuoyIcon, TvIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <footer className="bg-gray-300">
      <div className="max-w-screen-xl mx-auto py-5 px-3">
        <div className="grid md:grid-cols-6 grid-cols-2 md:gap-5 gap-3">
          <div className="p-1">
            <div className="flex flex-col space-y-4">
              <p className="font-bold">Contact Us</p>
              <p>Order Status</p>
              <p>Shipping</p>
              <p>Return Policy & Exchanges</p>
              <p>Price Adjustments</p>
              <p>Price Adjustments</p>
              <p>Gift Cards</p>
              <p>FAQ</p>
              <p>Product Recalls</p>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-4">
              <p className="font-bold"></p>
              <p>All Brands</p>
              <p>Careers</p>
              <p>Corporate Social Responsibility</p>
              <p>Diversity, Equity, Inclusion & Belonging</p>
              <p>Get Email Updates</p>
              <p>Nordstrom Blog</p>
              <p>The Thread</p>
              <p>Nordy Podcast</p>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-4">
              <p className="font-bold">Stores & Services</p>
              <p>Find a Store</p>
              <p>Free Style Help</p>
              <p>Alterations & Tailoring</p>
              <p>Virtual Events</p>
              <p>Get Email Updates</p>
              <p>Spa Nordstrom</p>
              <p>Nordstrom Restaurants</p>
              <p>Nordstrom Local</p>
            </div>
          </div>
          <div className="p-1">
            <div className="flex flex-col space-y-4">
              <p className="font-bold">Nordstrom, Inc.</p>
              <p>Nordstrom Rack</p>
              <p>Investor Relations</p>
              <p>Press Releases</p>
              <p>Nordstrom Media Network</p>
            </div>
          </div>

          <div className="p-1">
            <div className="flex flex-col space-y-4">
              <p className="font-bold">Get Our Apps</p>
              <div className="flex items-center space-x-3">
                <GiftIcon className="w-8 h-8"/>
                <HomeModernIcon className="w-8 h-8"/>
                <LifebuoyIcon className="w-8 h-8"/>
                <TvIcon className="w-8 h-8"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}