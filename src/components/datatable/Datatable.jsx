/** @format */

import React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${
        params.row.lastName || ""
      }` /*kombinovanje vrednosti unutar redova, parametar uzima vrednost ako je navedena ili prazno mesto ako je nema */,
  },
];

const rows = [
  { id: 1, lastName: "Macoll", firstName: "Ann", age: 35 },
  { id: 2, lastName: "Morse", firstName: "Endevoir", age: 42 },
  { id: 3, lastName: "Sead", firstName: "Nicole", age: 45 },
  { id: 4, lastName: "Konor", firstName: "Emma", age: 16 },
  { id: 5, lastName: "Rajski", firstName: "Aleksej", age: null },
  { id: 6, lastName: "Holms", firstName: null, age: 150 },
  { id: 7, lastName: "Copola", firstName: "Sofia", age: 44 },
  { id: 8, lastName: "Alderson", firstName: "James", age: 36 },
  { id: 9, lastName: "Henderson", firstName: "Mark", age: 65 },
];

export const Datatable = () => {
  return (
    <div className='datatable'>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
