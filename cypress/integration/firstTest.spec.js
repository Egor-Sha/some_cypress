/// <reference types="Cypress" />

import { mobile } from "../support/pages/mobile"
import { base } from "../support/pages/base"
import { transfers } from "../support/pages/transfers"

it.only('page object mobile', ()=> {
    base.open('https://next.privat24.ua/mobile?lang=en')
    mobile.typeMobileNumber('686484484')
    mobile.typeAmount('2')
    base.insertCardData('4552331448138217','0524','111');    
    cy.wait(3000)
    base.nameAndLastNameInput('egrrr','pomidor')
    mobile.ccDetailsSubmit()    
    mobile.ccDetailsCheck('4552 **** **** 8217')
    mobile.amountToCheck('2')
    mobile.currencyToCheck('UAH')
    
    cy.get('[data-qa-node="commission"]')
    .eq(1)
    .should('have.text', '2')
    
    cy.get('[data-qa-node="commission-currency"]')
    .should('contain.text', 'UAH')
    



    
})