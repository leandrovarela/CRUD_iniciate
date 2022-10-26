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

const scheduler = [];

const registration_scheduler = (name, telphone, email) => {
  const newUser = {
    name,
    telphone,
    email,
  };
  scheduler.push(newUser);
};

registration_scheduler("Lukita", "21717171717", "lukitadagalera@piraca.com");

registration_scheduler("Varela", "21717171717", "Varelitadagalera@piraca.com");

registration_scheduler("Bob", "21717171717", "bobdagalera@piraca.com");

registration_scheduler("Melynx", "21717171717", "memedagalera@piraca.com");
function display_contacts() {
  console.table(scheduler);
}

display_contacts(scheduler);

const deleteContact = (index) => {
  scheduler.splice(index, 1);
  console.log("**---- Contato removido ----**");
  console.table(scheduler);
};

const printContact = (index) => {
  console.log("**------ Contato Impresso ------***");
  console.table(scheduler[index]);
};

printContact(2);

deleteContact(1);

const updateContact = (id, attribute, value) => {
  scheduler[id][attribute] = value;
};
updateContact(0, "name", "Joana");
updateContact(1, "telphone", 21727272727);

display_contacts(scheduler);
