export class Base {

    open(url) {
     cy.visit(url)
    }

    insertCardData(cardNumber, expDate, cvvCode) {
        cy.get('[data-qa-node="numberdebitSource"]')
        .type(cardNumber)
        .get('[data-qa-node="expiredebitSource"]')
        .type(expDate)
        .get('[data-qa-node="cvvdebitSource"]')
        .type(cvvCode)
    }

    nameAndLastNameInput(name, lastName) {
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(name)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(lastName)
    
        }


}

export const base = new Base()