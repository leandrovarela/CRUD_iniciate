import Contacts from "../../sql/database";

const updateContact = (id, attribute, value) => {
  Contacts[id][attribute] = value;
};

export default updateContact;
