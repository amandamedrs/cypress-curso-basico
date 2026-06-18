Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type ('Amanda')
    cy.get('#lastName').type ('Medeiros')
    cy.get('#email').type ('amandamedeiros@email.com')
    cy.get('#open-text-area').type ('Teste')
    cy.contains('button', 'Enviar').click()

})