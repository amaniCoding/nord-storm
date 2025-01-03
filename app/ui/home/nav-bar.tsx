'use client'

import BeautyMega from "./megas/large/beauty-mega";
import MenMega from "./megas/large/men-mega";
import WomenMega from "./megas/large/women-mega";

import SmallBeautyMega from "./megas/small/beauty-mega";
import SmallWomenMega from "./megas/small/women-mega";
import SmallMenMega from "./megas/small/men-mega";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {useState } from "react";

export default function NavBar() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [megaToShow, setMegaToShow] = useState<string | null>(null);
  const [smallMegaToShow, setSmallMegaToShow] = useState<string | null>("");
  const [isNavItemShown, setIsNavItemShown] = useState<boolean>(false);

  const [isSmallMegaShown, setIsSmallMegaShown] = useState<boolean>(false);

  const handelShowModal = (modalToShow: string | null) => {
    setIsShowModal(true);
    
    setMegaToShow(modalToShow);
  }



  const handelNavItemClick = (smallMegaToShow: string | null) => {
    setIsSmallMegaShown(true);
    setSmallMegaToShow(smallMegaToShow);
  }



  return (
    <nav>
      <div className="max-w-screen-xl md:py-5 py-2 relative">
        <Bars3BottomLeftIcon onClick={() => setIsNavItemShown(true)} className="w-9 h-9 md:hidden cursor-pointer" />
        <div className="md:flex items-center justify-center space-x-16 hidden">
          <span className="cursor-pointer border-b-2 border-b-transparent hover:border-black">Holiday Gifts</span>
          <span className="cursor-pointer border-b-2 border-b-transparent hover:border-black">Sale</span>
          <span className="cursor-pointer border-b-2 border-b-transparent hover:border-black">New</span>
          <span className="cursor-pointer border-b-2 border-b-transparent hover:border-black" onClick={() => { handelShowModal("women") }}>Women</span>
          <span className="cursor-pointer border-b-2 border-b-transparent hover:border-black" onClick={() => { handelShowModal("men") }}>Men</span>
          <span className="cursor-pointer border-b-2 border-b-transparent hover:border-black" onClick={() => { handelShowModal("beauty") }}>Beauty</span>
          <span className="cursor-pointer border-b-2 border-b-transparent hover:border-black">Shoes</span>
          <span className="cursor-pointer border-b-2 border-b-transparent hover:border-black">Kids</span>
          <span className="cursor-pointer border-b-2 border-b-transparent hover:border-black">Designer</span>
          <span className="cursor-pointer border-b-2 border-b-transparent hover:border-black">Home</span>
          <span className="cursor-pointer border-b-2 border-b-transparent hover:border-black">Explore</span>
        </div>

        <div className={`pt-6 md:hidden fixed z-10 h-screen w-56 overflow-y-scroll socrollabar scroll_content top-0 left-0 transition duration-200 ease-in-out bg-white ${isNavItemShown ? 'translate-x-0' : '-translate-x-full'}`}>
          <XMarkIcon className="w-9 h-9 absolute top-2 right-4 p-1 cursor-pointer hover:bg-gray-200 rounded-full" onClick={() => setIsNavItemShown(false)}/>
          <span className="block p-2 hover:bg-gray-200 cursor-pointer" onClick={() => {handelNavItemClick(null)}}>Holiday Gifts</span>
          <span className="block p-2 hover:bg-gray-200 cursor-pointer" onClick={() => {handelNavItemClick(null)}}>Sale</span>
          <span className="block p-2 hover:bg-gray-200 cursor-pointer" onClick={() => {handelNavItemClick(null)}}>New</span>
          <span className="block p-2 hover:bg-gray-200 cursor-pointer" onClick={() => {handelNavItemClick('women')}}>Women</span>
          <span className="block p-2 hover:bg-gray-200 cursor-pointer" onClick={() => {handelNavItemClick("men")}}>Men</span>
          <span className="block p-2 hover:bg-gray-200 cursor-pointer" onClick={() => {handelNavItemClick("beauty")}}>Beauty</span>
          <span className="block p-2 hover:bg-gray-200 cursor-pointer" onClick={() => {handelNavItemClick(null)}}>Shoes</span>
          <span className="block p-2 hover:bg-gray-200 cursor-pointer" onClick={() => {handelNavItemClick(null)}}>Kids</span>
          <span className="block p-2 hover:bg-gray-200 cursor-pointer" onClick={() => {handelNavItemClick(null)}}>Designer</span>
          <span className="block p-2 hover:bg-gray-200 cursor-pointer" onClick={() => {handelNavItemClick(null)}}>Home</span>
          <span className="block p-2 hover:bg-gray-200 cursor-pointer" onClick={() => {handelNavItemClick(null)}}>Explore</span>
        </div>

      </div>
      {isShowModal && megaToShow === "women" && <WomenMega onClose={setIsShowModal} />}
      {isShowModal && megaToShow === "men" && <MenMega onClose={setIsShowModal} />}
      {isShowModal && megaToShow === "beauty" && <BeautyMega onClose={setIsShowModal} />}
      <SmallWomenMega isSmallMegaShown={isSmallMegaShown} smallMegaToShow={smallMegaToShow} onClose={setIsSmallMegaShown}/>
      <SmallMenMega isSmallMegaShown={isSmallMegaShown} smallMegaToShow={smallMegaToShow} onClose={setIsSmallMegaShown}/>
      <SmallBeautyMega isSmallMegaShown={isSmallMegaShown} smallMegaToShow={smallMegaToShow} onClose={setIsSmallMegaShown}/>
    </nav>
  )
}