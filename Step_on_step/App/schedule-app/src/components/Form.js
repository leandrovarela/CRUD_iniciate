import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Copyright from "./copyright";
import InputRender from "./Inputs";
import DataTable from "./tableSmart";
const theme = createTheme();

export default function ThemeFull() {
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
        </Box>
        <InputRender />
        <Box>
          <DataTable />
        </Box>
      </Container>
      <Copyright />
    </ThemeProvider>
  );
}
