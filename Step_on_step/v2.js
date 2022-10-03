
// **************************************************
// v2
// criar uma funcao capaz de imprimir apenas 1 dos contatos, pelo index.
// criar uma funcao capaz de deletar um contato, pelo index.
// imprimir apenas 1 dos contatos, usando a funcao criada.
// deletar esse contato usandoa funcao criada pelo index.
// imprimir todos os contatos e verificar se foi removido.
// **************************************************

const scheduler = [
    {
        name: 'Lukita',
        telphone: '21717171717',
        email: 'lukitadagalera@piraca.com'
      },
      {
        name: 'Varela',
        telphone: '21717171717',
        email: 'Varelitadagalera@piraca.com'
      },
      {
        name: 'Bob',
        telphone: '21717171717',
        email: 'bobdagalera@piraca.com'
      }
  
]

const deleteContact = (index) => {
    scheduler.splice(index,1)
    console.log("**---- Contato removido ----**")
    console.log(scheduler)
}


const printContact = (index) => {
  
    console.log("**------ Contato Impresso ------***")
    console.log(scheduler[index])
}

printContact(2);

deleteContact(1);