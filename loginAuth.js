const usuarios = [
  { usuario: "mimmarcelo", senha: "Teste123" },
  { usuario: "isabelly-x", senha: "1234" },
  { usuario: "juao_lll", senha: "abcd" },
  { usuario: "llaviizz", senha: "senha1" },
  { usuario: "Yaxx", senha: "senha2" }
];

function login(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();

    const autenticado = usuarios.find(u =>
        u.usuario === usuario && u.senha === senha
    );

    if (autenticado) {
        localStorage.setItem("usuarioLogado", JSON.stringify(autenticado));
        window.location.href = "chat.html";
    } else {
        alert("Usuário ou senha inválidos ou não preenchidos corretamente!");
    }
}

// PROTEGER CHAT
function protegerChat() {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuarioLogado) {
        alert("Acesso negado! Faça login primeiro.");
        window.location.href = "index.html";
    }
}
