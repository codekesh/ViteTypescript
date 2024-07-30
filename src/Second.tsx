import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, gridClasses } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Title",
    width: 300,
  },
  {
    field: "body",
    headerName: "Body",
    width: 300,
  },
];

const Second = () => {
  const [records, setRecords] = useState([] as any);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* Componenet 1 */}
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={records}
          columns={columns}
          getRowHeight={() => "auto"}
          sx={{
            [`& .${gridClasses.cell}`]: {
              py: 1,
            },
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 3,
              },
            },
          }}
          disableRowSelectionOnClick
        />
      </Box>
      {/* Component 2 */}
    </>
  );
};

export default Second;
