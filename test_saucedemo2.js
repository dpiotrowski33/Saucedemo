describe ('Saucedemo test', function() {
    it ('I am able to see products after login',function() {
        cy.visit('https://www.saucedemo.com/')
        
        cy.get('input[id=user-name]').type('standard_user')
        
        cy.get('input[id=password]').type('secret_sauce')

        cy.get('.btn_action').click();

        cy.get('.inventory_item_name').should('have.text', 'Sauce Labs BackpackSauce Labs Bike LightSauce Labs Bolt T-ShirtSauce Labs Fleece JacketSauce Labs OnesieTest.allTheThings() T-Shirt (Red)')
        

        
    })
})