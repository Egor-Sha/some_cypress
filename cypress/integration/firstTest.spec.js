/// <reference types="Cypress" />

it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('Sign in');
})

it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('div','Sign in');
})

it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('ADD TO CART',{matchCase: false});
})

it.only('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('footer').contains('Go to old version');
})



// it.only('using get find eq', () => {
//     cy.visit('https://next.privat24.ua/deposit/open')
//     cy.get('tbody').find('td').find('div').find('button').eq('0')
// });

//hello git


//проверить цепочку селекторов
// it.only('using get find eq', () => {
//     cy.viewport(1800, 700)
//     cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
//     cy.get('aside').find('div').find('ol').find('li').find('a')
// });