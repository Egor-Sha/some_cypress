/// <reference types="Cypress" />

<<<<<<< Updated upstream

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
=======
it('api simple example', ()=> {

const headersData = {
    cookie:
    ''
}

cy.request({
    method: 'POST',
}).then((response) => {
    expect(response).to.have.property('status').to.equal(200)

    console.log(response);
});
});




// it('api simple example', ()=> {

//     const headersData = {
//         cookie:
//         ''
//     }
    
//     cy.request({
//         method: 'POST',
//     }).then((response) => {
//         expect(response).to.have.property('status').to.equal(200)
    
//         console.log(response);
//     });
//     });
>>>>>>> Stashed changes
