describe ('Saucedemo test', function() {
    it ('Visits Saucedemo and logs in',function() {
        cy.visit('https://www.saucedemo.com/')
        
        cy.get('input[id=user-name]').type('standard_user')
        
        cy.get('input[id=password]').type('secret_sauce')

        cy.get('.btn_action').click();
        

        
    })
})