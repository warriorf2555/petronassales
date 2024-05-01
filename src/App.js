import "./App.css";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import ResponsiveDrawer from "./Drawer";

function App() {
  const [sales, setSalesReport] = useState([]);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    fetch("/api/Reports")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSalesReport(data);
      });
  }, []);

  console.log("rowselectionmode", rowSelectionModel);

  const columns = [
    { field: "date", headerName: "Date", width: 130 },
    { field: "documentId", headerName: "Document ID", width: 130 },
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
            <>
              <Box component="form" noValidate autoComplete="off" display={"flex"} pb={2}>
                <Box pr={2}>
                  <TextField id="outlined-basic" label="Search" variant="outlined" />
                </Box>
                <Box sx={{ minWidth: "200px" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Liquid Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Liquid Type"
                      onChange={handleChange}
                    >
                      <MenuItem value={"RON95"}>RON95</MenuItem>
                      <MenuItem value={"RON97"}>RON97</MenuItem>
                      <MenuItem value={"DIESEL"}>DIESEL</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>

              <DataGrid
                rows={sales}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10, 20]}
                onRowSelectionModelChange={(newRowSelectionModel) => {
                  console.log("newRowSelectionModel", newRowSelectionModel);
                  setRowSelectionModel(newRowSelectionModel);
                }}
                rowSelectionModel={rowSelectionModel}
                checkboxSelection
                disableRowSelectionOnClick
                autoHeight
              />
            </>
          }
        />
      </header>
    </div>
  );
}

export default App;
