import Sidebar from "@/components/Sidebar";
import TableToolbar from "@/components/TableToolbar";
import Topbar from "@/components/Topbar";
import DataTable from "@/components/DataTable";



export default function Home() {
  return (
    <div className="flex flex-col  h-screen bg-gray-100">
    {/* Sidebar */}
    <Topbar />
   

    {/* Main Content */}
    <div className="flex h-full w-full   ">
      {/* Topbar */}
      <Sidebar />

      {/* Table Section */}
      <div className="  flex-1    bg-gray-50">
        {/* Toolbar */}
        <TableToolbar />

        {/* Data Table */}
        <DataTable />
      </div>
    </div>
  </div>
  );
}
