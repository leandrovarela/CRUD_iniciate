import contacts from "./sql/database";

const deleteContact = (index) => {
  contacts.splice(index, 1);
};
export default deleteContact;
