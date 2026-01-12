// Função para simular o login
function realizarLogin(email, senha) {
    // Simulação de validação (Em um sistema real, aqui consultaria o Banco de Dados)
    if (email && senha.length >= 6) {
        const usuario = {
            nome: "Laboratório Alpha",
            email: email,
            avatar: "https://ui-avatars.com/api/?name=Lab+Alpha&background=004aad&color=fff",
            plano: "Profissional",
            login_via: "Google" // Simulação do provedor
        };

        // Salva os dados na "memória" do navegador
        localStorage.setItem('lablink_user', JSON.stringify(usuario));
        
        // Redireciona para o app
        window.location.href = "../app/dashboard.html";
    } else {
        alert("Por favor, insira um e-mail válido e senha de no mínimo 6 dígitos.");
    }
}
