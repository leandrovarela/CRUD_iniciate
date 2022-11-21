import { Button, TextField } from "@mui/material";
import React from "react";
const InputRender = (e) => {
  const id = Math.random();
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");

  fetch(`http://localhost:5000/contacts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(e),
  })
    .then((resp) => resp.json())
    .then((data) => {
      {
        id, setName(data), setPhone(data), setEmail(data);
      }
    })
    .catch((err) => console.log(err));

  return (
    <>
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
        onChange={(e) => setName(e.target.value)}
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
        onChange={(e) => setName(e.target.value)}
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
        // onSubmit={submit}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Submit
      </Button>
    </>
  );
};
export default InputRender;
