const { response } = require("express");
const express = require("express");

const server = express();

server.use(express.json());

const contacts = [
  {
    id: 1,
    name: "LEANDRO VARELA PEREIRA",
    phone: "+55(21) 97477 - 0964",
    email: "varela@gmail.com",
  },
  {
    id: 2,
    name: "LUCAS VARELA PEREIRA",
    phone: "+55(21) 97477 - 0964",
    email: "lucas@gmail.com",
  },
  {
    id: 3,
    name: "ROBERT VARELA PEREIRA",
    phone: "+55(21) 97477 - 0964",
    email: "robert@gmail.com",
  },
  {
    id: 4,
    name: "JUNIOR VARELA PEREIRA",
    phone: "+55(21) 97477 - 0964",
    email: "melynx@gmail.com",
  },
];

server.get("/contacts", (req, res) => {
  return res.json(contacts);
});

server.get("/contacts/:id", (req, res) => {
  const { id } = request.params;

  const contact = contacts.find((contact) => contact.id === id);
  console.log(contact);

  return res.json(contact);
});

server.post("/contacts", (req, res) => {
  const { id, name, phone, email } = req.body;

  const newContact = {
    id,
    name,
    phone,
    email,
  };
  contacts.push(newContact);

  return res.json(contacts);
});

server.put("/contacts/:id", (req, res) => {
  const { id } = req.params;

  const { name, phone, email } = req.body;

  const contactIndex = contacts.findIndex((contact) => contact.id === id);
  contacts[contactIndex] = {
    ...contacts[contactIndex],
    name,
    phone,
    email,
  };

  return res.json({ message: "Contact updated" });
});

server.delete("/contacts/:id", (req, res) => {
  const { id } = req.params;
  const contactIndex = contacts.findIndex(
    (contact) => contact.id === id,
    console.log(contact.id)
  );

  contacts.splice(contactIndex, 1);

  return res.json(id);
});

server.listen(5000);
