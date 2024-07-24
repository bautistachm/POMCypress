import homeMenuPage from "../pages/home/homeMenuPage"

describe('purchase products',() => {
    it('purchase first product', () => {
        cy.visit('https://demoblaze.com/index.html')
        const home = new homeMenuPage()
        home.selectCart()
        cy.wait(7000)
        home.completeInformation()

    })
    
})