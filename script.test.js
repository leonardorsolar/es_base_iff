const { saveData } = require("./script")

describe("saveData", () => {
    beforeEach(() => {
        // Limpa o localStorage antes de cada teste
        localStorage.clear()
        // Mocking para elementos do DOM
        document.body.innerHTML = `
      <input type="text" id="name" value="John Doe" />
      <div id="users"></div>
    `
    })

    test("should save user data to localStorage", () => {
        saveData()

        const storedData = JSON.parse(localStorage.getItem("userData"))

        expect(storedData).toEqual({ name: "John Doe" })
    })
})
