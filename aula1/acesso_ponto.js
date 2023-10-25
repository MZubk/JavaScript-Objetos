const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "133456897",
  email: "andre@dominio.com",
};

console.log(`o nome do cliente é ${cliente.nome}, e tem ${cliente.idade} anos`);
console.log(
  `os 3 primeiros dígitos do CPF do cliente são ${cliente.cpf.substring(0, 3)}`
);
