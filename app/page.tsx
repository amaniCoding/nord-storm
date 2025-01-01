
import BannerSlide from "./ui/home/banner-slide";
import  SalePics  from "./ui/home/sale-pics-for-you";
import GetEx from "./ui/home/get-ex";
import Lovings from "./ui/home/currently-loving";
import DealsForYou from "./ui/home/deals-what-you-love";
import ShopByCat from "./ui/home/shop-by-cat";
import RecentlyViewed  from "./ui/home/recently-viewed";

import Gifts  from "./ui/home/gifts";
import LastMinGifts from "./ui/home/last-min-gifts";
import Brands from "./ui/home/brands-we-love";
import ExploreMore from "./ui/home/explore-more";


export default function Home() {
  return (
    <main>
      <BannerSlide/>
      <SalePics/>
      <Gifts/>
      <ExploreMore/>
      <LastMinGifts/>
      <Brands/>
      <GetEx/>
      <Lovings/>
      <DealsForYou/>
      <ShopByCat/>
      <RecentlyViewed/>
      </main>
  );
}
