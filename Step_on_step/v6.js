const scheduler = [
  {
    name: "Lukita",
    phone: "21717171717",
    email: "lukitadagalera@piraca.com",
  },
  {
    name: "Varela",
    phone: "21717171717",
    email: "Vareladagalera@piraca.com",
  },
  {
    name: "Pakita",
    phone: "21717171717",
    email: "Pakitadagalera@piraca.com",
  },
  {
    name: "Makita",
    phone: "21717171717",
    email: "Makitaagalera@piraca.com",
  },
  {
    name: "Xereca",
    phone: "21717171717",
    email: "Xerecagalera@piraca.com",
  },
  {
    name: "Perereca",
    phone: "21717171717",
    email: "Pererecagalera@piraca.com",
  },
  {
    name: "Careca",
    phone: "21717171717",
    email: "Carecagalera@piraca.com",
  },
];

const menu = () => {
  console.log("///////////////////////////////");
  console.log("///////////MENU///////////////");
  console.log("///////////////////////////////");
  console.log("1. CREATE");
  console.log("2. READ ALL");
  console.log("3. READ ONE");
  console.log("4. DELETE");
  console.log("5. UPDATE");
  console.log("");
};

const printMessage = () => {
  console.log(`Your option selected is ${valueOption}`);
};

//Create Contact
const registration_scheduler = (name, phone, email) => {
  const newUser = {
    name,
    phone,
    email,
  };
  scheduler.push(newUser);
};
//Read All
const display_contacts = () => {
  console.table(scheduler);
};

//Read One

const searchbyName = (names) => {
  const searchResult = scheduler.filter(
    (word) => word.name.toLocaleLowerCase().indexOf(names.toLowerCase()) !== -1
  );
  return searchResult;
};

//Delete
const deleteContact = (index) => {
  scheduler.splice(index, 1);
  console.log("**---- Contact Deleted ----**");
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
      const name = input("Name : ");
      const phone = input("Phone : ");
      const email = input("Email : ");
      registration_scheduler(name, phone, email);
      console.table(scheduler);
      break;

    case "2":
      printMessage();
      display_contacts();
      break;

    case "3":
      printMessage();
      const contact = input("Which contact do you want to see by name ? : ");
      const result = searchbyName(contact);
      if (result.length > 0) {
        console.table(result);
      } else {
        jumpLine();
        console.log("DEU MERDA CAPITAO");
        jumpLine();
      }

      break;

    case "4":
      printMessage();
      const contactDeleted = input(
        "Which contact do you want to delete by index ? : "
      );
      deleteContact(contactDeleted);
      break;

    case "5":
      printMessage();
      const indexUpdate = input(
        "Which contact do you want to update by index ? : "
      );
      const keyUpdate = input(
        "Which key do you want to change (name, phone or email) ? : "
      );
      const valueUpdate = input("Enter the value you want to update : ");
      updateContact(indexUpdate, keyUpdate, valueUpdate);
      break;
    default:
      if (valueOption !== "") {
        console.log("Your option selected don't exist.");
      }

      break;
  }
  menu();
  valueOption = input("Select Your Option : ").toLowerCase();
}
