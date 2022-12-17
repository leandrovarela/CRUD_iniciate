const express = require("express");

const server = express();

server.use(express.json());

const contacts = ["Varela", "Robert", "Lukita"];

server.get("/contacts", (req, res) => {
  const { index } = req.params;

  return res.json(contacts[index]);
});

server.get("/contacts", (req, res) => {
  return res.json(contacts);
});

server.post("/contacts", (req, res) => {
  const { name } = req.body;

  return res.json(contacts.append(name));
});

server.put("/contacts", (req, res) => {
  const { index } = req.body;

  return res.json(contacts.(index, 1));
});

server.delete(`/contacts/${id}`, (req, res) => {
  const { index } = req.body;

  return res.json(contacts.splice(index, 1));
});

server.listen(5000);
