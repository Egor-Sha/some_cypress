/// <reference types="Cypress" />

it('api get simple', ()=> {
    cy.request('https://next.privat24.ua/')
    .then((response)=>{
        console.log(response);

    })
})