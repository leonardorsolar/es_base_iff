function saveData() {
    // Limpa mensagens de erro e feedback
    document.getElementById("name-error").textContent = ""
    document.getElementById("phone-error").textContent = ""
    document.getElementById("form-feedback").textContent = ""

    // Obtém os valores dos campos do formulário
    var name = document.getElementById("name").value.trim()
    var phone = document.getElementById("phone").value.trim()

    // Valida os campos
    var hasError = false
    if (name === "") {
        document.getElementById("name-error").textContent =
            "O nome é obrigatório."
        hasError = true
    }
    if (phone === "") {
        document.getElementById("phone-error").textContent =
            "O telefone é obrigatório."
        hasError = true
    }

    // Se houver erros, não prossegue
    if (hasError) {
        return
    }

    // Cria um objeto com os dados do usuário
    var user = {
        name: name,
        phone: phone,
    }
    console.log(user)

    // Exemplo de salvamento local usando localStorage
    localStorage.setItem("userData", JSON.stringify(user))

    // Exibe mensagem de sucesso
    document.getElementById("form-feedback").textContent =
        "Dados enviados com sucesso!"
}
