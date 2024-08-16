# Projeto de Engenharia de Software

1. Clone o repositório:

    ```bash
    git clone https://github.com/leonardorsolar/es_base_iff.git
    ```

2. Abra o arquivo na sua IDE de preferência (por exemplo, Visual Studio Code).

3. Estruturação do Projeto:

    - `index.html`
    - `README.md`
    - `script.js`
    - `styles.css`

4. Git:

    ```bash
    git status
    git add .
    git commit -am "docs: modificação no documento"
    git pull origin main
    git push origin main
        - Username for 'https://github.com':
        - Password for '...':
    ```

5. Análise GitHub:

    Na página do repositório: [https://github.com/leonardorsolar/es_base_iff](https://github.com/leonardorsolar/es_base_iff)

    - Visualizar o nome do último commit
    - Clicar em "X commits"
    - `git add .`

6. SonarCloud via GitHub:

    [https://sonarcloud.io/login](https://sonarcloud.io/login)

    - Segurança: 0
    - Confiabilidade: 2
    - Capacidade de manutenção: 100%
    - Pontos de acesso revisados: 0,0%
    - Duplicações: 0

    - Em MyProjects, entre no projeto:
      `leonardosolar/es_base_iff Public`
        - Selecione a Main Branch

**Melhorias:**

-   **HTML:**

    -   Adicionado `aria-describedby` no formulário e `aria-live` nos elementos de feedback para acessibilidade.
    -   Incluídos `aria-required` nos campos de entrada.
    -   Adicionados elementos `<span>` para mensagens de erro com `aria-live` para atualização dinâmica.

-   **JavaScript:**

    -   Adicionada validação para verificar se os campos estão preenchidos e exibir mensagens de erro.
    -   Adicionada mensagem de sucesso após salvar os dados.

-   **CSS:**
    -   Adicionados estilos para mensagens de erro e feedback para melhor visibilidade.

Essas modificações garantem que o formulário seja mais acessível e forneça feedback adequado para os usuários.

**SonarCoud:**

Configuração do SonarCloud com CI/CD
Dependendo do CI/CD que você está usando (como GitHub Actions, Jenkins, Travis CI, CircleCI, etc.), você precisa adicionar um passo para rodar a análise do SonarCloud. Abaixo está um exemplo de configuração usando GitHub Actions.

Adicione o arquivo de configuração do SonarCloud no seu repositório:

Crie um arquivo .github/workflows/sonarcloud.yml no seu repositório GitHub:

yaml
Copiar código
name: SonarCloud

on:
push:
branches: - '**' # Analisa todas as branches
pull_request:
branches: - '**'

jobs:
build:
name: Build and analyze
runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up JDK 17
        uses: actions/setup-java@v3
        with:
          java-version: '17'

      - name: Cache SonarCloud packages
        uses: actions/cache@v3
        with:
          path: ~/.sonar/cache
          key: ${{ runner.os }}-sonar-${{ github.sha }}
          restore-keys: |
            ${{ runner.os }}-sonar-

      - name: Build with Gradle
        run: ./gradlew build

      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@v1
        with:
          args: sonar-scanner
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}

Configure seu projeto no SonarCloud:

No painel do SonarCloud, vá para Administration > Branches & Pull Requests.
Certifique-se de que sua nova branch está listada lá. 4. Acompanhe a Análise
Após a configuração do pipeline de CI/CD e execução, verifique a página do projeto no SonarCloud para visualizar os resultados da análise para a nova branch.

Observações:
SONAR_TOKEN: Certifique-se de que você adicionou o token do SonarCloud como um segredo no GitHub (secrets.SONAR_TOKEN).
SonarQube Scanner: Assegure-se de que o scanner do SonarCloud está configurado corretamente no seu ambiente de CI/CD.
Seguindo esses passos, você deve ser capaz de atualizar e visualizar a análise da nova branch no SonarCloud.
