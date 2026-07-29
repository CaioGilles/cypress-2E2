const elementos_cadastro_usuario = {

    inputs: {
        nome: '#user',
        email: '#email',
        senha: '#password'
    },

    buttons: {
        cadastrar: '#btnRegister'

    },

    divs: {

        CadastroUsuario: '.account_form > h3',
        CadastroRealizadoTitulo: '#swal2-title',
        Error: '.errorLabel'

    }
}


export default {

    ValidaAcessoTelaCadastro() {

        cy.get(elementos_cadastro_usuario.divs.CadastroUsuario)
            .then((element) => {
                console.log(element.text())
                expect(element.text()).eq('Cadastro de usuário')


        })
    },

    PreencherCampoNome(name) {
        if (name)
            cy.get(elementos_cadastro_usuario.inputs.nome)
                .type(name)
    },

    PreencherCampoEmail(email) {
        cy.get(elementos_cadastro_usuario.inputs.email)
            .type(emai)
    },

    PreencherCampoSenha(senha) {
        if (senha)
            cy.get(elementos_cadastro_usuario.inputs.senha)
                .type(senha)
    },

    ClicarBotaoCadastrar(MensagemSucesso) {
        cy.get(elementos_cadastro_usuario.buttons.cadastrar)
            .click()
            .get(elementos_cadastro_usuario.divs.CadastroRealizadoTitulo)
            .should('have.text', MensagemSucesso)
    },
    ValidarMensagemErro(mensagem){
        cy.get(elementos_cadastro_usuario.divs.Error)
            .should('have.text', mensagem)
    },
    ClicarCadastrar() {
        cy.get(elementos_cadastro_usuario.buttons.cadastrar)
            .click()
    }}