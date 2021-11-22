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
        "xref": "d1be605acd33cc504def6b16bf1ca8e7", 
        "_": 1637624142948,
    };

    const headersData = {
        cookie:
        "_ga=GA1.2.1115316784.1634985037; _gid=GA1.2.206692117.1637600234; pubkey=84081ee4f409f205997c2bb785e91423; _gat_gtag_UA_29683426_11=1; fp=27; lfp=10/23/2021, 12:30:48 PM; pa=1637600245008.3080.8610615685079068next.privat24.ua0.4403316835165172+4"
    };

    cy.request({
        method: "POST",
        url: "https://next.privat24.ua/api/p24/pub/mobipay",
        body: requestBody,
        headers: headersData,
    }).then((response) => {
        console.log(response.body);
    });
});

//4552 3314 4813 8217
//686979712