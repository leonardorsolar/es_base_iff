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

### 6. Ambiente Básico de Teste

## Adicionar o .gitignore

Adicionar o .gitignore para o Diretório node_modules
Depois de desfazer o commit, siga os passos abaixo para adicionar um arquivo .gitignore para o diretório node_modules:

Criar o Arquivo .gitignore
Na raiz do seu projeto, crie um arquivo chamado .gitignore se ele não existir ainda:

.gitignore

Abra o arquivo .gitignore em um editor de texto e adicione a linha para ignorar o diretório node_modules:

node_modules/

Salve e feche o arquivo .gitignore.

#### 6.1. Configuração do Ambiente

    6.1. Configuração do Ambiente
    Primeiro, você precisa ter o Node.js instalado no seu sistema. Se ainda não o tiver, baixe e instale a partir do site oficial: [Node.js](https://nodejs.org).


    6.2. Instalação do Jest

     Instale o Jest no seu projeto. Se você ainda não tem um `package.json`, crie-o executando o comando abaixo no seu terminal:

        ```bash
        npm init -y
        npm install --save-dev jest
        ```

         6.3 Configuração do Jest
        Adicione o seguinte no seu package.json para definir o Jest como o test runner:

            ```javascript

                {
                "scripts": {
                "test": "jest"
                }
                }

            ```



    6.4. Criação de Arquivo de Teste

Crie um arquivo de teste, por exemplo script.test.js, no mesmo diretório onde está o seu script.js. Cole o código de teste necessário no arquivo.

    6.5. Instalar Dependências de Teste

O ambiente de teste padrão do Jest é o Node, que não tem suporte nativo para o DOM (document, window, etc.). Para resolver isso, você precisa configurar o Jest para usar o ambiente de teste jsdom, que simula o ambiente de um navegador e fornece acesso ao DOM.

    6.5.1. Configurando o Jest para usar o jsdom

A maneira mais simples de fazer isso é modificar o package.json para configurar o Jest com o ambiente jsdom:

        ```javascript
        {
        "jest": {
            "testEnvironment": "jsdom"
        }
        }
        ```

6.5. Executar o Teste
Rodando os Testes Novamente
Agora que o ambiente jsdom está configurado, rode os testes novamente com:

        ```bash
        npm test
        ```

7. SonarCloud via GitHub:

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

````

```

```
````

8. Git

1. Desfazer um Commit
   Dependendo da situação, você pode desfazer um commit de diferentes maneiras:

Desfazer o Último Commit (Mantendo as Alterações)
Se você deseja desfazer o último commit, mas manter as alterações no seu diretório de trabalho, use:

git reset --soft HEAD~1

Desfazer o Último Commit (Descartar as Alterações)
Se você deseja desfazer o último commit e descartar as alterações, use:

bash
Copiar código
git reset --hard HEAD~1
Atenção: Usar --hard descarta todas as alterações no diretório de trabalho e no índice. Use com cuidado!
