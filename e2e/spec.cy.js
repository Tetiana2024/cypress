describe('Visit saucedemo page', () => {
  context('720 resolution', () => {
    beforeEach(() => {
     cy.viewport(1280, 720)
     cy.visit('https://www.saucedemo.com/');
   })

    it('[P] assert im on login page', () => {
     cy.get('.login_logo').should('have.text', 'Swag Labs');
    })

   it('[P] fill login forms', () => {
     cy.get('[data-test="username"]').type('locked_out_user');
     cy.get('[data-test="password"]').type('secret_sauce');
     cy.get('[data-test="login-button"]').click();
    })
   
    it('[P] fill login forms', () => {
     cy.get('[data-test="username"]').type('problem_user');
     cy.get('[data-test="password"]').type('secret_sauce');
     cy.get('[data-test="login-button"]').click();
    })

    it('[P] fill login forms', () => {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click(); 
    })
    
    it('[P] add to cart', () => {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('[class="title"]').contains('Products');  
      cy.contains('.inventory_item', 'Sauce Labs Backpack').find('.btn_inventory').click();
    })

    it('[P] in the cart', () => {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('[class="title"]').contains('Products');  
      cy.contains('.inventory_item', 'Sauce Labs Backpack').find('.btn_inventory').click();
      cy.get('.shopping_cart_badge').should('have.text', '1');
    })

    it('[P] logout and check login page', () => {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').click();
    })
  })
})