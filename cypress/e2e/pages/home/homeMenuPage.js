class homeMenuPage{
    selectCart(){
        return cy.get("#cartur").click()
    }
    
    completeInformation(){
        cy.contains('Place Order').click()
        cy.get("#name").type('Maryori')
        cy.get("#country").type('PE')
        cy.get("#city").type('Lima')
        cy.get("#card").type('4557 3432 2322 1211')
        cy.get("#month").type('07')
        cy.get("#year").type('2028')
        cy.contains('Purchase').click()
    }
}

export default homeMenuPage

