import Logo from "../assets/Logo";
import { useState, useEffect } from "react";
import { Search,Handbag,TextAlignJustify,X,UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [SidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();

  const [Searching, setSearch] = useState("");


  return (
    <div className="">
      {SidebarOpen && <Sidebar close={()=>setSidebarOpen(false)} />}
      <div className={`${scrollY ? "bg-white/90 " : "bg-transparent"} transition-all duration-300  fixed top-0 left-0 w-full z-10 p-6 px-8 flex items-center justify-between`}>
        <div onClick={()=> navigate("/")} className="cursor-pointer">
          <Logo size={"100"}/>
        </div>

        <div className="flex-center gap-10 font-light text-sm">
          
          <div className="px-4 pr-2 py-1 border-b border-b-black flex-center gap-1">
            <input type="text" onChange={(e) => setSearch(e.target.value)} value={Searching} placeholder="Search"  className=" w-full font-light outline-0"/>
            <button onClick={()=> navigate(`/products/All/${Searching}`)}  className="cursor-pointer">
              <Search size={16} strokeWidth={1} />
            </button>
          </div>

          <button onClick={() => navigate("/account")} className="flex-center flex-row gap-2 tab p-0.5">GEORGE BUGWAK <UserRound  size={18} strokeWidth={1} /></button>

          <button onClick={()=> navigate("/cart")} className="flex-center flex-row gap-2 tab p-0.5">SHOPPING BAG<Handbag size={16} strokeWidth={1}/></button>

          <span onClick={()=> setSidebarOpen(true)} className="">
            <TextAlignJustify size={20} strokeWidth={1} />
          </span>
        </div>
      </div>
    </div>
  );
}

function Sidebar({close}) {

  const navigate = useNavigate();

  return (
    <div className="fixed motion-preset-fade-lg z-20 top-0 bottom-0 right-0 left-0 bg-black/40 backdrop-blur-xs flex-center justify-end ">
      <div className="bg-white motion-preset-fade-lg motion-delay-200 w-2xl h-full">
      <div className="py-6 px-8 w-full flex-center justify-between">
        <Logo size={"100"}/>
          <button onClick={close}>
            <X size={24} strokeWidth={1} />
          </button>
      </div>

      <div className="p-8 font-light flex gap-20  ">
        <div className="flex flex-col gap-3">
          <h2 className="font-zara">CATEGORIES</h2>
          <ul className="pl-2 flex items-start flex-col gap-3">
            <li onClick={()=>{close(); navigate('/products/WOMAN')}}  className="tab">WOMAN</li>
            <li onClick={()=>{close(); navigate('/products/MAN')}} className="tab">MAN</li>
            <li onClick={()=>{close(); navigate('/products/KIDS')}} className="tab">KIDS</li>
            <li onClick={()=>{close(); navigate('/products/50TH')}} className="tab">50TH ANNIVERSARRY</li>
            <li onClick={()=>{close(); navigate('/products/PERFUMES')}} className="tab">PERFUMES</li>
            <li className="font-medium tab">TRAVEL MODE</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-zara ">COMPANY</h2>
          <ul className="pl-2 flex items-start flex-col gap-3">
            <li className="tab">ABOUT</li>
            <li className="tab">HELP</li>
            <li className="font-medium tab">THE GUIDES</li>
          </ul>
        </div>
      </div>



      </div>  
    </div>
  )
}
