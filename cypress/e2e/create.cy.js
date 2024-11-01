describe('create order', () => {

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


  it('create', () => {
    //Tambah detail pesanan
    cy.contains('button', 'Tambah Baru').click();
    cy.get('input[placeholder="Pilih pelanggan"]').click();
    cy.get('ul[class^="MuiAutocomplete-list"]').should('be.visible').contains('Akulaku').click();
    cy.get('input[placeholder="No. ref"]').type('tes123');
    cy.get('input[placeholder="Pilih lokasi"]').click();
    cy.get('ul[class^="MuiAutocomplete-list"]').should('be.visible').contains('Pusat').click();
    cy.get('textarea[placeholder="Masukkan keterangan"]').type('tes automation');

    //Tambah produk
    cy.get('button[type="button"]').contains('Tambah Baru').click();
    cy.get('#mui-4').click();
    cy.get('#mui-4').type('{downarrow}');
    cy.get('#mui-4').type('{enter}');
    

    //Tambah penerima
    cy.get('input[name="shipping_full_name"]').should('have.value', 'Akulaku');
    cy.get('.text-primary').contains('Masukkan Alamat').click();
    cy.get('input[placeholder="Cth:  Blok, Unit No, Patokan"]').type('Tes Alamat');
    cy.get('input[placeholder="Masukkan negara"]').type('Indonesia');
    cy.get('.MuiPaper-root[role="dialog"]').find('button.MuiButton-root[type="submit"]').contains('Simpan').click();
    cy.get('input[name="shipping_phone"]').type('09876543212')

    //Tambah pengiriman
    cy.get('input[name="is_acknowledge"]').check({ force: true }).should('be.checked'); 
    cy.get('input[name="tracking_no"]').type('resi2139328p');
    cy.get('input[placeholder="Pilih kurir"]').click();
    cy.get('ul[class^="MuiAutocomplete-listbox"]').should('be.visible').contains('Jago Pack').click();

    //Harga
    cy.get('input[name="is_paid"]').check({ force: true }).should('be.checked');

    //Submit pesanan
    cy.get('button[type="button"]').contains('Simpan').click();
    cy.get('div.MuiAlert-message').should('be.visible').and('contain', 'Data berhasil disimpan');
    
     //Buka pesanan
     cy.get('a.MuiTypography-root.MuiTypography-inherit.MuiLink-root.MuiLink-underlineAlways.text-link.font-weight-bold.css-x8nsji').contains('SO-').click();
     cy.get('div.MuiBox-root.css-bi7a57').find('p.mb-0').should('contain.text', 'tes automation');  
  })
})