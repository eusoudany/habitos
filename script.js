const form = document.querySelector('#form-habits'); //colocar ma variavel par ao formulário
const nlwSetup = new NLWSetup(form) //variavel para inciciar a biblioteca
const button = document.querySelector("header button") //

button.addEventListener("click", add)
form.addEventListener("change", save)

function add(){
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists){
    alert("Dia já incluso")
    return
  }

  alert("Adicionado com sucesso!")
  nlwSetup.addDay(today)
}
 function save(){
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
 }

 const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}//parse transformar um texto em um objeto
 nlwSetup.setData(data)
 nlwSetup.load()

