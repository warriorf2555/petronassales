import "./App.css";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ResponsiveDrawer from "./Drawer";

function App() {
  const [sales, setSalesReport] = useState([]);

  useEffect(() => {
    fetch("/api/Reports")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSalesReport(data);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "date", headerName: "Date", width: 130 },
    { field: "documentId", headerName: "DocumentId", width: 130 },
    { field: "grossMargin", headerName: "Gross Margin", width: 130 },
    { field: "salesVolume", headerName: "Sales Volume", width: 130 },
    { field: "liquidTypeId", headerName: "Liquid Type Id", width: 130 },
    { field: "stationTypeId", headerName: "Station Type Id", width: 130 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveDrawer
          children={
            <DataGrid
              rows={sales}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          }
        />
      </header>
    </div>
  );
}

export default App;
