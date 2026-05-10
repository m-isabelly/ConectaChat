document.addEventListener("DOMContentLoaded", function () {
    const contatos = document.querySelectorAll(".contatos li");
    const chats = document.querySelectorAll(".chat");
    const inputs = document.querySelectorAll(".campo-mensagem");
    const botoes = document.querySelectorAll(".botao-enviar");
    const areas = document.querySelectorAll(".area-mensagens");

    contatos.forEach(contato => {
        contato.addEventListener("click", function () {

            contatos.forEach(c => c.classList.remove("ativo"));
            this.classList.add("ativo");

            const chatId = this.getAttribute("data-chat");

            chats.forEach(chat => {
                chat.classList.add("chat-escondido");
            });

            document.getElementById(chatId).classList.remove("chat-escondido");
        });
    });

    function enviarMensagem(index) {

        const texto = inputs[index].value.trim();
        if (texto === "") return;

        const msg = document.createElement("div");

        msg.classList.add("msg");

        msg.style.background = "#8e43ad";
        msg.style.color = "white";
        msg.style.padding = "8px 12px";
        msg.style.margin = "8px";
        msg.style.borderRadius = "10px";
        msg.style.maxWidth = "70%";
        msg.style.alignSelf = "flex-end";

        msg.innerHTML = `
            ${texto}
            <span style="font-size:10px; margin-left:8px;">✓✓</span>
        `;

        areas[index].appendChild(msg);

        inputs[index].value = "";

        areas[index].scrollTop = areas[index].scrollHeight;
    }

    botoes.forEach((botao, i) => {
        botao.addEventListener("click", () => enviarMensagem(i));
    });

    inputs.forEach((input, i) => {
        input.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                enviarMensagem(i);
            }
        });
    });

});