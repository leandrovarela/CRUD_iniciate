import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import * as React from "react";
export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}

const columns = [
  { field: "name", headerName: "Name", width: 200, editable: true },
  { field: "email", headerName: "Email", width: 230, editable: true },
  {
    field: "phone",
    headerName: "Phone",
    width: 230,
    type: "String",
    editable: true,
  },

  {
    field: "edit",
    headerName: "Edit",
    type: "actions",
    width: 100,
    getActions: () => [
      <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
    ],
  },
  {
    field: "delete",
    headerName: "Delete",
    type: "actions",
    width: 100,

    getActions: () => [
      <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
    ],
  },
];
const rows = [];
