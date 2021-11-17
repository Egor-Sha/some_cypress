/// <reference types="Cypress" />

it.only('using get find eq', () => {
    cy.visit('https://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq('0')
});

//проверить цепочку селекторов
// it.only('using get find eq', () => {
//     cy.viewport(1800, 700)
//     cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
//     cy.get('aside').find('div').find('ol').find('li').find('a')
// });