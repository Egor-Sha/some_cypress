/// <reference types="Cypress" />

it('api get simple', () => {
    cy.request('https://next.privat24.ua/')
        .then((response) => {
            console.log(response);

        })
})


it('api post simple', () => {
    const requestBody = {
        "action": "info", 
        "phone": "+380686979712", 
        "amount": 50, 
        "currency": "UAH", 
        "cardCvv": "111", 
        "card": "4552331448138217", 
        "cardExp": "0526", 
        "xref": "ab630d7f198c5cdf7399e1b3b02e7a17", 
        "_": 1637624142948,
    };

    const headersData = {
        cookie:
        "_ga=GA1.2.1115316784.1634985037; _gid=GA1.2.206692117.1637600234; pubkey=d2c25d0e8b8954ac94dc9c081a715a99; _gat_gtag_UA_29683426_11=1; fp=33; lfp=10/23/2021, 12:30:48 PM; pa=1637689627168.99340.5983766348856914next.privat24.ua0.8200040606664638+1"
    };

    cy.request({
        method: "POST",
        url: "https://next.privat24.ua/api/p24/pub/mobipay",
        body: requestBody,
        headers: headersData,
    }).then((response) => {
        expect(response).to.have.property('status').to.equal(200)
        expect(response.body).to.have.property('status').to.equal('success')

        console.log(response);
    });
});

//4552 3314 4813 8217
//686979712

it.only('api post more than simple', () => {
    const requestBody = {
        "action": "info", 
        "phone": "+380686979712", 
        "amount": 50, 
        "currency": "UAH", 
        "cardCvv": "111", 
        "card": "4552331448138217", 
        "cardExp": "0526", 
        "xref": "ab630d7f198c5cdf7399e1b3b02e7a17", 
        "_": 1637624142948,
    };

    const headersData = {
        cookie:
        "_ga=GA1.2.1115316784.1634985037; _gid=GA1.2.206692117.1637600234; pubkey=d2c25d0e8b8954ac94dc9c081a715a99; _gat_gtag_UA_29683426_11=1; fp=33; lfp=10/23/2021, 12:30:48 PM; pa=1637689627168.99340.5983766348856914next.privat24.ua0.8200040606664638+1"
    };

    cy.request({
        method: "POST",
        url: "https://next.privat24.ua/api/p24/pub/mobipay",
        body: requestBody,
        headers: headersData,
    }).its('body').should('contain', {
        status: 'success'
    }).its('data').should('contain', {
        status: 'ok'
    })
});