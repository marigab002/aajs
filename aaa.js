function solicitarDados(){
    //Solicitar o nome do usuário
  let nome = prompt("Qual é o seu nome?");
  //Solicitar gosto de usuário
  let idade = prompt("Qual a sua idade?");
  //Solicitar a cidade em que o usuário reside
  let cidade =prompt("Qual sua cidade?");
  //Exibir saudação
  alert("Olá, " + nome + " voce tem " + idade + " anos de idade, " + " voce mora em " + cidade);
  //Mosrar dados no console
  console.log("Nome do usuário:", nome);
  console.log("Idade do usuário:", idade);
console.log("Cidade do usuário:", cidade);
}