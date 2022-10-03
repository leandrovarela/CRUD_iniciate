// Inicio do treinamento do basico com Lukita

// **************************************************
// v1
// criar agenda de contatos com as seguintes funcionalidades.
// criar uma funcao capaz de cadastrar um contato,
// os contatos devem ter: nome, telefone e email.
// criar uma funcao capaz de exibir todos os contatos
// salvar pelo menos 3 contatos e imprimir a lista.
// **************************************************

const scheduler = []

const registration_scheduler = (name,telphone,email) => {
    const newUser = {
        name,
        telphone,
        email
}
    scheduler.push(newUser)
}

registration_scheduler("Lukita", "21717171717","lukitadagalera@piraca.com")

registration_scheduler("Varela", "21717171717","Varelitadagalera@piraca.com")

registration_scheduler("Bob", "21717171717","bobdagalera@piraca.com")

function display_contacts() {
    console.log(scheduler);

}

display_contacts(scheduler)
