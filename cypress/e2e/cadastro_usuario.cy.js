import cadastro_usuario_page from "../support/pages/cadastro_usuario_page"
import home_page from "../support/pages/home_page"
const dados_cadastro = require("../fixtures/cadastro_usuario.json")


describe('Cadastro de usuário', () => {

    beforeEach('Acessar Tela de Cadastro', () => {
        home_page.TelaCadastro()
    })

    it('Cadastro com sucesso', () => {

        cadastro_usuario_page.ValidaAcessoTelaCadastro()
        cadastro_usuario_page.PreencherCampoNome(dados_cadastro.nomeUsuario)
        cadastro_usuario_page.PreencherCampoEmail(dados_cadastro.emailUsuario)
        cadastro_usuario_page.PreencherCampoSenha(dados_cadastro.senhaUsuario)
        cadastro_usuario_page.ClicarBotaoCadastrar(dados_cadastro.MensagemSucesso)

    })

    it('Campo Nome vazio', () => {

        cadastro_usuario_page.PreencherCampoNome()
        cadastro_usuario_page.PreencherCampoEmail(dados_cadastro.emailUsuario)
        cadastro_usuario_page.PreencherCampoSenha(dados_cadastro.senhaUsuario)
        cadastro_usuario_page.ClicarCadastrar()
        cadastro_usuario_page.ValidarMensagemErro(dados_cadastro.MensagemErro)

    })

    it('Campo Email vazio', () => {
        cadastro_usuario_page.ValidaAcessoTelaCadastro()
        cadastro_usuario_page.PreencherCampoNome(dados_cadastro.nomeUsuario)
        cadastro_usuario_page.PreencherCampoSenha(dados_cadastro.senhaUsuario)
        cadastro_usuario_page.ClicarCadastrar()
        cadastro_usuario_page.ValidarMensagemErro(dados_cadastro.MensagemErro2)
    })

    it('Campo Senha vazio', () => {
        cadastro_usuario_page.ValidaAcessoTelaCadastro()
        cadastro_usuario_page.PreencherCampoNome(dados_cadastro.nomeUsuario)
        cadastro_usuario_page.PreencherCampoEmail(dados_cadastro.emailUsuario)
        cadastro_usuario_page.PreencherCampoSenha()
        cadastro_usuario_page.ClicarCadastrar()
        cadastro_usuario_page.ValidarMensagemErro(dados_cadastro.MensagemErro3)
    })

    
})