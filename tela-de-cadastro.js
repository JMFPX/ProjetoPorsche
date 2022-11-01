let btn = document.querySelector('#versenha')
let btnconfirme = document.querySelector('#verConfirmeSenha')


let nome = document.querySelector('#nome')
let labelnome = document.querySelector('#LabelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelusuario = document.querySelector('#LabelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#LabelSenha')
let validSenha = false

let confirmesenha = document.querySelector('#confirmasenha')
let labelconfirmasenha = document.querySelector('#LabelConfirmeSenha')
let validConfirmasenha = false

let msgError = document.querySelector("#msg-erro")
let msgSucess = document.querySelector("#msg-sucess")



nome.addEventListener("keyup" , () => {
    if(nome.value.length < 5){
        labelnome.setAttribute('style' , 'color: red')
        labelnome.innerHTML = 'Nome *Insira no minino 5 caracteres'
        nome.setAttribute('style' , 'border-color: red')
        validNome = false
    } else{
        labelnome.setAttribute('style' , 'color: green')
        labelnome.innerHTML ='Nome'
        nome.setAttribute('style' , 'border-color: green')
        validNome = true
    }
}
)

usuario.addEventListener("keyup" , () => {
    if(usuario.value.length < 5){
        labelusuario.setAttribute('style' , 'color: red')
        labelusuario.innerHTML = 'Usuario *Insira no minino 5 caracteres'
        usuario.setAttribute('style' , 'border-color: red')
        validUsuario = false
    } else{
        labelusuario.setAttribute('style' , 'color: green')
        labelusuario.innerHTML ='Usuario'
        usuario.setAttribute('style' , 'border-color: green')
        validUsuario = true
    }
}
)


senha.addEventListener("keyup" , () => {
    if(senha.value.length < 4 ){
        labelsenha.setAttribute('style' , 'color: red')
        labelsenha.innerHTML = 'Senha *Insira no minino 4 caracteres'
        senha.setAttribute('style' , 'border-color: red')
        validSenha = false
    } else{
        labelsenha.setAttribute('style' , 'color: green')
        labelsenha.innerHTML ='Senha'
        senha.setAttribute('style' , 'border-color: green')
        validSenha = true
    }
}
)
confirmesenha.addEventListener("keyup" , () => {
    if(senha.value != confirmesenha.value){
        labelconfirmasenha.setAttribute('style' , 'color: red')
        labelconfirmasenha.innerHTML = 'Confirme a Senha *As senhas não estão iguais'
        confirmesenha.setAttribute('style' , 'border-color: red')
        validConfirmasenha = false
    } else{
        labelconfirmasenha.setAttribute('style' , 'color: green')
        labelconfirmasenha.innerHTML ='Confirme a Senha'
        confirmesenha.setAttribute('style' , 'border-color: green')
        validConfirmasenha = true
    }
}
)

function cadastrar(){
   if(validNome && validUsuario && validSenha && validConfirmasenha){
   let listaUser = JSON.parse(localStorage.getItem('listaUser') || "[]")
    
   listaUser.push(
    {
        nomeCad: nome.value,
        usuarioCad: usuario.value,
        senhaCad: senha.value
    }
   )

   localStorage.setItem('listaUser', JSON.stringify(listaUser))
   
   
   
   
   
    msgSucess.setAttribute('style' , 'display: block')
    msgSucess.innerHTML = '<strong> Cadastrado com sucesso!  </strong>'
    msgError.setAttribute('style' , 'display: none')
    msgError.innerHTML = ''

    setTimeout(() => {
        window.location.href = "tela-de-login1.html"
    } , 4500)

} else {
    msgError.setAttribute('style' , 'display: block')
    msgError.innerHTML = '<strong>Cadastro inválido </strong>'
    msgSucess.setAttribute('style' , 'display: none')
    msgSucess.innerHTML = ''
   }
}


btn.addEventListener ('click', () => {

    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute ('type') == 'password'){
        inputSenha.setAttribute ('type' , 'text')
    } else {
        inputSenha.setAttribute ('type' , 'password')
    }
}
)

btnconfirme.addEventListener ('click', () => {

    let inputConfirmSenha = document.querySelector('#confirmasenha')

    if(inputConfirmSenha.getAttribute ('type') == 'password'){
        inputConfirmSenha.setAttribute ('type' , 'text')
    } else {
        inputConfirmSenha.setAttribute ('type' , 'password')
    }
}
)

