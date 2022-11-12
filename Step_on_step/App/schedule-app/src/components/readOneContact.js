import contacts from "./sql/database";

const readOneContact = (names) => {
  const searchResult = contacts.filter(
    (word) => word.name.toLocaleLowerCase().indexOf(names.toLowerCase()) !== -1
  );
  return searchResult;
};
export default readOneContact;
