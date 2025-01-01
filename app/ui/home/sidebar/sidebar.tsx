'use client'
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function CategorySideBar() {
//react/no-unescaped-entities
  type SideBarType = {
    id: number;
    name: string;
    isOpen: boolean;
    innerSide: string[];
  }
  const sideBarItems: SideBarType[] = [
    {
      id: 1,
      name: 'Size',
      isOpen: false,
      innerSide: [
        "00, XXS",
        "0, XS",
        "2, XS",
        "4, S",
        "6, S",
        "8, M",
        "10, M",
        "12, L",
        "14, L",
        "16, XL",
        "14W, 1X, 18, XXL",
        "16W, 1X, 20, XXXL",
        "18W, 2X, 20, 4XL",
        "20W, 2X, 22",
        "22W, 3X, 24",
        "24W, 3X",
        "26W, 4X",
        "28W+, 4X+",
        "Petite: 0, XS",
        "Petite: 2, XS",
        "Petite: 4, S",
        "Petite: 6, S",
        "Petite: 8, M",
        "Petite: 10, M",
        "Petite: 12, L",
        "Petite: 14, L",
        "Petite: 16, XL",
        "Petite: 18+, XXL+",
        "Maternity: 0, XS",
        "Maternity: 2, XS",
        "Maternity: 4, S",
        "Maternity: 6, S",
        "Maternity: 8, M",
        "Maternity: 10, M",
        "Maternity: 12, L",
        "Maternity: 14, L",
        "Maternity: 16, XL",
        "Maternity: 18+, XXL+"
      ]
    },
    {
      id: 2,
      name: 'Color',
      isOpen: false,
      innerSide: [
        "Black",

        "Grey",

        "White",

        "Ivory",

        "Beige",

        "Brown",

        "Metallic",

        "Purple",

        "Blue",

        "Blue/Green",

        "Green",

        "Yellow",

        "Orange",

        "Coral",

        "Pink",

        "Red",

        "Burgundy"
      ]
    },
    {
      id: 3,
      name: 'Brand',
      isOpen: false,
      innerSide: [
        "Alex Evenings",

        "Alfred Sung",

        "AllSaints",

        "Amsale",

        "Anne Klein",

        "Avec Les Filles",

        "Blondie Nites",

        "Bottega Veneta"
      ]
    },
    {
      id: 4,
      name: 'Price',
      isOpen: false,
      innerSide: [
        "$0 - $50",
        "$50 - $100",
        "$100 - $200",
        "$200 - $300",
        "$300 - $400",
        "$400 - $500",
        "$500 - $600",
        "$600 - $800",
        "$800 - $6000"
      ]
    },
    {
      id: 5,
      name: 'Closure',
      isOpen: false,
      innerSide: [
        "Button",
        "Lace-Up",
        "Pull-On",
        "Zipper"
      ]
    },
    {
      id: 6,
      name: 'Fabric Care',
      isOpen: false,
      innerSide: [
        " Dry Clean",
        "Hand Wash",
        "Machine Wash"
      ]
    },
    {
      id: 7,
      name: 'Feature',
      isOpen: false,
      innerSide: [
        "Adjustable",

        "Breathable",

        "Convertible",

        "Hooded",

        "Moisture Wicking",

        "Optional Strap",

        "Quick Dry",

        "Reversible",

        "Sun Protection",

        "Wrinkle Resistant",
      ]
    },
    {
      id: 8,
      name: 'Length',
      isOpen: false,
      innerSide: [
        "Mini",

        "Short",

        "Knee-Length",

        "Midi",

        "Long"
      ]
    },
    {
      id: 9,
      name: 'Material',
      isOpen: false,
      innerSide: [
        "100% Cashmere",

        "100% Cotton",

        "100% Linen",

        "100% Silk",

        "100% Wool",

        "Acrylic & Resin",

        "Beaded",

        "Chambray",

        "Charmeuse",

        "Chiffon",

        "Corduroy",

        "Cotton Blend",

        "Crochet",

        "Denim",

        "Eyelet",

        "Faux Leather",

        "Feather",

        "Flannel",

        "Jersey Knit",

        "Lace",

        "Leather (Genuine)",

        "Linen Blend",

        "Mesh",

        "Metal",

        "Nylon",

        "Rayon",

        "Sateen",

        "Satin",

        "Sequin",

        "Silk Blend",

        "Spandex",

        "Synthetic",

        "Taffeta",

        "Tulle",

        "Tweed",

        "Twill",

        "Velvet",

        "Wool Blend"
      ]
    },
    {
      id: 10,
      name: 'Neck Style',
      isOpen: false,
      innerSide: [
        "Asymmetric",

        "Boat Neck",

        "Collared",

        "Cowl Neck",

        "Crewneck",

        "Halter",

        "Henley",

        "High Neck",

        "Mock Neck",

        "Off the Shoulder",

        "One Shoulder",

        "Plunge",

        "Quarter Zip",

        "Scoop Neck",

        "Shawl Collar",

        "Split Neck",

        "Square Neck",

        "Strapless",

        "Sweetheart",

        "Tie Neck",

        "Turtleneck",

        "V-Neck"
      ]
    },
    {
      id: 11,
      name: 'Ocation',
      isOpen: false,
      innerSide: [
        "Bridesmaid",

        "Casual",

        "Cocktail & Party",

        "Date Night",

        "Daytime Events",

        "Formal",

        "Lounge",

        "Mother of the Bride or Groom",

        "Night Out",

        "Vacation",

        "Wedding Guest",

        "Work"
      ]
    },
    {
      id: 12,
      name: 'Sale',
      isOpen: false,
      innerSide: [
        "Regular",
        "Sale"
      ]
    },
    {
      id: 13,
      name: 'Sleeve Length',
      isOpen: false,
      innerSide: [
        "leeveless",

        "Cap Sleeve",

        "Short Sleeve",

        "3/4 Sleeve",

        "Long Sleeve"
      ]
    },
    {
      id: 14,
      name: 'Style',
      isOpen: false,
      innerSide: [
        "A-Line",

        "Babydoll",

        "Backless",

        "Ball Gown",

        "Belted",

        "Blazer",

        "Body-con",

        "Coated",

        "Cold Shoulder",

        "Corset & Bustier",

        "Cover-Up",

        "Cutout",

        "Distressed",

        "Double Breasted",

        "Drop Waist",

        "Embellished",

        "Empire Waist",

        "Fit & Flare",

        "Graphic",

        "High Low",

        "Maxi",

        "Mermaid",

        "Nonstretch",

        "Peplum",

        "Pleated",

        "Puff Sleeve",

        "Racerback",

        "Ruched",

        "Sheath",

        "Shift",

        "Shirtdress",

        "Slipdress",

        "Sundress",

        "Sweater Dress",

        "Sweatshirt Dress",

        "Tank",

        "Tiered",

        "Trapeze & Swing",

        "T-Shirt",

        "Tunic",

        "Wrap"
      ]
    },


  ]
  
 

  const [sideBar, setSideBar] = useState<SideBarType[]>(sideBarItems);


  const handelSideBarItemClick = (item: SideBarType) => {
    const newSiderBarItems = sideBar.map(
      el => {
        if (el.id === item.id) {
          return { ...el, isOpen: !el.isOpen }
        } else {
          return el
        }
      }
    );
    setSideBar(newSiderBarItems);
  }
  return (
    <div>
      {
              sideBar.map(el => {
                return (
                  <div className="flex flex-col" key={el.id}>
                    <div className="flex p-3 items-center justify-between border-t border-t-gray-300 mb-3">
                      <span className="font-bold font-sans">{el.name}</span>
                      <PlusIcon className="w-6 h-6 cursor-pointer" onClick={() => { handelSideBarItemClick(el) }} />
                    </div>
                    <div className="ml-4 p-3">
                      {
                        el.innerSide.map((el2, i) => {
                          return (
                            <div className={`transition-all duration-300 ease-in-out ${el.isOpen ? 'leading-2 h-auto overflow-hidden' : 'h-0 leading-none overflow-auto'}`} key={i}>

                              <div className="flex items-center space-x-4">
                                <input type="checkbox" className="w-6 h-6" />
                                <span className="block mb-2">{el2}</span>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
    </div>
  )
}