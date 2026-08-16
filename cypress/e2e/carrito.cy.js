describe('Pruebas del Carrito de Compras', () => {

    
    beforeEach(() => {
        cy.viewport(1280, 720);
    });

    it('Debería agregar un producto al carrito y luego eliminarlo correctamente', () => {
        
        cy.visit('https://automationexercise.com/products');

     
        cy.get('#search_product').type('tshirt');
        cy.get('#submit_search').click();

        cy.get('.single-products').first().scrollIntoView();

        cy.get('.add-to-cart').first().click({ force: true });

        cy.get('.modal-content').should('be.visible');
        cy.get('u').contains('View Cart').click();

        cy.url().should('include', '/view_cart');
        cy.get('#cart_info_table tbody tr').should('have.length.at.least', 1);

        cy.get('.cart_quantity_delete').first().click();
        
        cy.get('#empty_cart').should('be.visible').and('contain.text', 'Cart is empty!');

        cy.get('#cart_info_table tbody tr').should('not.exist');
    });
});