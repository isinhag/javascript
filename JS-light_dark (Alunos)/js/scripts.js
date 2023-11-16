// Seleciona o botão com ID "change-theme" e armazena na variavel changeThemeBtn
const changeThemeBtn = document.querySelector("#change-theme");

//Função para alternar o modo escuro(dark mode)
function toggleDarkMode() {
    //Adiciona ou remove a classe dark do elemento <body> do documento, alternando o modo escuro
    document.body.classList.toggle("dark");
}

//Função para carregar o modo claro ou escuro
function loadTheme() {
    //Verifica se a variável "dark" está armazenada no localStorage do navegador
    const darkMode = localStorage.getItem("dark");

    //Se a variavel "dark" existir no localStorage( ou seja, o usuário já escolheu o modo escuro anteriormente), ative o modo escuro
    if(darkMode) {
        toggleDarkMode();
    }
}

//Carrega o tema (modo escuro ou claro) quando a pagina é carregada
loadTheme();

//Adiciona um ouvinte de evento para o botão de mudança de tema
changeThemeBtn.addEventListener("change" , function() {
    //Chama a função para alternar o modo escuro
    toggleDarkMode();

    //Remove a variavel "dark" do localStorage (modo claro)
    localStorage.removeItem("dark");

    //Se o elemento <body> tiver a classe "dark" (ou seja, o modo escuro estiver ativado), armazena a varivel "dark" no localStorage
    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    }
});