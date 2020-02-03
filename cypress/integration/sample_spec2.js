describe('My Second Test', function() {
    it('clicks the link 'https://www.nexway.com/#', function() {
        cy.visit('https://www.nexway.com/')
      
        cy.contains('type').click()
    
    })
})
