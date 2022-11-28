import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, TextField } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import React, { useState } from "react";
import contacts from "../database/db";

const columns = [
  { field: "name", headerName: "Name", width: 400, editable: true },
  { field: "email", headerName: "Email", width: 300, editable: true },
  {
    field: "phone",
    headerName: "Phone",
    width: 200,
    type: "String",
    editable: true,
  },

  {
    field: "edit",
    headerName: "Edit",
    type: "actions",
    width: 100,
    getActions: (row) => [
      <GridActionsCellItem
        //onClick={updateContact(row.id)}
        icon={<EditIcon />}
        label="Edit"
      />,
    ],
  },
  {
    field: "delete",
    headerName: "Delete",
    type: "actions",
    width: 100,

    getActions: (row) => [
      <GridActionsCellItem
        onClick={() => deleteContact(row.id)}
        icon={<DeleteIcon />}
        label="Delete"
      />,
    ],
  },
];

const ContactRenders = () => {
  // Hooks for getInputs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [rows, setRows] = useState(contacts);

  //Create Function Delete
  const deleteContact = (id) => {
    setRows((prevRows) => prevRows.filter((rows) => rows.id !== id));
  };

  //Create Funtion Update

  //const updateContact = useCallback(
  // (id) => () => {
  // setRows((oldRows) =>
  //   oldRows.filter((array) => array.id.indexOf("id") !== -1)
  // );
  // console.log(setRows(id));
  //},
  //[]
  //);

  // Function for Create Contacts
  const createContact = () => {
    const newContact = { id: Date.now() * Math.random(), name, phone, email };
    const contact_temp = [...rows];

    contact_temp.push(newContact);

    console.log(newContact);
    if (typeof newContact !== "undefined") setRows(contact_temp);
  };

  const handleSubmit = () => {
    createContact();
  };

  // fetch("http://localhost:5000/contacts/", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((resp) => resp.json())
  //   .then((data) => {
  //     id, name(data), phone(data), email(data);
  //   })
  //   .catch((err) => console.log(err));

  return (
    <>
      <div className="form-input">
        <label>Name </label>
        <TextField
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name Full"
          name="name"
          autoComplete="name"
          autoFocus
        />
        <label>Phone </label>
        <TextField
          onChange={(e) => setPhone(e.target.value)}
          margin="normal"
          required
          fullWidth
          name="phone"
          label="Phone (xx)xxxxxxx"
          type="phone"
          id="phone"
          autoComplete="phone"
        />
        <label>Email </label>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Digityour@email.com"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <Button
          type="submit"
          id="button"
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[1]}
        />
      </div>
    </>
  );
};

export default ContactRenders;
