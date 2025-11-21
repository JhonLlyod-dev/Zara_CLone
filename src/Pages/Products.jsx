import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { allProducts } from "../assets/Data";

export default function Products() {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const elem = document.querySelector(hash);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const { categories, searches } = useParams();

  const maincategory = ["WOMEN", "MEN", "KIDS", "PERFUMES"];

  const categoriesMen = [
    "T-SHIRTS", "SHIRTS", "POLO SHIRTS", "TROUSERS", "PANTS",
    "JACKETS | COATS", "HOODIES | SWEATSHIRTS", "SHOES | BAGS",
    "ACCESSORIES | PERFUMES"
  ];

  const categoriesWoman = [
    "BEST SELLERS", "LEATHER", "JACKETS | COATS", "PUFFERS | QUILTED",
    "BLAZERS", "DRESSES", "SHOES | BAGS", "ACCESSORIES | PERFUMES"
  ];

  const categoriesKids = [
    "0-18 MONTHS | BABY", "1-6 YEARS | GIRL", "1-6 YEARS | BOY",
    "7-12 YEARS | GIRL", "7-12 YEARS | BOY",
    "13-18 YEARS | GIRL", "13-18 YEARS | BOY"
  ];


  const [search, setSearch] = useState(searches || "");
  const [selectedCategory, setSelectedCategory] = useState(categories || "All");
  const [selectedSub, setSelectedSub] = useState("");

  useEffect(() => {

      setSearch(searches);
      setSelectedCategory(categories);
      setSelectedSub(""); 

      console.log(search  + " " + selectedCategory);

  }, [searches || categories]);


  const filteredProducts = allProducts
 
    .filter((p) => {
      if (!search) return true;

      const text = search.toLowerCase();

      const searchableContent = `
        ${p.category || ""}
        ${p.collection || ""}
        ${p.name || ""}
        ${p.productInfo || ""}
        ${p.materials?.outerShell || ""}
      `.toLowerCase();

      return searchableContent.includes(text);
    })
  
    .filter((p) => {
      if (selectedCategory === "All") return true;
      return p.category?.toUpperCase() === selectedCategory.toUpperCase();
    });


  return (
    <div  id="products" className="flex-center scroll-smooth flex-col gap-16 w-full mt-22">

      <Womans />


      <div className="flex flex-col items-start w-full px-20">
        <div className="flex-center flex-row font-thin text-xs gap-2">
          <span
            onClick={() => setSelectedCategory("All")}
            className={`tab p-0.5 px-2 ${
              selectedCategory === "All"
                ? "bg-black text-white"
                : "bg-white/90 text-black"
            }`}
          >
            VIEW ALL
          </span>

          {maincategory.map((cat, index) => (
            <span
              key={index}
              onClick={() => { setSelectedCategory(cat); setSelectedSub(""); }}
              className={`tab p-0.5 px-2 ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-white/90 text-black"
              }`}
            >
              {cat.toUpperCase()}
            </span>
          ))}
        </div>

        <div className="mt-4 flex-center flex-row font-thin text-xs gap-2">
          {selectedCategory === "MAN" &&
            categoriesMen.map((sub, index) => (
              <span key={index}
                onClick={() => setSelectedSub(sub)}
                className={`tab p-0.5 px-2 ${
                  selectedSub === sub ? "bg-black text-white" : "bg-white/90 text-black"
                }`}
              >
                {sub}
              </span>
            ))
          }

          {selectedCategory === "WOMAN" &&
            categoriesWoman.map((sub, index) => (
              <span key={index}
                onClick={() => setSelectedSub(sub)}
                className={`tab p-0.5 px-2 ${
                  selectedSub === sub ? "bg-black text-white" : "bg-white/90 text-black"
                }`}
              >
                {sub}
              </span>
            ))
          }

          {selectedCategory === "KIDS" &&
            categoriesKids.map((sub, index) => (
              <span key={index}
                onClick={() => setSelectedSub(sub)}
                className={`tab p-0.5 px-2 ${
                  selectedSub === sub ? "bg-black text-white" : "bg-white/90 text-black"
                }`}
              >
                {sub}
              </span>
            ))
          }
        </div>

        <div className="w-full grid grid-cols-5 gap-8 px-5 py-10">
          {filteredProducts.map((item, index) => (
            <Product key={index} item={item} />
          ))}

          {filteredProducts.length === 0 && (
            <p className="text-center w-full py-20 text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}


export function Product({ index,item }) {

  const navigate = useNavigate();

  return (
    <div
      key={index}
      onClick={() => navigate(`/view/${item?.id}`)}
      className="relative flex flex-col gap-3 hover:shadow-lg transition-all cursor-pointer group"
    >
      {/* Image Wrapper */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50">

        {/* Image */}
        <img
          src={item.photos[0]}
          alt={"img"}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"/>

        {/* Fade Overlay */}
        <div className="
          absolute inset-0 
          bg-gradient-to-t from-black via-black/10 to-transparent 
          opacity-100 transition-opacity duration-300 
          group-hover:opacity-0
        ">

          <div className=" cursor-pointer absolute flex items-start flex-col gap-1 bottom-2 left-4 text-sm text-white font-light ">
            <h3 className="px-1 text-sm leading-tight  max-w-[80%] text-start">
              {item.name}
            </h3>

            <h3 className="px-1 pb-1 tab font-zara text-xs">{item.price}</h3>
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