'use client'
import { ArrowLeft, CheckCircle2, User } from "lucide-react";
import { useState } from "react";

const Topbar = () => {
  const [isAutoSave, setIsAutoSave] = useState(true);
  const [fileName, setFileName] = useState("Enter file name");
  const [editFileName, setEditFileName] = useState(false);

  const toggleAutoSave = () => {
    setIsAutoSave((prev) => !prev);
  };
    return (
        <header className="h-10  z-50 bg-white flex items-center justify-between px-6 border-b border-gray-200   gap-3">
      
          <div className=" flex items-center ">  
          <span>
            <ArrowLeft size={17} color="#000"/>
          </span>
          {
            !editFileName ? (
              <p
              className="text-xs ml-3 text-slate-500 font-medium"
               onClick={()=>setEditFileName(true)}>
                {fileName}
              </p>
            ): (
              <>
                <input 
              placeholder="Enter file name"
              onChange={(e)=>setFileName(e.target.value)}
              value={fileName}
               className=" bordor-none focus:outline-none text-xs ml-3 text-slate-700 font-medium"
                type="text" 
                 />
                 <CheckCircle2 onClick={()=>{
                  setEditFileName(false)
                 }} className=" text-green-500" size={16}/>
                 </>
            )
          }
         
             </div>

             <div className="flex items-center space-x-2">
      {/* Toggle Switch */}
      <div
        className={`relative w-8 h-4 flex items-center rounded-full cursor-pointer ${
          isAutoSave ? "bg-green-500" : "bg-gray-400"
        }`}
        onClick={toggleAutoSave}
      >
        <div
          className={`absolute w-3 h-3 bg-white rounded-full shadow transition-transform ${
            isAutoSave ? "transform translate-x-4" : "transform translate-x-1"
          }`}
        ></div>
      </div>

      {/* Switch Label */}
      <div className="flex items-center space-x-4">
        <span className={`text-xs font-medium mr-2  ${isAutoSave ? "text-green-600" : "text-gray-500"}`}>
          Auto Save
        </span>
   
      </div>
       {/*User Profile */}
      <div className="bg-[#FEECDC] rounded-full h-7 w-7 flex items-center justify-center ">
        <User size={16} className=" text-orange-500  "/>
        </div>

    </div>
   

    
        
      </header>
    );
  };
  
  export default Topbar;
  