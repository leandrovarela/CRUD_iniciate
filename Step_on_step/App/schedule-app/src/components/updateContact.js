import contacts from "./sql/database";

const updateContact = (id, attribute, value) => {
  contacts[id][attribute] = value;
};

export default updateContact;
