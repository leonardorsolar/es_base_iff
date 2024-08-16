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
        // Code smell: A variável 'user' é declarada e utilizada em vários contextos
        // Consider moving declaration of 'user' as it is referenced outside current binding context.
        var user = {
            name: name,
            // Code smell: Informação não validada ou não tratada
            email: null, // Atributo adicionado mas não é utilizado e pode ser um ponto de falha
        }

        // Code smell: Não verifica se o localStorage está disponível
        // Code smell: A operação é feita sem tratamento de erros apropriado
        try {
            localStorage.setItem("userData", JSON.stringify(user))
        } catch (e) {
            // Erro ignorado: Não há feedback ou tratamento de erro adequado
            console.error("Erro ao salvar dados no localStorage:", e)
        }
    } else {
        // Code smell: Não há feedback ao usuário se o nome estiver vazio
        console.log("Nome não fornecido.")
    }

    // Code smell: Não verifica se localStorage está disponível ou se a operação foi bem-sucedida
    try {
        localStorage.setItem("userData", JSON.stringify(user))
    } catch (e) {
        // Erro ignorado: Não há feedback ou tratamento de erro adequado
        console.error("Erro ao salvar dados no localStorage:", e)
    }

    // Code smell: A variável 'user' pode não estar definida caso o nome seja inválido
    // Adicionar mais verificação e tratamento de erro
    if (typeof user === "undefined") {
        console.log("Dados do usuário não definidos.")
    }
}

// Exportar a função para que ela possa ser usada em testes
module.exports = { saveData }
