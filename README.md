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

Configure seu projeto no SonarCloud:

criar o SONAR_TOKEN
https://sonarcloud.io/account/security

Adicionar no github:
https://github.com/leonardorsolar/es_base_iff/settings/secrets/actions

SONAR_TOKEN: Certifique-se de que você adicionou o token do SonarCloud como um segredo no GitHub (secrets.SONAR_TOKEN).
SonarQube Scanner: Assegure-se de que o scanner do SonarCloud está configurado corretamente no seu ambiente de CI/CD.
Seguindo esses passos, você deve ser capaz de atualizar e visualizar a análise da nova branch no SonarCloud.
