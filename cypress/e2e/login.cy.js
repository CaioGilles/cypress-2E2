import home_page from "../support/pages/home_page";
import login_page from "../support/pages/login_page";
import { Faker, faker } from '@faker-js/faker';
const dados_login = require("../fixtures/login.json")


describe('Login com sucesso', () => {

    beforeEach('Acessar Tela de Login', () => {
        home_page.TelaLogin()
    })

    it('Cadastro de Login com sucesso', async () => {
        await login_page.ValidarAcessoTelaLogin(dados_login.TituloLogin)
         login_page.PreencherCampoEmail(dados_login.Email)
         login_page.PreencherCampoSenha(faker.internet.password())
         login_page.ClicarLembrarDeMim()
         login_page.CLicarLogin()
         login_page.ValidarLoginRealizado(dados_login.TextoSucesso)

    })
})