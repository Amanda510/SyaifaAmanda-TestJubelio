describe('search order', () => {

  //Login otomatis
  beforeEach(() => {
    cy.visit('https://v2.jubelio.com/');
    cy.get('#textfield-email').type('amandalubis9596@gmail.com');
    cy.get('#textfield-password').type('T3nj0123!');
    cy.get('button[type="submit"]').click();
    cy.url().should('include','/shared/integration'); //Verifikasi berhasil login
    cy.visit('https://v2.jubelio.com/sales/transactions/orders');
    cy.get('[data-testid="ChevronRightIcon"]').click();

  });


  it('search', () => {
    const orderNumber = 'SO-000000002';  // nomor pesanan yang dicari
    const otherOrderNumbers = 'SO-000000001'; //bukan nomor pesanan yang dicari

    cy.get('input[name="q"]').type(orderNumber).should('have.value', orderNumber).type('{enter}');; //input nomor pesanan
    cy.get('a').contains(orderNumber).should('exist');
    cy.get('a').contains(otherOrderNumbers).should('not.exist');
    cy.get('a.MuiTypography-root.MuiTypography-inherit.MuiLink-root.MuiLink-underlineAlways.text-link.font-weight-bold.css-x8nsji').contains('SO-000000002').click();
    cy.get('h4').contains('Pesanan - SO-000000002').should('exist');
  })
})