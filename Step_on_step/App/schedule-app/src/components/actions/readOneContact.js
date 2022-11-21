import Contacts from "../../sql/database";

const readOneContact = (names) => {
  const searchResult = Contacts.filter(
    (word) => word.name.toLocaleLowerCase().indexOf(names.toLowerCase()) !== -1
  );
  return searchResult;
};
export default readOneContact;
