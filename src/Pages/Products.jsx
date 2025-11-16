import { useState } from "react";
import { Bookmark } from "lucide-react";
export default function Products() {
  const count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];


  const categoriesMen = ["T-SHIRTS", "SHIRTS", "POLO SHIRTS", "TROUSERS", "PANTS", "JACKETS | COATS", "HOODIES | SWEATSHIRTS", "SHOES | BAGS", "ACCESSORIES | PERFUMES"];
  const categoriesWoman = ["BEST SELLERS", "LEATHER", "JACKETS | COATS", "PUFFERS | QUILTED", "BLAZERS", "DRESSES", "SHOES | BAGS", "ACCESSORIES | PERFUMES"];

  const [selectedCategory, setSelectedCategory] = useState("VIEW ALL");
  return (
    <div className="flex-center flex-col gap-16 w-full mt-22">

      <Womans/>

      <div className="flex flex-col items-start w-full px-20">
        <div className="flex-center flex-row font-thin text-xs gap-2">
          <span onClick={() => setSelectedCategory("VIEW ALL")} className={`tab p-0.5 px-2 ${selectedCategory === "VIEW ALL" ? "bg-black text-white" : "bg-white/90 text-black"}`}>VIEW ALL</span>
          {
            categoriesWoman.map((category, index) => (
              <span key={index} onClick={() => setSelectedCategory(category)}
               className={`tab p-0.5 px-2 ${selectedCategory === category ? "bg-black text-white" : "bg-white/90 text-black"}`}>{category}</span>
            ))
          }
        </div>

        <div>

          <div className="w-full grid grid-cols-5 gap-8 px-5 py-10 ">
            {
              count.map((item, index) => (
                <Product key={index} />
              ))
            }
          </div>

        </div>

        
         
      </div>

    </div>
  )
}

function Product({ prod }) {
  return (
    <div
      key={prod?.id}
      className="relative flex flex-col gap-3 hover:shadow-lg transition-all cursor-pointer group"
    >
      {/* Image Wrapper */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50">

        {/* Image */}
        <img
          src="https://static.zara.net/assets/public/1f19/b239/29294f57968c/9d265e03d8b7/09188332401-p/09188332401p.jpg?ts=1761144566930&w=457"
          alt={prod?.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"/>

        {/* Fade Overlay */}
        <div className="
          absolute inset-0 
          bg-gradient-to-t from-black via-black/10 to-transparent 
          opacity-100 transition-opacity duration-300 
          group-hover:opacity-0
        ">
          <button className="absolute top-3 right-3 text-gray-600">
            <Bookmark size={16} strokeWidth={1} />
          </button>

          <div className="absolute flex flex-col gap-1 bottom-2 left-4 text-sm text-white font-light ">
            <h3 className="px-1 text-xs">ARAY MO DRESS asdas asd asd</h3>
            <h3 className="border-b-[1px] px-1 pb-1 w-fit border-white">2,395.00 PHP</h3>
          </div>
        </div>
      </div>
    </div>
  );
}




function Womans(){
  return (
      <div className=" relative grid grid-cols-5 grid-rows-5 gap-0.5 pr-1 bg-black">
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/50">
          <h1 className="absolute top-1/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-opti text-6xl">
            THE NEW
          </h1>

          <h3 className="absolute bottom-1/24 right-1/48 p-4 border-b transform  text-white font-opti text-3xl">
            AUTUMN EDIT
          </h3>
        </div>
        {/* Big Left Image */}
        <div className="row-span-5 overflow-hidden ">
          <img
            src="https://static.zara.net/assets/public/3fa5/128c/2428480386c5/70b6239807ce/09616503681-p/09616503681-p.jpg?ts=1762952392584&w=972"
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top small */}
        <div className="row-span-2 overflow-hidden">
          <img
            src="https://static.zara.net/assets/public/10a5/c2c8/28ba45509b54/5605e5742915/07522265104-a6/07522265104-a6.jpg?ts=1762856913499&w=972"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Medium center bottom-left */}
        <div className="row-span-3 col-start-2 row-start-3 overflow-hidden">
          <img
            src="https://static.zara.net/assets/public/4fc2/b146/cbb74f69b1a2/398e58b32750/05029181093-p/05029181093-p.jpg?ts=1762963941205&w=485"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Large top-right */}
        <div className="col-span-2 row-span-3 col-start-4 row-start-1 overflow-hidden">
          <img
            src="https://static.zara.net/assets/public/1ed0/ef59/d7f6497f84e5/e03cc638391c/01599205303-h1/01599205303-h1.jpg?ts=1762952368960&w=972"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mid-top center */}
        <div className="row-span-3 col-start-3 row-start-1 overflow-hidden">
          <img
            src="https://static.zara.net/assets/public/c372/7080/b8704203bf24/ad4d2d9683cf/02756115706-a1/02756115706-a1.jpg?ts=1762952367143&w=485"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom wide */}
        <div className="col-span-2 row-span-2 col-start-3 row-start-4 overflow-hidden">
          <img
            src="https://static.zara.net/assets/public/6c04/b721/b28b4254b82f/6a2fd6a328ff/12003610800-h1/12003610800-h1.jpg?ts=1762952424551&w=707"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom-right small */}
        <div className="row-span-2 col-start-5 row-start-4 overflow-hidden">
          <img
            src="https://static.zara.net/assets/public/54c3/df79/8ca241b4a535/146dd7aa0f76/09942163485-a5/09942163485-a5.jpg?ts=1762952392884&w=485"
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
  )
}