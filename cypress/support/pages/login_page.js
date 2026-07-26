
const elementos_login = {

    input: {
        Email: "#user",
        Senha: "#password"

    },

    button: {
        Login: "#btnLogin"

    },

    fields: {
        TituloLogin: '#login_area .account_form h3',
        LoginRealizado: '#swal2-title'

    },

    checkbox: {
        LembrarDeMim: ".form-check-input"
    }
}


export default {

    ValidarAcessoTelaLogin(tituloLogin) {
        cy.get(elementos_login.fields.TituloLogin)
            .should('have.text', tituloLogin )
    },

    PreencherCampoEmail(email) {
        cy.get(elementos_login.input.Email)
            .type(email)

    },

    PreencherCampoSenha(senha) {
        cy.get(elementos_login.input.Senha)
            .should('be.visible')
            .type(senha)
    },

    ClicarLembrarDeMim() {
        cy.get(elementos_login.checkbox.LembrarDeMim)
            .check()
    },

    CLicarLogin() {
        cy.get(elementos_login.button.Login)
            .click()
    },
    ValidarLoginRealizado(textoSucesso) {
        cy.get(elementos_login.fields.LoginRealizado)
            .should('have.text', textoSucesso)
    }
}