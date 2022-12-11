import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, TextField } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

const clearContact = {
  id: "",
  name: "",
  phone: "",
  email: "",
};

const ContactRenders = () => {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(clearContact);

  const createContact = () => {
    const { name, phone, email } = currentContact;

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
    }).then(() => {
      getContacts();
    });
  };

  const getContacts = () => {
    fetch("http://localhost:5200/contacts/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setContacts(data);
      });
  };

  const deleteContact = (id) => {
    fetch(`http://localhost:5200/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getContacts();
    });
  };

  const updateContact = () => {
    const { id, name, phone, email } = currentContact;

    fetch(`http://localhost:5200/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        phone,
        email,
      }),
    }).then(() => {
      getContacts();
    });
  };

  const handleClearInputs = () => {
    setCurrentContact(clearContact);
  };

  const handleSubmit = () => {
    handleClearInputs();

    if (currentContact.id) {
      updateContact();
    } else {
      createContact(currentContact);
    }
  };

  const handleUpdate = (id) => {
    const index = contacts.findIndex((contact) => contact.id === id);
    const contact = contacts[index];

    setCurrentContact(contact);
  };

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
          onClick={() => handleUpdate(e.id)}
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

      getActions: (e) => [
        <GridActionsCellItem
          onClick={() => deleteContact(e.id)}
          icon={<DeleteIcon />}
          label="Delete"
        />,
      ],
    },
  ];

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <div className="form-input">
        <TextField
          value={currentContact.name}
          onChange={(e) =>
            setCurrentContact((prev) => ({ ...prev, name: e.target.value }))
          }
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
          value={currentContact.phone}
          onChange={(e) =>
            setCurrentContact((prev) => ({ ...prev, phone: e.target.value }))
          }
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
          value={currentContact.email}
          onChange={(e) =>
            setCurrentContact((prev) => ({ ...prev, email: e.target.value }))
          }
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
          rows={contacts}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[6]}
        />
      </div>
    </>
  );
};

export default ContactRenders;
