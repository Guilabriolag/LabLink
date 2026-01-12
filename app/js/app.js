document.addEventListener("DOMContentLoaded", function() {
    // Busca o usuário salvo no localStorage
    const dadosSalvos = localStorage.getItem('lablink_user');

    if (!dadosSalvos) {
        // Se não houver usuário, expulsa de volta para o login (Proteção de Rota)
        window.location.href = "../auth/login.html";
    } else {
        const usuario = JSON.parse(dadosSalvos);
        
        // Aplica o nome e a foto nos elementos do Dashboard
        document.getElementById('user-name-display').innerText = usuario.nome;
        if(document.getElementById('user-avatar')) {
            document.getElementById('user-avatar').src = usuario.avatar;
        }
        console.log("Sistema LabLink carregado para: " + usuario.email);
    }
});

function logout() {
    localStorage.removeItem('lablink_user');
    window.location.href = "../auth/login.html";
}
