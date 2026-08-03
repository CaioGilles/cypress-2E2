Suíte de testes end-to-end desenvolvida com Cypress, aplicando o padrão Page Object Model (POM) para organizar seletores e ações de forma reutilizável.
Os testes cobrem os fluxos de login e cadastro de usuário de uma aplicação web de prática.

🧰 Tecnologias
Cypress — framework de testes E2E
@faker-js/faker — geração de dados fake para os testes
cypress-mochawesome-reporter — geração de relatórios HTML
GitHub Actions — execução automática dos testes em pipeline CI

✅ Cenários cobertos
Login
Login realizado com sucesso
Cadastro de usuário
Cadastro realizado com sucesso
Validação de erro com campo Nome vazio
Validação de erro com campo E-mail vazio
Validação de erro com campo Senha vazio

🚀 Como executar
Pré-requisitos
Node.js instalado

Instalação
npm install

Executar os testes
Abrir o Cypress em modo interativo:
npx cypress open

Executar os testes em modo headless (linha de comando):
npx cypress run
Integração contínua
Os testes são executados automaticamente via GitHub Actions a cada pull request aberto para a branch master, com gravação dos resultados no Cypress Cloud.
📊 Relatórios
Os relatórios de execução são gerados em HTML através do cypress-mochawesome-reporter, ficando disponíveis na pasta reports/ após a execução dos testes.
