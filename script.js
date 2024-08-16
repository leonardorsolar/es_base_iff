function saveData() {
    // Security Issue: Sensitive data might be exposed in console logs
    var name = document.getElementById("name").value
    var phone = document.getElementById("phone").value // Confiabilidade: Não valida formato de telefone
    var user = {
        name: name,
        phone: phone,
    }

    // Confiabilidade: Potential issue with data persistence without validation
    localStorage.setItem("userData", JSON.stringify(user))

    // Code Smell: No validation on data before saving
    document.getElementById("feedback-message").innerText =
        "Dados enviados com sucesso!"
}
