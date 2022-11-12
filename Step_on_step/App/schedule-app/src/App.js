import { Box, Link } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import TableSmart from "./components/tableSmart";
import "./styles/App.css";
import contacts from "./components/sql/database";
//  createContact from "./components/createContact";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.google.com/search?q=croquetes&oq=croquetes&aqs=chrome..69i57j46i433i512j0i433i512j0i512l7.1167j1j4&sourceid=chrome&ie=UTF-8"
      >
        Varelinha dos Croquete
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

export default function onSubmit() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      id: contacts.leghth + 1,
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="ls">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h3">
            Varela's Contacts
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <label>Name </label>
            <TextField
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
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Box>
          <TableSmart />
        </Box>
      </Container>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </ThemeProvider>
  );
}
