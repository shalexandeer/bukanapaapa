import React from "react";

interface Column {
  header: string;
  accessor: string;
  className?: string;
  Cell?: (value: any, row: any) => JSX.Element;
}

interface TableProps {
  columns: Column[];
  data: any[];
  currentPage: number;
  itemsPerPage: number;
}

const Table: React.FC<TableProps> = ({ columns, data, currentPage, itemsPerPage }) => {
  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr className="text-base">
            {columns.map((column) => (
              <th key={column.accessor} className={column.className ? column.className : ""}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center">
                No Data Found
              </td>
            </tr>
          ) : (
            paginatedData.map((row) => (
              <tr key={row.id} className="text-base">
                {columns.map((column) => (
                  <td key={column.accessor}>
                    {column.Cell ? column.Cell(row[column.accessor], row) : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
