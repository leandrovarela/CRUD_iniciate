import { Button, TextField } from "@mui/material";
import React from "react";
const InputRender = (e) => {
  const id = Math.random();
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");

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
      <label>Name </label>
      <TextField
        value={name}
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
        value={phone}
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
        value={email}
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
