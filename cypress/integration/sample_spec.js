describe('My First Test', function() {
    it('Visit the Nexwayowa wieś!', function() {
        cy.visit('https://www.nexway.com/')
      
        cy.contains('type').click()
    
    })
})
