// function saveData() {
//     var name = document.getElementById("name").value
//     var user = {
//         name: name,
//     }
//     localStorage.setItem("userData", JSON.stringify(user))
// }

// // Exportar a função para que ela possa ser usada em testes
// module.exports = { saveData }

function saveData() {
    // Assume que o elemento sempre existe e tem um valor
    var name = document.getElementById("name").value
    // Code smell: Não verifica se o valor é válido e não trata erros
    if (name.length > 0) {
        var user = {
            name: name,
        }
        // Code smell: Não verifica se o localStorage está disponível
        localStorage.setItem("userData", JSON.stringify(user))
    }

    // Não verifica se localStorage está disponível ou se a operação foi bem-sucedida
    try {
        localStorage.setItem("userData", JSON.stringify(user))
    } catch (e) {
        // Erro ignorado
    }
}

// Exportar a função para que ela possa ser usada em testes
module.exports = { saveData }
