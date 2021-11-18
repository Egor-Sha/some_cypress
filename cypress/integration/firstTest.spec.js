/// <reference types="Cypress" />


it('should', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
        .type(100)
        .should('have.value',100)
        .and('be.visible')
})

it('expect', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
        .type(999).then( input=> {
            expect(input).to.have.value(99)
        })
})

it('expect', ()=> {
    cy.visit('https://next.privat24.ua/deposit/open?lang=ru')
    cy.contains('Мои депозиты')
        .trigger('mouseover')
        .get('#forecast')
        .should('be.visible')
})

it.only('check url', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.url()
        .should('eq','https://next.privat24.ua/mobile?lang=en')
})