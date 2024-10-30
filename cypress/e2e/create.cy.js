const { beforeEach } = require("mocha")

describe('create order', () => {

  //Login otomatis
  beforeEach(() => {
    cy.visit('https://v2.jubelio.com/');
    cy.get('#textfield-email').type('amandalubis9596@gmail.com');
    cy.get('#textfield-password').type('T3nj0123!');
    cy.get('button[type="submit"]').click();
    cy.url().should('include','/shared/integration'); //Verifikasi berhasil login

    //Buka halaman Transaksi Penjualan
    cy.contains('#mr-2', 'Penjualan').trigger('mouseover'); //Klik menu
    cy.contains('.text-nowrap', 'Transaksi Penjualan').click; //Klik submenu
    cy.url().should('include', '/sales/transactions/orders'); //Verifikasi berhasil klik menu

  });


  it('pilih menu', () => {
   
  })
})