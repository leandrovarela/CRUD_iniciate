// **************************************************
//Inicio do treinamento do basico com Lukita

// **************************************************
// v1
// criar agenda de contatos com as seguintes funcionalidades.
// criar uma funcao capaz de cadastrar um contato,
// os contatos devem ter: nome, telefone e email.
// criar uma funcao capaz de exibir todos os contatos
// salvar pelo menos 3 contatos e imprimir a lista.
// **************************************************
// **************************************************
// v2
// criar uma funcao capaz de imprimir apenas 1 dos contatos, pelo index.
// criar uma funcao capaz de deletar um contato, pelo index.
// imprimir apenas 1 dos contatos, usando a funcao criada.
// deletar esse contato usandoa funcao criada pelo index.
// imprimir todos os contatos e verificar se foi removido.
// **************************************************
//v3
// criar uma funcao capaz de atualizar a informacoes de um contato,
// passando: index, atributo (que sera alterado) e o novo valor.
// imprimir todos os contatos e verificar se foi alterado.
// Update
// **************************************************
// v4
// Criar um menu NO TERMINAL com as seguintes opcoes:
// 1. Create
// 2. Read:All
// 3. Read:One
// 4. Delete
// 5. Update
// Os nome acima sao apenas exemplos.
// Criar funcionalidade capaz de pegar 1 numero digitado do teclado
// Caso o numero digitado no teclado seja o numero da opcoa ele deve imprimir,
// "Your option selected is X.", X deve representar a opcao selecionada.
// Caso seja selecionado uma opcao nao existente deve imprimir,
// "Your option selected don't exist."
// Implementar funcionalidade de fechar menu, quando digitar Z ou z.
// Recursos utilizados: require, dependencie, let, while, switch

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
console.table(table);
let input = require("prompt-sync")();
let valueOption = input("Select Your Option : ");
while (valueOption !== 0) {
  console.log(`"Your option selected is ${table[valueKeyboard]}`);
}
switch (valueKeyboard) {
  case "1":
    const registration_scheduler = (name, telphone, email) => {
      const newUser = {
        name,
        telphone,
        email,
      };
      scheduler.push(newUser);
    };

    registration_scheduler("Bob", "21717171717", "bobdagalera@piraca.com");

    registration_scheduler("Melynx", "21717171717", "memedagalera@piraca.com");
    break;

  case "2":
    function display_contacts() {
      console.table(scheduler);
    }
    display_contacts(scheduler);
    break;

  case "3":
    const printContact = (index) => {
      console.log("**------ Contato Impresso ------***");
      console.table(scheduler[index]);
    };

    printContact(1);
    break;

  case "4":
    const deleteContact = (index) => {
      scheduler.splice(index, 1);
      console.log("**---- Contato removido ----**");
      console.table(scheduler);
    };
    deleteContact(1);
    break;

  case "5":
    const updateContact = (id, attribute, value) => {
      scheduler[id][attribute] = value;
    };

    updateContact(0, "name", "Joana");
    updateContact(1, "telphone", 21727272727);
    console.table(scheduler);
    break;

  default:
    console.log("Your option selected don't exist.");
}
