import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

const ContactRenders = () => {
  // Hooks for getInputs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState([]);
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(contact);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 30,
    p: 5,
  };

  //GetAllContacts
  const getContacts = () => {
    fetch("http://localhost:5200/contacts/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setContact(data);
      });
  };

  useEffect(() => {
    getContacts();
  }, []);

  //Create
  const createContact = (name, phone, email) => {
    fetch("http://localhost:5200/contacts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now() * Math.random(),
        name: name,
        phone: phone,
        email: email,
      }),
    });
  };

  //Delete
  const deleteContact = (id) => {
    fetch(`http://localhost:5200/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    getContacts();
  };
  //Update
  const updateContact = (id, contat) => {
    setUpdate(id);
    fetch(`http://localhost:5200/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: contat.name,
        phone: contat.phone,
        email: contat.email,
      }),
    });
  };
  //Handles
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClearInputs = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (name) => (name.value = "")
    );
    Array.from(document.querySelectorAll("input")).forEach(
      (phone) => (phone.value = "")
    );
    Array.from(document.querySelectorAll("input")).forEach(
      (email) => (email.value = "")
    );
  };

  const handleSubmit = () => {
    getContacts();
    createContact(name, phone, email);
    handleClearInputs();
  };
  const handleUpdate = (id) => {
    updateContact(id, contact);
    handleClose();
    getContacts();
  };

  //BaseTable
  const columns = [
    { field: "name", headerName: "Name", width: 400, editable: true },
    {
      field: "phone",
      headerName: "Phone",
      width: 200,
      type: "String",
      editable: true,
    },
    { field: "email", headerName: "Email", width: 300, editable: true },

    {
      field: "edit",
      headerName: "Edit",
      type: "actions",
      width: 100,
      getActions: (e) => [
        <GridActionsCellItem
          onClick={() => handleOpen()}
          icon={<EditIcon />}
          label="Edit"
        />,
        <Modal
          open={open}
          onClose={() => handleClose()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Update Contact
            </Typography>
            <TextField
              onChange={(e) =>
                setUpdate((arg) => ({ ...arg, name: e.target.value }))
              }
            ></TextField>
            <TextField
              onChange={(e) =>
                setUpdate((arg) => ({ ...arg, phone: e.target.value }))
              }
            ></TextField>
            <TextField
              onChange={(e) =>
                setUpdate((arg) => ({ ...arg, email: e.target.value }))
              }
            ></TextField>
            <Button
              onClick={() => handleUpdate(e.id, e.update)}
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 5 }}
            >
              Update
            </Button>
          </Box>
        </Modal>,
      ],
    },
    {
      field: "delete",
      headerName: "Delete",
      type: "actions",
      width: 100,

      getActions: (e) => [
        <GridActionsCellItem
          onClick={() => deleteContact(e.id)}
          icon={<DeleteIcon />}
          label="Delete"
        />,
      ],
    },
  ];

  return (
    <>
      <div className="form-input">
        <label> Name </label>
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
          onClick={() => handleSubmit()}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={contact}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[6]}
        />
      </div>
    </>
  );
};

export default ContactRenders;
