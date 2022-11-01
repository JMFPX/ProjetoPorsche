let Usuariologado = JSON.parse(localStorage.getItem('Usuariologado'))
let logado = document.querySelector('#logado')

logado.innerHTML =  Usuariologado.user


function sair(){
    localStorage.removeItem('Usuariologado')
      localStorage.removeItem('token')
    
    window.location.href = "tela-de-login1.html"
}