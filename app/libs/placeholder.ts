import { Product } from "../@types/alltypes";
import { Color } from "../types/types";

export const shuffleArray = (array: Product[]) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
};

 export const dummyText = [
    {
      desc: 'Is at purse tried jokes china ready decay an. Small its shy way had woody downs power.',
      brand: 'Most Piano',
      image: '/samples/back/1.jpg',
      rating: 3.4,
      ratingCount: 45,
      colors: ["bg-blue-500", "bg-pink-500", "bg-yellow-500"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    },
    {
      desc: 'Two assure edward whence the was. Who worthy yet ten boy denote wonder. ',
      brand: 'CBC News',
      image: '/samples/back/2.jpg',

      rating: 5,
      ratingCount: 45,
      colors: ["bg-blue-500", "bg-pink-500"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs.',
      brand: 'Anchor Media',
      image: '/samples/back/3.jpg',

      rating: 4.4,
      ratingCount: 445,
      colors: ["bg-pink-500", "bg-yellow-500"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Is branched in my up strictly remember. Songs but chief has ham widow downs.',
      brand: 'Negash Media',
      image: '/samples/back/4.jpg',

      rating: 2.4,
      ratingCount: 34,
      colors: [],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'And sir dare view but over man. So at within mr to simple assure.',
      brand: 'Feta SQUAD',
      image: '/samples/back/5.jpg',

      rating: 3.9,
      ratingCount: 343,
      colors: [],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'His followed carriage proposal entrance directly had elegance. Greater for cottage gay parties natural.',
      brand: 'Dr Chemist',
      image: '/samples/back/6.jpg',

      rating: 1.4,
      ratingCount: 100,
      colors: ["bg-blue-500", "bg-red-500", "bg-pink-500"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Ignorant branched humanity led now marianne too strongly entrance.',
      brand: 'Dr Strage',
      image: '/samples/back/7.jpg',

      rating: 2.4,
      ratingCount: 123,
      colors: ["bg-gray-500", "bg-pink-500", "bg-amber-500"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Received overcame oh sensible so at an. Formed do change merely to county it.',
      brand: 'Mezmur Tube',
      image: '/samples/back/8.jpg',

      rating: 1,
      ratingCount: 78,
      colors: [],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Is education residence conveying so so. Suppose shyness say ten behaved morning had.',
      brand: 'Amani Tube',
      image: '/samples/back/9.jpg',

      rating: 1,
      ratingCount: 96,
      colors: ["bg-orange-500", "bg-yellow-500"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Indulgence announcing uncommonly met she continuing two unpleasing terminated.',
      brand: 'Seyifu On Ebs',
      image: '/samples/back/10.jpg',

      rating: 5,
      ratingCount: 109,
      colors: ["bg-blue-500", "bg-gray-500"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Smile spoke total few great had never their too. Amongst moments do in arrived at my replied.',
      brand: 'Donkey Tube',
      image: '/samples/back/11.jpg',

      rating: 1.7,
      ratingCount: 123,
      colors: ["bg-amber-500", "bg-pink-500", "bg-yellow-500"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me everything.',
      brand: 'Chiristian Story',
      image: '/samples/back/12.jpg',

      rating: 4,
      ratingCount: 65,
      colors: ["bg-pink-500", "bg-yellow-500"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'On insensible possession oh particular attachment at excellence in. The books arose but miles happy she. ',
      brand: 'Bible World',
      image: '/samples/back/13.jpg',

      rating: 4,
      ratingCount: 95,
      colors: ["bg-yellow-500"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Saw yet kindness too replying whatever marianne. Old senpricents resolution admiration unaffected its mrs literature.',
      brand: 'CNN',
      image: '/samples/back/14.jpg',

      rating: 4.8,
      ratingCount: 89,
      colors: ["bg-blue-500", "bg-yellow-500"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Two exquisite objection delighted deficient yet its contained. Cordial because are account evident its subject but eat.',
      brand: 'MESKEL MEDIA',
      image: '/samples/back/15.jpg',

      rating: 3,
      ratingCount: 19,
      colors: [],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'An so vulgar to on points wanted. Not rapturous resolving continued household northward gay.',
      brand: 'Lucy Tips',
      image: '/samples/back/16.jpg',

      rating: 2,
      ratingCount: 112,
      colors: [],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret.',
      brand: '20 Minute Hacks',
      image: '/samples/back/17.jpg',

      rating: 2.9,
      ratingCount: 167,
      colors: [],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression.',
      brand: 'Travercy Media',
      image: '/samples/back/18.jpg',

      rating: 3.6,
      ratingCount: 190,
      colors: ["bg-stone-600", "bg-stone-600", "bg-sky-600"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Those an equal point no years do. Depend warmth fat but her but played. Shy and subjects wondered trifling pleasant.',
      brand: 'Hulu Graphics',
      image: '/samples/back/19.jpg',

      rating: 3.7,
      ratingCount: 55,
      colors: ["bg-blue-500", "bg-stone-600"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Ham followed now ecstatic use speaking exercise may repeated. Himself he evident oh greatly my on inhabit general concern.',
      brand: 'Code With Mosh',
      image: '/samples/back/20.jpg',

      rating: 4.1,
      ratingCount: 77,
      colors: [],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'On projection apartments unsatiable so if he entreaties appearance. Rose you wife how set lady half wish.',
      brand: 'Belal Khan',
      image: '/samples/back/21.jpg',

      rating: 3.1,
      ratingCount: 198,
      colors: [],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Travelling alteration impression six all uncommonly. Chamber hearing inhabit joy highest private ask him our believe.',
      brand: 'Max Tv',
      image: '/samples/back/22.jpg',

      rating: 5,
      ratingCount: 345,
      colors: [],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Terminated principles senpricents of no pianoforte if projection impossible. Horses pulled nature favour number yet highly his has old.',
      brand: 'EBC',
      image: '/samples/back/23.jpg',

      rating: 1,
      ratingCount: 435,
      colors: ["bg-rose-500", "bg-sky-600"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Two exquisite objection delighted deficient yet its contained. Cordial because are account evident its subject but eat. ',
      brand: 'EMS',
      image: '/samples/back/24.jpg',

      rating: 3,
      ratingCount: 98,
      colors: ["bg-rose-500", "bg-pink-500", "bg-yellow-500"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham.',
      brand: 'Fana Broadcast Network',
      image: '/samples/back/25.jpg',

      rating: 4.2,
      ratingCount: 297,
      colors: ["bg-rose-500", "bg-yellow-500"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as.',
      brand: 'Hulu Media',
      
      image: '/samples/back/26.jpg',

      rating: 3.6,
      ratingCount: 197,
      colors: ["bg-blue-500", "bg-green-500"],
      
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'Is at purse tried jokes china ready decay an. Small its shy way had woody downs power.',
      brand: 'Spider Graphics',
      image: '/samples/back/27.jpg',

      rating: 3,
      ratingCount: 33,
      colors: ["bg-indigo-500", "bg-pink-500", "bg-green-500"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }, {
      desc: 'He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence.',
      brand: 'Hulu Coding',
      image: '/samples/back/28.jpg',

      rating: 4,
      ratingCount: 233,
      colors: ["bg-indigo-500", "bg-yellow-500"],
      price: {original: 230, off: 350},
      size: ["XXL", "XS", "S", "L", "XL", "XXL"]
    }
  
  ]

export const colorsSeeder: Color[] = [
  {
    name: 'blue',
    colorcode: 'bg-blue'
  },
  {
    name: 'yellow',
    colorcode: 'bg-yellow'
  },
  {
    name: 'magenta',
    colorcode: 'bg-magenta'
  },
  {
    name: 'red',
    colorcode: 'bg-red'
  },
  {
    name: 'green',
    colorcode: 'bg-green'
  },
  {
    name: 'pink',
    colorcode: 'bg-pink'
  },
  {
    name: 'blue',
    colorcode: 'bg-blue'
  },
  {
    name: 'yellow',
    colorcode: 'bg-yellow'
  },
  {
    name: 'magenta',
    colorcode: 'bg-magenta'
  },
  {
    name: 'red',
    colorcode: 'bg-red'
  },
  {
    name: 'green',
    colorcode: 'bg-green'
  },
  {
    name: 'pink',
    colorcode: 'bg-pink'
  },
  {
    name: 'blue',
    colorcode: 'bg-blue'
  },
  {
    name: 'yellow',
    colorcode: 'bg-yellow'
  },
  {
    name: 'magenta',
    colorcode: 'bg-magenta'
  },
  {
    name: 'red',
    colorcode: 'bg-red'
  },
  {
    name: 'green',
    colorcode: 'bg-green'
  },
  {
    name: 'pink',
    colorcode: 'bg-pink'
  }

]


export const colorsSeeder3: Color[] = [
  {
    name: 'blue',
    colorcode: 'bg-blue'
  },
  {
    name: 'yellow',
    colorcode: 'bg-yellow'
  },
  {
    name: 'magenta',
    colorcode: 'bg-magenta'
  },
  
  

]