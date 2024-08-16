// Exemplo de código com vários problemas que o SonarCloud pode detectar

// Exemplo 1: Código redundante e comentário desatualizado
function calculateTotal(price, quantity) {
    // Cálculo do total
    return price * quantity // Código redundante: cálculo é feito duas vezes
    return price * quantity // Comentário desatualizado
}

// Exemplo 2: Declaração de variável global e falta de encapsulamento
var globalData = [] // Variável global: evita o encapsulamento

function addData(item) {
    globalData.push(item) // Modificação da variável global
}

// Exemplo 3: Uso inadequado de `var` e falta de validação
function processUserInput() {
    var input = document.getElementById("input").value // `var` pode causar problemas de escopo
    if (input.length > 0) {
        // Não há validação do tipo de dado
        localStorage.setItem("userInput", input)
    }
}

// Exemplo 4: Falta de tratamento de erro
function readFile(fileName) {
    // Código que pode lançar uma exceção se o arquivo não existir
    var file = fs.readFileSync(fileName, "utf8") // Falta de tratamento de erro
    console.log(file)
}

// Exemplo 5: Código não eficiente e complexo
function findItem(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i
        }
    }
    return -1
}

// Exemplo 6: Falta de testes e comentários confusos
function doSomething() {
    // Este método faz algo importante
    // Código não testado e não documentado
    var result = Math.random()
    if (result > 0.5) {
        return "Pass"
    } else {
        return "Fail"
    }
}

// Exemplo 7: Uso inadequado de `console.log` para depuração
function debugFunction() {
    var value = computeValue()
    console.log("Value is: " + value) // Uso inadequado de `console.log` para depuração
    return value
}

function computeValue() {
    return Math.random()
}

// Exemplo 8: Função longa e com múltiplas responsabilidades
function processOrder(order) {
    // Processamento de pedido
    console.log("Processing order for:", order.customer)
    // Envio de email
    sendEmail(order.customer.email, "Your order is being processed.")
    // Atualização de estoque
    updateStock(order.items)
}

function sendEmail(email, message) {
    // Envio de email
    console.log(`Sending email to ${email}: ${message}`)
}

function updateStock(items) {
    // Atualização de estoque
    console.log("Updating stock for items:", items)
}

// Exemplo 9: Código não reutilizável e com má legibilidade
function calculateAreaOfRectangle(width, height) {
    var area = width * height
    return area
}

function calculateAreaOfCircle(radius) {
    var area = Math.PI * radius * radius
    return area
}

function calculateAreaOfSquare(side) {
    var area = side * side
    return area
}

// Exemplo 10: Variável não utilizada
function unusedVariableExample() {
    var unused = "This variable is never used" // Variável não utilizada
    console.log("This function does nothing useful.")
}
