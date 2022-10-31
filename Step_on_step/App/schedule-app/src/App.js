import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import "./App.css";

import Typography from "@mui/material/Typography";
import * as React from "react";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Submit() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
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
            Varela's schedule
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
              Subimit
            </Button>
          </Box>
        </Box>
        <Box>
          <Stack
            direction="column"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}
          >
            <Grid id="resgistredContact" item xs={8}>
              <Item style={{ alignItems: "flex-start" }}>
                Name: Jacare Boladao Phone: 21 98064654564 Email:
                Jacare@lacoste.com
                <Button>
                  <DeleteIcon />
                </Button>
                <Button>
                  <EditIcon />
                </Button>
              </Item>
            </Grid>
            <Grid id="resgistredContact" item xs={8}>
              <Item>
                Name: Jacatatu Boladao Phone: 21 975555564 Email:
                Jacatatu@lacoste.com
                <Button>
                  <DeleteIcon />
                </Button>
                <Button>
                  <EditIcon />
                </Button>
              </Item>
            </Grid>
            <Grid id="resgistredContact" item xs={8}>
              <Item>
                Name: Jacaroa Boladona Phone: 21 94654564 Email:
                Jacaroa@lacoste.com
                <Button>
                  <DeleteIcon />
                </Button>
                <Button>
                  <EditIcon />
                </Button>
              </Item>
            </Grid>
          </Stack>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
