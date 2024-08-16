function saveData() {
    var name = document.getElementById("name").value
    var user = {
        name: name,
    }
    localStorage.setItem("userData", JSON.stringify(user))
}

// Exportar a função para que ela possa ser usada em testes
module.exports = { saveData }
