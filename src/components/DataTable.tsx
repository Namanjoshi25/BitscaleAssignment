"use client"


import React, { useState } from 'react';
import { Plus, PlayCircle, BookA, Aperture, Building2 } from 'lucide-react';

interface ColumnData {
  id: string;
  title: string;
  icon: React.ReactNode | null;
}
const DataTable = () => {
  const [columns, setColumns] = useState<ColumnData[]>([
    { id: 'input', title: 'Input Column', icon: <BookA size={16} /> },
    { id: 'status', title: 'Action Column', icon: <Aperture size={16} /> },
    { id: 'company', title: 'Enrich Company', icon: <Building2 size={16} /> },
  ]);

  const [rows, setRows] = useState([
    { id: 1, date: '2024-01-16 14:08', status: 'Loading data, Please wait', company: 'Bitscale Evaluation' },
    { id: 2, date: '2024-01-16 14:08', status: 'cell data size exceeds limit', company: 'BMW Evaluation' },
    { id: 3, date: '2024-01-16 14:08', status: 'https://www.linkedin.com/bits...', company: 'Google Evaluation' },
    { id: 4, date: '2024-01-16 14:08', status: 'Loading data, Please wait', company: 'Apple Evaluation' },
    { id: 5, date: '2024-01-16 14:08', status: 'Loading data, Please wait', company: 'Figma Evaluation' },
  ]);

  const totalRows = 20; // Total number of visible rows

  const [editingCell, setEditingCell] = useState<{ rowId: number; columnId: string } | null>(null);
  const [editValue, setEditValue] = useState<string>('');
  const [editingColumn, setEditingColumn] = useState<string | null>(null);
  const [editColumnValue, setEditColumnValue] = useState<string>('');
  const handleCellEdit = (rowId: number, columnId: string) => {
   console.log("RowId-" + rowId + "ColmnId" + columnId) ;
   console.log(rows,columns);
  console.log(editValue);
    if(editValue.length > 20){
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId
          ? {
              ...row,
              [columnId]: "Cell data size exceed limit",
            }
          : row
      )
    );
  }else{
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId
          ? {
              ...row,
              [columnId]: editValue,
            }
          : row
      )
    );

  }
 
    setEditingCell(null); // Exit edit mode
  };

  const handleColumnEdit = (columnId: string) => {
    
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.id === columnId
          ? {
              ...col,
              title: editColumnValue,
            }
          : col
      )
    );
    setEditingColumn(null); // Exit edit mode
  };

  const addColumn = () => {
    const newColumn = {
      id: `column${columns.length + 1}`,
      title: `Column ${columns.length + 1}`,
      icon: null,
    };
    setColumns([...columns, newColumn]);
    setRows((prevRows) =>
      prevRows.map((row) => ({
        ...row,
        [newColumn.id]: "",
      })))      
  };

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      date: new Date().toISOString().slice(0, 16).replace('T', ' '),
      status: '',
      company: '',
    };
    setRows([...rows, newRow]);
  };

  return (
    <div className="w-full overflow-auto bg-gray-100">
      <div className="relative w-full">
        <table className="border-collapse text-[14px] table-fixed w-full">
          <thead className="sticky top-0 bg-gray-300 z-10">
            <tr>
              <th className="w-6 h-[32px] text-[14px] font-medium text-gray-500 tracking-wider border border-gray-300 bg-gray-100"></th>
              <th className="w-6 text-left text-xs font-medium text-gray-500 tracking-wider border border-gray-300 bg-gray-100"></th>
              {columns.map((column) => (
                <th
                  key={column.id}
                  className="w-48 ml-1 text-left font-medium text-black border border-gray-300 bg-gray-100"
                  onDoubleClick={() => {
                    setEditingColumn(column.id);
                    setEditColumnValue(column.title);
                  }}
                >
                  {editingColumn === column.id ? (
                    <input
                      type="text"
                      className="w-full h-full border-none focus:outline-none"
                      value={editColumnValue}
                      onChange={(e) => setEditColumnValue(e.target.value)}
                      onBlur={() => handleColumnEdit(column.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleColumnEdit(column.id);
                        }
                      }}
                      autoFocus
                    />
                  ) : (
                    <p className="flex text-xs text-left items-center ml-1 gap-x-1">
                      {column.icon ? column.icon : <Aperture size={16}/>} {column.title}
                    </p>
                  )}
                </th>
              ))}
              <th className="w-full text-left text-xs font-medium text-gray-500 border border-gray-300 bg-gray-100">
                <button
                  onClick={addColumn}
                  className="text-slate-700 flex hover:text-gray-500 focus:outline-none"
                >
                  <p className="text-[10px] font-semibold flex items-center">
                    <Plus className="w-4 h-3" strokeWidth={2.5} /> <span className="hidden lg:block"> Add column</span>
                  </p>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="h-6 text-slate-600 text-xs">
                <td className="w-6 whitespace-nowrap border border-gray-300 bg-white text-center">{row.id}</td>
                <td className="w-6 whitespace-nowrap border border-gray-300 bg-white text-center">
                  <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                    <PlayCircle className="w-4 h-4 text-purple-700" />
                  </button>
                </td>
                {columns.map((column,colIndex) => (
                  <td
                    key={`${row.id}-${column.id}`}
                    className="w-48 overflow-hidden h-8 px-4 py-2 whitespace-nowrap border border-gray-300 bg-white"
                    onDoubleClick={() => {
                      setEditingCell({ rowId: row.id, columnId: column.id });
                      setEditValue((row as any)[column.id] || '');
                    }}
                  >
                    {editingCell?.rowId === row.id && editingCell.columnId === column.id ? (
                      <input
                        type="text"
                        className="w-full h-full border-none focus:outline-none"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={() => handleCellEdit(row.id, column.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleCellEdit(row.id, column.id);
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <span className=' text-black'>   {
                        colIndex === 0
                        ? row.date
                        : colIndex === 1
                        ? row.status 
                        : row.company}
                        </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
            {[...Array(totalRows - rows.length)].map((_, index) => (
              <tr key={`empty-row-${index}`} className="bg-gray-100">
                <td className="w-6 border border-gray-300 bg-gray-100"></td>
                {columns.map((_, colIndex) => (
                  <td
                    key={`empty-${index}-${colIndex}`}
                    className="w-48 h-8 px-4 whitespace-nowrap border border-gray-300 bg-gray-100"
                  >
                    {index === 0 && colIndex === 0 && (
                      <button
                        onClick={addRow}
                        className="w-full flex items-center ml-2 mt-1 text-slate-700 hover:text-gray-500 focus:outline-none"
                      >
                        <p className="text-[10px] font-semibold flex items-center">
                          <Plus className="w-4 h-3" strokeWidth={2.5} /> Add row
                        </p>
                      </button>
                    )}
                  </td>
                ))}
                <td className="w-full border border-gray-300 bg-gray-100"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
