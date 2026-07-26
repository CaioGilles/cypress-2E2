export default {
    TelaCadastro() {
        cy.visit('/')
            .get('#top_header')
            .get('.fa-lock')
            .click()
        
    },

    TelaLogin() {
        cy.visit('/')
            .get('.fa-user')
            .should('be.visible')
            .click()
    }
}