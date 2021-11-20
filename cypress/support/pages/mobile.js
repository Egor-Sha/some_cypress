export class Mobile {

    

    typeMobileNumber(phoneNumber) {
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }

    typeAmount(amountToPut) {
        cy.get('[data-qa-node="amount"]')
            .type(amountToPut)
    }

    ccDetailsSubmit() {
        cy.get('[data-qa-node="submit"]')
        .click()
    }

    ccDetailsCheck(ccToCheck) {
        cy.get('[data-qa-node="card"]')
        .should('have.text', ccToCheck)
    }

    amountToCheck(amount) {
        cy.get('[data-qa-node="amount"]')
        .should('have.text', amount)   
    }

    currencyToCheck(curCurrency) {
        cy.get('[data-qa-node="currency"]')
        .eq(0)
        .should('contain.text', curCurrency)    
    }



}

export const mobile = new Mobile ()
