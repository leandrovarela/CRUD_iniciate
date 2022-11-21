import Contacts from "../../sql/database";

const deleteContact = (index) => {
  Contacts.splice(index, 1);
};
export default deleteContact;
