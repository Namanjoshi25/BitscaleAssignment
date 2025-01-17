import { ArrowUpDown, Columns3, Database, Download, Filter, Search, Share2, Sparkles, Trash2 } from "lucide-react";

const TableToolbar = () => {

  const toolbarOptions=[
    {
      icon :<Database size={12} />,
    name : "Row",
    quant: "1/1"
       

    },
    {
      icon :<Columns3 size={12} />,
    name : "Column",
    quant: "1/1"
       

    },
    {
      icon : <Filter size={12} />,
    name : "Filter",
    quant: "0"
       

    },
    {
      icon :<ArrowUpDown size={12} />,
    name : "Sort",
  
       

    }
  ]
    return (
        <div className="hidden  lg:flex w-full  items-center justify-between bg-white p-3  ">
          {/*Search bar and Toolbar */}
          <div className=" flex  justify-between  ">
          <div className=" bg-slate-100 gap-1 items-center  p-1 flex w-[384px]  rounded-lg">
          <Search className=" ml-2 text-black h-4"/>
        <input
          type="text"
          placeholder="Search"
          className=" bg-slate-100   text-slate-700 text-sm rounded-lg  w-3/4 focus:outline-none  "
        />
        </div> 
         {/*Toolbar Options */}
        <div className=" flex   items-center ml-8">
        {toolbarOptions.map((option)=>(
          <div key={option.name} className="  text-black flex items-center justify-center text-[12px] px-3 py-2 ">
             <div className=" ">{option.icon}</div>
           <p className=" mx-1  font-medium">
             <span className="">{ option.quant && option.quant} </span>
             {option.name}
             </p>
           
            
            
          </div>
        ))}
        </div>
        </div>
       
        <div className="flex items-center space-x-4  mr-4">
          <button className=" flex items-center gap-1 px-2 py-[6px] text-xs  bg-black text-white rounded-lg ">
            <Sparkles size={12} />  Enrich
          </button>
          <div className=" gap-x-4 flex text-sm text-black">
          <Share2  strokeWidth={2.5} size={16}/>
          <Download strokeWidth={2.5}  size={16}/>
          <Trash2 strokeWidth={2.5} size={16} className=" text-red-500"/>
          </div>
        </div>
      </div>
    );
  };
  
  export default TableToolbar;
  