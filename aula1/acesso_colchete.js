const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "133456897",
  email: "andre@dominio.com",
};

console.log(
  `o nome do cliente é ${cliente["nome"]}, e tem ${cliente["idade"]} anos`
);
const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
  console.log(`a chave ${chave} tem valor ${cliente[chave]}`);
});
