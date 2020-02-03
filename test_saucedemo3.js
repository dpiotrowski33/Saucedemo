describe ('Saucedemo test', function() {
    it (' I am able to add product to cart',function() {
        cy.visit('https://www.saucedemo.com/')
        
        cy.get('[data-test=username]').type('standard_user')
        
        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('.btn_action').click();

        cy.get(':nth-child(1) > .pricebar > .btn_primary').click();

        cy.get('.fa-layers-counter').should('contain', '1')
    
  


        

        
    })
})