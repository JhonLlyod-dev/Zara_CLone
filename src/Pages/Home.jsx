import { featured } from "../assets/Data";

import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-[#101010] flex-center flex-col gap-16 py-16 w-full mt-22">

        {/* ===================== HERO TITLE ===================== */}
        <h1 className="font-opti text-6xl text-white">THE NEW</h1>

        {/* ===================== DOUBLE IMAGE BANNER ===================== */}
        <div className="w-full flex items-center justify-between relative">

          {/* Left Image */}
          <img
            src="https://static.zara.net/assets/public/9cd3/53a1/e59e4a8396b1/52a7628c1419/image-1dsk-c92de31e-543f-40ad-a697-3eab12fd9616-default/image-1dsk-c92de31e-543f-40ad-a697-3eab12fd9616-default.jpg?ts=1762940094466&w=914"
            alt="img1"
            className="min-w-[740px]"
          />

          {/* Center Text */}
          <h1 className="absolute top-1/2 left-40 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl">
            THE NEW
            <br />
            COLLECTION <br />
            AUTUMN WINTER
            <br />
            ZW 2025
          </h1>

          {/* Right Image */}
          <img
            src="https://static.zara.net/assets/public/660f/5817/80634118a385/496325b88a15/09487712800-1-p/09487712800-1-p.jpg?ts=1762857159791&w=857"
            alt="img2"
            className="min-w-[740px]"
          />
        </div>

        {/* ===================== PRODUCT DESCRIPTION 1 ===================== */}
        <h2 className="font-opti text-center text-white space-y-2">
          <span className="block text-3xl ">ZW COLLECTIONS</span>
          <span className="block text-xl opacity-90">
            Mid-waist trousir made of satin fabric.
          </span>
          <span className="block text-xl opacity-90">
            Featuring matching pareo-style overlay.
          </span>
        </h2>

        {/* ===================== 3 IMAGE ROW ===================== */}
        <div className="w-full flex-center gap-2 mt-22">
          <img
            src="https://static.zara.net/assets/public/19e5/e3cf/651c4037a86c/c8e443dda202/05919200700-p/05919200700-p.jpg?ts=1762857159805&w=555"
            alt=""
          />
          <img
            src="https://static.zara.net/assets/public/1b6e/1d3e/7d0f4b628544/f3980b414760/09598099712-p/09598099712-p.jpg?ts=1762856879564&w=555"
            alt=""
          />
          <img
            src="https://static.zara.net/assets/public/b204/85ce/9a124e5f93f6/dd0cba697477/07149244700-p/07149244700-p.jpg?ts=1762857159862&w=555"
            alt=""
          />
        </div>

        {/* ===================== PRODUCT DESCRIPTION 2 ===================== */}
        <h2 className="font-opti text-center text-white space-y-2">
          <span className="block text-3xl ">
            BEADED LACE KNIT MIDI SKIRT
          </span>
          <span className="block text-xl opacity-90">
            Plain knit skirt with an elastic waist.
          </span>
          <span className="block text-xl opacity-90">
            A-line hem with matching embroidery, beads and lace.
          </span>
        </h2>

        {/* ===================== FEATURED GRID SECTION ===================== */}
        <div className="text-white mt-22 flex-center flex-col gap-10">

          <h1 className="font-opti text-4xl">ZW COLLECTIONS</h1>

          <div className="grid grid-cols-5 gap-4 px-4">
            {featured.map((item) => (
              <div key={item.id} onClick={() => navigate(`/view/${item.id}`)} className="cursor-pointer flex items-center flex-col gap-2">
                <img src={item.photos[0]} alt={item.name} />
                <h3 className="text-center font-light mt-4 px-4 tab">{item.name}</h3>
              </div>
            ))}
          </div>

          <button onClick={()=> navigate("/products/all")} className="border font-light transition-all ease-in duration-100 border-white p-2 px-8 hover:bg-white hover:text-black">
            View More
          </button>

        </div>

      </div>
    </div>
  );
}
