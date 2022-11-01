let btn = document.querySelector('.fa-eye')

btn.addEventListener ('click', () => {

    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute ('type') == 'password'){
        inputSenha.setAttribute ('type' , 'text')
    } else {
        inputSenha.setAttribute ('type' , 'password')
    }
}
)

function entrar(){
    let usuario = document.querySelector('#usuario')
    let usuarioLabel = document.querySelector('#usuariolabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhalabel')

    let msgSucess = document.querySelector('#msg-sucess')
    let msgError = document.querySelector('#msg-erro')
    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }
    
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
   
    listaUser.forEach((item) => {
    if(usuario.value == item.usuarioCad && senha.value == item.senhaCad){
        
        userValid = {
            nome: item.nomeCad,
            user: item.usuarioCad,
            senha: item.senhaCad
    }
}
        
    })
 if(usuario.value == userValid.user && senha.value == userValid.senha){


    let token = Math.random().toString(16).substring(2)
   
    localStorage.setItem('token', token)
    localStorage.setItem ('Usuariologado', JSON.stringify(userValid))

    usuarioLabel.setAttribute('style' , 'color: green')
    usuario.setAttribute('style' , ' border-color: green')
    senhaLabel.setAttribute('style' , 'color: green ')
    senha.setAttribute('style' , 'border-color: green')
    msgSucess.setAttribute('style' , 'display: block' )
    msgSucess.innerHTML = 'Usuario Logado com Sucesso'
    msgError.setAttribute('style' , 'display: none')

    setTimeout(() => {
        window.location.href = "modelos.html"
    } , 2500)


} else {
    
    usuarioLabel.setAttribute('style' , 'color: red')
    usuario.setAttribute('style' , ' border-color: red')
    senhaLabel.setAttribute('style' , 'color: red')
    senha.setAttribute('style' , 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuario ou senha incorretos'
    usuario.focus()
    msgSucess.setAttribute('style' , 'display: none')

}
}
