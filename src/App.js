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
  const [sales, setSalesReport] = useState([
    {
      id: 1,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV758",
      grossMargin: -70,
      salesVolume: 17,
      liquidTypeId: 2,
      stationTypeId: 7,
    },
    {
      id: 27,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV481",
      grossMargin: 50,
      salesVolume: 122,
      liquidTypeId: 1,
      stationTypeId: 7,
    },
    {
      id: 53,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV662",
      grossMargin: -7,
      salesVolume: 481,
      liquidTypeId: 3,
      stationTypeId: 7,
    },
    {
      id: 79,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV187",
      grossMargin: 29,
      salesVolume: 985,
      liquidTypeId: 2,
      stationTypeId: 3,
    },
    {
      id: 105,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV412",
      grossMargin: -78,
      salesVolume: 101,
      liquidTypeId: 1,
      stationTypeId: 3,
    },
    {
      id: 131,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV19",
      grossMargin: 52,
      salesVolume: 293,
      liquidTypeId: 3,
      stationTypeId: 3,
    },
    {
      id: 157,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV778",
      grossMargin: -81,
      salesVolume: 307,
      liquidTypeId: 2,
      stationTypeId: 8,
    },
    {
      id: 183,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV25",
      grossMargin: 44,
      salesVolume: 405,
      liquidTypeId: 1,
      stationTypeId: 8,
    },
    {
      id: 209,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV805",
      grossMargin: -53,
      salesVolume: 962,
      liquidTypeId: 3,
      stationTypeId: 8,
    },
    {
      id: 235,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV328",
      grossMargin: -2,
      salesVolume: 603,
      liquidTypeId: 2,
      stationTypeId: 2,
    },
    {
      id: 261,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV329",
      grossMargin: -71,
      salesVolume: 861,
      liquidTypeId: 1,
      stationTypeId: 2,
    },
    {
      id: 287,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV227",
      grossMargin: -4,
      salesVolume: 622,
      liquidTypeId: 3,
      stationTypeId: 2,
    },
    {
      id: 313,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV76",
      grossMargin: -98,
      salesVolume: 391,
      liquidTypeId: 2,
      stationTypeId: 0,
    },
    {
      id: 339,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV577",
      grossMargin: 45,
      salesVolume: 997,
      liquidTypeId: 1,
      stationTypeId: 0,
    },
    {
      id: 365,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV140",
      grossMargin: -30,
      salesVolume: 171,
      liquidTypeId: 3,
      stationTypeId: 0,
    },
    {
      id: 391,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV763",
      grossMargin: 34,
      salesVolume: 736,
      liquidTypeId: 2,
      stationTypeId: 10,
    },
    {
      id: 417,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV409",
      grossMargin: -93,
      salesVolume: 748,
      liquidTypeId: 1,
      stationTypeId: 10,
    },
    {
      id: 443,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV485",
      grossMargin: 25,
      salesVolume: 964,
      liquidTypeId: 3,
      stationTypeId: 10,
    },
    {
      id: 469,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV840",
      grossMargin: 45,
      salesVolume: 759,
      liquidTypeId: 2,
      stationTypeId: 6,
    },
    {
      id: 495,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV551",
      grossMargin: 59,
      salesVolume: 36,
      liquidTypeId: 1,
      stationTypeId: 6,
    },
    {
      id: 521,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV303",
      grossMargin: -96,
      salesVolume: 539,
      liquidTypeId: 3,
      stationTypeId: 6,
    },
    {
      id: 547,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV826",
      grossMargin: -7,
      salesVolume: 87,
      liquidTypeId: 2,
      stationTypeId: 5,
    },
    {
      id: 573,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV100",
      grossMargin: -49,
      salesVolume: 806,
      liquidTypeId: 1,
      stationTypeId: 5,
    },
    {
      id: 599,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV508",
      grossMargin: -27,
      salesVolume: 143,
      liquidTypeId: 3,
      stationTypeId: 5,
    },
    {
      id: 625,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV149",
      grossMargin: 86,
      salesVolume: 941,
      liquidTypeId: 2,
      stationTypeId: 1,
    },
    {
      id: 651,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV959",
      grossMargin: 75,
      salesVolume: 695,
      liquidTypeId: 1,
      stationTypeId: 1,
    },
    {
      id: 677,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV297",
      grossMargin: 70,
      salesVolume: 340,
      liquidTypeId: 3,
      stationTypeId: 1,
    },
    {
      id: 703,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV372",
      grossMargin: 37,
      salesVolume: 121,
      liquidTypeId: 2,
      stationTypeId: 4,
    },
    {
      id: 729,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV135",
      grossMargin: 20,
      salesVolume: 504,
      liquidTypeId: 1,
      stationTypeId: 4,
    },
    {
      id: 755,
      date: "2022-01-01 00:00:00",
      documentId: "PET-INV687",
      grossMargin: 21,
      salesVolume: 416,
      liquidTypeId: 3,
      stationTypeId: 4,
    },
    {
      id: 756,
      date: "2022-02-01 00:00:00",
      documentId: "PET-INV47",
      grossMargin: 6,
      salesVolume: 731,
      liquidTypeId: 3,
      stationTypeId: 4,
    },
    {
      id: 730,
      date: "2022-02-01 00:00:00",
      documentId: "PET-INV827",
      grossMargin: 85,
      salesVolume: 944,
      liquidTypeId: 1,
      stationTypeId: 4,
    },
    {
      id: 704,
      date: "2022-02-01 00:00:00",
      documentId: "PET-INV349",
      grossMargin: 4,
      salesVolume: 953,
      liquidTypeId: 2,
      stationTypeId: 4,
    },
    {
      id: 678,
      date: "2022-02-01 00:00:00",
      documentId: "PET-INV813",
      grossMargin: -73,
      salesVolume: 450,
      liquidTypeId: 3,
      stationTypeId: 1,
    },
  ]);
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

  const columns = [
    { field: "date", headerName: "Date", width: 130 },
    { field: "documentId", headerName: "Document ID", width: 130 },
    { field: "grossMargin", headerName: "Gross Margin", width: 130 },
    { field: "salesVolume", headerName: "Sales Volume", width: 130 },
    { field: "liquidTypeId", headerName: "Liquid Type", width: 130 },
    { field: "stationTypeId", headerName: "Station Type", width: 130 },
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
