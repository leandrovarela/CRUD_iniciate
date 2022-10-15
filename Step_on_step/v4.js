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

console.log("///////////////////////////////");
console.log("///////////MENU///////////////");
console.log("///////////////////////////////");
console.log("1. CREATE");
console.log("2. READ ALL");
console.log("3. READ ONE");
console.log("4. DELETE");
console.log("5. UPDATE");

const jumpLine = () => {
  console.log("");
};

const printMessage = () => {
  console.log(`Your option selected is ${inputKeyboard}`);
};

let input = require("prompt-sync")();

let inputKeyboard = "";

while (inputKeyboard !== "z") {
  switch (inputKeyboard) {
    case "1":
      jumpLine();
      printMessage();
      jumpLine();
      console.log("You create your contact");
      jumpLine();
      break;
    case "2":
      jumpLine();
      printMessage();
      jumpLine();
      console.log("You read all contacts");
      jumpLine();
      break;
    case "3":
      jumpLine();
      printMessage();
      jumpLine();
      console.log("You read one contact");
      jumpLine();
      break;
    case "4":
      jumpLine();
      printMessage();
      jumpLine();
      console.log("You deleted one contact");
      jumpLine();
      break;
    case "5":
      jumpLine();
      printMessage();
      jumpLine();
      console.log("You update one contact");
      jumpLine();
      break;
    default:
      if (inputKeyboard !== "") {
        jumpLine();
        console.log("Your option selected don't exist.");
        jumpLine();
      }
      break;
  }
  inputKeyboard = input("Select Your Option : ").toLowerCase();
}
