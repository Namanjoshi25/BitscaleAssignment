import { BellRingIcon,  CreditCard,   Layers,  Puzzle, Table } from "lucide-react";

export default function Sidebar() {
  return (
    <aside 
    className="w-12 bg-white   text-black flex flex-col items-center h-full border-r">
   
      <nav className="flex flex-col justify-between h-full ">
        <div className=" Top-navlinks flex flex-col space-y-3 p-3 ">
        <a href="#" className="p-2 transition-all rounded hover:bg-[#FEECDC] ">
        <Table />
        </a>
        <a href="#" className="p-2 transition-all rounded hover:bg-[#FEECDC] ">
          <Puzzle />
        </a>
        <a href="#" className="p-2 transition-all rounded hover:bg-[#FEECDC] ">
          <BellRingIcon />
        </a>
        </div>
        <div className="Bottom-navlinks flex flex-col space-y-3 p-3 ">
        <a href="#" className="p-2 transition-all rounded hover:bg-[#FEECDC] ">
          <CreditCard />
        </a>
        <a href="#" className="p-2 text-red-800 transition-all rounded hover:bg-[#FEECDC] ">
          <Layers/>
        </a>
        </div>
      </nav>
    </aside>
  );
}
