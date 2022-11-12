import contacts from "./sql/database";

const createContact = (newUser) => {
  contacts.push(newUser);
};

export default createContact;
