describe('edit order', () => {

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


  it('edit', () => {
    //Buka pesanan
    cy.get('a.MuiTypography-root.MuiTypography-inherit.MuiLink-root.MuiLink-underlineAlways.text-link.font-weight-bold.css-x8nsji').contains('SO-').click();
  
    //Edit detail pesanan
    cy.get('button[title="edit"]').click();
    cy.wait(2000);
    cy.get('input[placeholder="Pilih pelanggan"]').clear().click();
    cy.get('ul[class^="MuiAutocomplete-list"]').should('be.visible').contains('BUKALAPAK').click();
    cy.wait(2000);
    cy.get('input[placeholder="No. ref"]').clear().type('tes123 edit');
    cy.get('textarea[placeholder="Masukkan keterangan"]').clear().type('tes automation edit');
    
    //Edit Penerima
    cy.get('input[name="shipping_full_name"]').should('have.value', 'BUKALAPAK');
    cy.get('input[name="shipping_phone"]').clear().type('0123859203')

    //Edit Pengiriman
    cy.get('input[name="tracking_no"]').clear().type('editresi231942a');
    cy.get('input[placeholder="Pilih kurir"]').click();
    cy.get('ul[class^="MuiAutocomplete-listbox"]').should('be.visible').contains('DUTA TRANS').click();
  
    //Simpan Perubahan
    cy.get('button[type="button"]').contains('Simpan').click();
    cy.get('div.MuiAlert-message').should('be.visible').and('contain', 'Data berhasil disimpan');
    
    //Cek Perubahan
    cy.get('td.MuiTableCell-root').should('be.visible').and('contain', 'BUKALAPAK');
    
  })
})