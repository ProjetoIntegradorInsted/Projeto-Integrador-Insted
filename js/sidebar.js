let menu_btn = document.querySelector("#menu-btn");
let sidebar = document.querySelector("#sidebar");
let container = document.querySelector(".my-container");

menu_btn.addEventListener("click", () => {
    sidebar.classList.toggle("active-nav");
    container.classList.toggle("active-cont");
});

let botaoSair = document.querySelector("#botaoSair");

botaoSair.addEventListener("click", () => {
    location.href = "../paginaInical.html";
    
    return false;
});

let botaoVoltar = document.querySelector("#botaoVoltar");

botaoVoltar.addEventListener("click", () => {
    location.href = "../paginaInicialLogado.html";
    
    return false;
});
