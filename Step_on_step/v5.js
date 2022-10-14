const scheduler = [
  {
    name: "Lukita",
    telphone: 21717171717,
    email: "lukitadagalera@piraca.com",
  },
  {
    name: "Varela",
    telphone: 21717171717,
    email: "Varelitadagalera@piraca.com",
  },
];

const table = [
  "Menu",
  "1. Create",
  "2. Read:All",
  "3. Read:One",
  "4. Delete",
  "5. Update",
  "Z. Finish",
];
console.log("///////////////////////////////");
console.log("///////////MENU///////////////");
console.log("///////////////////////////////");
console.log("1. CREATE");
console.log("2. READ ALL");
console.log("3. READ ONE");
console.log("4. DELETE");
console.log("5. UPDATE");

const printMessage = () => {
  console.log(`Your option selected is ${valueOption}`);
};

//Create Contact
const registration_scheduler = (name, telphone, email) => {
  const newUser = {
    name,
    telphone,
    email,
  };
  scheduler.push(newUser);
};
//Read All
const display_contacts = () => {
  console.table(scheduler);
};
//Read One
const printContact = (index) => {
  console.log("**------ Contato Impresso ------***");
  console.table(scheduler[index]);
};
//Delete
const deleteContact = (index) => {
  scheduler.splice(index, 1);
  console.log("**---- Contato removido ----**");
  console.table(scheduler);
};
//Update
const updateContact = (id, attribute, value) => {
  scheduler[id][attribute] = value;
  console.table(scheduler);
};

// Import Lib Prompt for Input

let input = require("prompt-sync")();
let valueOption = "";
while (valueOption !== "z") {
  switch (valueOption) {
    case "1":
      printMessage();
      registration_scheduler("Bob", "21717171717", "bobdagalera@piraca.com");

      registration_scheduler(
        "Melynx",
        "21717171717",
        "memedagalera@piraca.com"
      );
      console.table(scheduler);
      break;

    case "2":
      printMessage();
      display_contacts();
      break;

    case "3":
      printMessage();
      printContact(1);
      break;

    case "4":
      printMessage();
      deleteContact(1);
      break;

    case "5":
      printMessage();
      updateContact(0, "name", "Joana");
      updateContact(1, "telphone", 21727272727);
      break;
    default:
      if (valueOption !== "") {
        console.log("Your option selected don't exist.");
      }

      break;
  }
  valueOption = input("Select Your Option : ").toLowerCase();
}
