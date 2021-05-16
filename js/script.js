// 1. Se os campos de nome e emails estiverem preenchidos
//   envie os dados
// senão
//   peça ao usuária que peencha os campos nome e email

const email = document.getElementById("email-da-usuaria")
const nome = document.getElementById("nome-da-usuaria")
const telefone = document.getElementById("telefone-da-usuaria")
const enviar = document.getElementById("enviar")

enviar.addEventListener("click", function(event) {
  event.preventDefault();
  
  if (email.value=="") alert('Por favor, preencha o campo email adquadamente')

  else if (nome.value=="") alert('Por favor, preencha o campo nome adquadamente')

   else if (telefone.value=="") alert('Por favor, preencha o telefone adquadamente')

  else {
    alert("Prontinho! você receberá as novidades por email.")
  }
})