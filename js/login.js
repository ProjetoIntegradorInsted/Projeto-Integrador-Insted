let campoEmailLogin = document.querySelector("#campoEmailLogar");
let campoSenhaLogin = document.querySelector("#campoSenhaLogar");
let botaoEntrar = document.querySelector("#botaoEntrar");
let campoErro = document.querySelector("#erroSenha")
let formLogin = document.getElementById("formLogin");


function validarLogin() {
    if (campoEmailLogin.value == "balada@gmail.com" && campoSenhaLogin.value == "balada") {
        return true;
    } else {
        console.log("entrei");
        campoErro.classList.add("erroSenha");
        campoErro.textContent = "Login/senha incorretos, tente novamente!"
        return false;
    }
}


function retornarSucesso(event) {
    event.preventDefault();
    if (validarLogin()) {
        window.location.href = "./paginaInicialLogado.html";
    } else {
        console.log("erro404");
    }
}

formLogin.onsubmit = () => {
    location.href = "./paginaInicialLogado.html";
    return false;
}