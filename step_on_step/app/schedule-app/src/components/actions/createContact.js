import Contacts from "../../sql/database";

const createContact = (props) => {
  return Contacts.push(props);
};

export default createContact;
